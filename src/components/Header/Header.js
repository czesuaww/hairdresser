import style from './Header.module.css';
import Arrow from '../Arrow/Arrow.js';

const Header = () => {
    return (
        <div className={style.header}>
            <header className={style.firstPic}></header>
            <p className={style.title}>Chcesz poznać więcej moich prac?</p>
            <Arrow />
        </div>
    )
}

export default Header;