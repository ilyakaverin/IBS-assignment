import style from "./style.module.css";
import { useContext } from "react";
import { Context } from "../../context/context.js";
import cn from "classnames";
import { ContextInterface } from "../../interfaces";

interface Card {
  username: string;
  company: string;
  id: number;
}

const UserCard = ({ username, company, id }: Card) => {
  const context: ContextInterface = useContext(Context);
  const handleClick = context.pickComments;
  const isSelected = username === context.pickedComments?.username;

  return (
    <div
      onClick={() => handleClick(id)}
      className={cn(style.cardContainer, { [style.selectedFont]: isSelected })}
    >
      <div className={style.imageContainer}>
        <img
          src={`https://i.pravatar.cc/290?img=${id}`}
          alt="avatar"
          loading="lazy"
          className={cn(style.image, { [style.selected]: isSelected })}
        />
      </div>
      <span className={style.username}>{username}</span>
      <span className={style.company}>{company}</span>
    </div>
  );
};
export default UserCard;
