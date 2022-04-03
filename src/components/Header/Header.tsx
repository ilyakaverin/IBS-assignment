import style from './style.module.css';
import { useRef, useEffect } from 'react';

const Header = () => {

    const ref = useRef(window);
    useEffect(() => {

        ref.current.history.scrollRestoration = 'manual'
    },[])

    return (
        <>
        <h1 className={style.title}>Наши топ-блогеры</h1>
        <p className={style.description}>Лучше специалисты в своем деле, 
средний опыт работы в профессии - 27 лет</p>
        </>
    )
}
export default Header