/* eslint-disable react/prop-types */
import Comment from "./Comment";

const RenderComments = ({ groupedComments, getReplies }) => {
  return (
    <div>
      {groupedComments[null]?.map((comment) => (
        <div className="" key={comment.id}>
          <Comment comment={comment} getReplies={getReplies} />
        </div>
      ))}
    </div>
  );
};

export default RenderComments;
