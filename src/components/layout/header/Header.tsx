import classes from "./style.module.css";
import logo from "./../../../assets/logo.png"
const Header = () => {
    return (
            <header className={classes.header}>
                <img className={classes.header__logo} src={logo} alt=""/>
                <div className={classes.header__links}>
                    <p>Здесь могли бы быть ваши ссылки</p>
                    <p>Здесь могли бы быть ваши ссылки</p>
                </div>
            </header>
    );
};

export default Header;