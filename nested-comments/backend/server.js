import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import sensible from "@fastify/sensible";

dotenv.config();

const app = fastify();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  credentials: true,
});
const prisma = new PrismaClient();

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

async function prismaErrorHandler(promise) {
  const [error, data] = await app.to(promise);

  if (error) return app.httpErrors.internalServerError(error.message);

  return data;
}

app.listen({ port: process.env.PORT });
