import UserCard from '../UserCard/UserCard';
import style from './style.module.css';
import { useContext } from 'react';
import { Context } from '../../context/context';

const Slider = () => {

    const context = useContext(Context);


    return (
        <div className={style.sliderContainer}>
        {
        context.users && context.users.map(user => <UserCard 
            key={user.id}
            username={user.name} 
            company={user.company.name} 
            id={user.id} /> )
        }
        </div>
       
       
    )
}
export default Slider;