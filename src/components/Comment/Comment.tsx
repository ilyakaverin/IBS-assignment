import style from "./style.module.css";

interface Comment {
  title: string;
  text: string;
}

const Comment = ({ title, text }: Comment) => {
  return (
    <div className={style.comment}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
export default Comment;
