import React from 'react';
import classes from "./style.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";

const HomePage = () => {
    const isAdmin=useAppSelector(state => state.admin.value)
    const dispatch=useAppDispatch()
    return (
        <div className={classes.page__content}>
        </div>
    );
};

export default HomePage;