import React from 'react';
import logo from "./../../assets/logo.png"
import classes from "./style.module.css";
import {Button} from "@gravity-ui/uikit";
import {Link} from "react-router-dom";
const HomePage = () => {
    return (
        <div className={classes.page}>
            <img src={logo} alt="logo"/>
            <Button><Link to={"/applies"}>Войти</Link></Button>
        </div>
    );
};

export default HomePage;