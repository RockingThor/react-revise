import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import sensible from "@fastify/sensible";
import cookie from "@fastify/cookie";

dotenv.config();

const app = fastify();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  credentials: true,
});
app.register(cookie, { secret: process.env.JWT_SECRET });
app.addHook("onRequest", (req, res, done) => {
  if (req.cookies.userId !== CURRENT_USER_ID) {
    req.cookies.userId = CURRENT_USER_ID;
    res.clearCookie("userId");
    res.setCookie("userId", CURRENT_USER_ID);
  }
  done();
});

const prisma = new PrismaClient();

const CURRENT_USER_ID = await prisma.user.findFirst({ where: { name: "Kyle" } })
  .id;

const COMMENT_SELECT_FIELD = {
  id: true,
  message: true,
  parentId: true,
  createdAt: true,
  user: {
    select: {
      id: true,
      name: true,
    },
  },
};

app.get("/posts", async (req, res) => {
  return await prismaErrorHandler(
    prisma.post.findMany({
      select: {
        id: true,
        title: true,
      },
    })
  );
});

app.get("/posts/:id", async (req, res) => {
  return await prismaErrorHandler(
    prisma.post.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        body: true,
        title: true,
        comments: {
          orderBy: {
            createdAt: "desc",
          },
          select: COMMENT_SELECT_FIELD,
        },
      },
    })
  );
});

app.post("/posts/:id/comments", async (req, res) => {
  if (req.body.message === "" || req.body.message == null) {
    return res.send(app.httpErrors.badRequest("Message is required"));
  }
  return prismaErrorHandler(
    prisma.comment.create({
      data: {
        message: req.body.message,
        userId: req.cookies.userId,
        parentId: req.body.parentId,
        postId: req.params.id,
      },
      select: COMMENT_SELECT_FIELD,
    })
  );
});

async function prismaErrorHandler(promise) {
  const [error, data] = await app.to(promise);

  if (error) return app.httpErrors.internalServerError(error.message);

  return data;
}

app.listen({ port: process.env.PORT });
