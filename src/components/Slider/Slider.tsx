import UserCard from '../UserCard/UserCard';
import style from './style.module.css';
import { useContext, useRef } from 'react';
import { Context } from '../../context/context.js';
import { ContextInterface } from '../../interfaces';

const Slider = () => {

    const context: ContextInterface = useContext(Context);
    const ref = useRef(null)

    const handleClickLeft = () => {
        ref.current.scrollLeft -= 330
    }
    const handleClickRight = () => {
        ref.current.scrollLeft += 330

    }


    return (
        <>
        <div className={style.navigation}>
            <button onClick={handleClickLeft} className={style.leftArrow}></button>
            <button onClick={handleClickRight} className={style.rightArrow}></button>
        </div>
        
        <div ref={ref} className={style.sliderContainer}>
        {
        context.users && context.users.map(user => <UserCard 
            key={user.id}
            username={user.name} 
            company={user.company.name} 
            id={user.id} /> )
        }
            
           
       
        </div>
        </>
       
       
    )
}
export default Slider;