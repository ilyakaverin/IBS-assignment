import Comment from "../Comment/Comment";
import style from "./style.module.css";
import { useContext } from "react";
import { Context } from "../../context/context.js";
import { ContextInterface } from "../../interfaces";

const Comments = () => {
  const userComments: ContextInterface = useContext(Context);

  return (
    <div className={style.commentsContainer}>
      <div className={style.innerContainer}>
        <h2>
          {userComments.pickedComments
            ? `3 актуальных поста ${userComments.pickedComments.username}`
            : null}{" "}
        </h2>
        {userComments.pickedComments?.comments.map((item) => (
          <Comment key={item.id} title={item.title} text={item.body} />
        ))}
      </div>
    </div>
  );
};
export default Comments;
