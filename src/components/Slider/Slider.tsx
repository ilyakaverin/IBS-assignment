import UserCard from '../UserCard/UserCard';
import style from './style.module.css';
import { useContext, useRef } from 'react';
import { Context } from '../../context/context';

const Slider = () => {

    const context = useContext(Context);
    const ref = useRef(null)

    const handleClickLeft = () => {
        ref.current.scrollLeft -= 280
    }
    const handleClickRight = () => {
        ref.current.scrollLeft += 280

    }


    return (
        <>
        <div className={style.navigation}>
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
        </div>
        
        <div ref={ref} className={style.sliderContainer}>
            <div  className={style.sliderInnerContainer}>
            {
        context.users && context.users.map(user => <UserCard 
            key={user.id}
            username={user.name} 
            company={user.company.name} 
            id={user.id} /> )
        }

            </div>
           
       
        </div>
        </>
       
       
    )
}
export default Slider;