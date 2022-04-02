import style from './style.module.css';
import Comment from '../Comment/Comment';
import { useContext } from 'react';
import { Context } from '../../context/context';

const UserCard = ({username, company, id}) => {

    const context = useContext(Context);
    const handleClick = context.pickComments;



    return (
        <div onClick={() => handleClick(id)}  className={style.cardContainer}>
            <img src={`https://i.pravatar.cc/255?img=${id}`} alt="avatar" loading="lazy" className={style.image}/>
            <span className={style.username}>{username}</span>
            <span className={style.company}>{company}</span>

        </div>
    )
}
export default UserCard