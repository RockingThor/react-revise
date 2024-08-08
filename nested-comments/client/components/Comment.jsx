/* eslint-disable react/prop-types */
import { formatDate } from "../utils/dateHelper";
import { FaHeart, FaReply, FaRegEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MyButton from "./MyButton";

const Comment = ({ comment, getReplies }) => {
  console.log(comment[null]);
  const { id, message, user, createdAt } = comment;
  const { name } = user;
  const [viewReply, setViewReply] = useState(false);
  const [numOfReplies, setNumOfReplies] = useState(0);
  const [childComment, setChildComment] = useState([]);

  useEffect(() => {
    const childComponents = getReplies(id);
    if (!childComponents) return;
    setChildComment(childComponents);
    setNumOfReplies(childComponents.length);
  }, [id]);

  function onLike() {}
  function onEdit() {}
  function onDelete() {}
  function onReply() {}

  return (
    <div className="outer__comment">
      <div className="comment">
        <div className="comment__header">
          <span>{name}</span>
          <span className="date">{formatDate(createdAt)}</span>
        </div>
        <div className="comment__body">
          <article>{message}</article>
        </div>
        <div className="comment__footer">
          <MyButton Icon={FaHeart} functionToCall={onLike} />
          <MyButton Icon={FaReply} functionToCall={onReply} />
          <MyButton Icon={FaRegEdit} functionToCall={onEdit} />
          <MyButton Icon={FaTrash} functionToCall={onDelete} />
        </div>
      </div>
      {numOfReplies > 0 && (
        <>
          <span
            className="see__replies__text"
            onClick={() => {
              setViewReply(!viewReply);
            }}
          >
            {`${viewReply ? "Hide" : "View"} ${numOfReplies} ${
              numOfReplies > 1 ? "replies" : "reply"
            }`}{" "}
            <IoIosArrowDown />
          </span>
          {viewReply &&
            childComment.length > 0 &&
            childComment.map((comment) => (
              <div key={comment.id} className="nested__comment">
                <Comment comment={comment} getReplies={getReplies} />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Comment;
