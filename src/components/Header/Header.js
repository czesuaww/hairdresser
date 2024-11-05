import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <header className={style.firstPic}></header>
            <p className={style.title}>Chcesz poznać więcej moich prac?</p>
        </div>
    )
}

export default Header;