import style from './style.module.css';

const Header = () => {
    return (
        <>
        <h1 className={style.title}>Наши топ-блогеры</h1>
        <p className={style.description}>Лучше специалисты в своем деле, 
средний опыт работы в профессии - 27 лет</p>
        </>
    )
}
export default Header