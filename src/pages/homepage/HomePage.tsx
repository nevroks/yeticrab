import React, {useEffect, useMemo} from 'react';
import classes from "./style.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import {Button} from "@gravity-ui/uikit";
import {toggleAdmin} from "../../store/admin/adminSlice.ts";
import Apply from "../../components/applies/Apply.tsx";
import {IApply} from "../../types/types.tsx";
import {addApply} from "../../store/applies/appliesSlice.ts";
import AppliesList from "../../components/applies/AppliesList.tsx";

const HomePage = () => {
    const isAdmin=useAppSelector(state => state.admin.value)
    const countOfApplies=useAppSelector(state => state.applies.length)
    const dispatch=useAppDispatch()
    const newApply:IApply=useMemo(()=>{
        return {
            id:countOfApplies+1,
            date:'',
            company:"Название компании клиента",
            deliver:"ФИО перевозчика",
            phoneNumber:'Номер перевозчика',
            commentary:'Коментарий',
            status:'Новая',
            ati:`https://ati.su/firms/${countOfApplies+1}/info`
        }
    },[countOfApplies])
    useEffect(()=>{
        if (localStorage.getItem('isAdmin') !== null){
            if (isAdmin !== localStorage.getItem('isAdmin')){
                dispatch(toggleAdmin())
            }
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('isAdmin',JSON.stringify(isAdmin))
    },[isAdmin])
    const clickHandler=()=>{
        dispatch(toggleAdmin())
    }
    const handleAddApply=()=>{
        dispatch(addApply(newApply))
        console.log(newApply)
    }
    return (
        <div className={classes.page__content}>
            <div className={classes.page_btn__container}>
                <div>
                    <Button onClick={clickHandler} view="normal" size="l">{isAdmin ? 'Войти в режим пользователя' : 'Войти в режим редактирования'}</Button>
                    {isAdmin && <Button onClick={handleAddApply}>Добавить заявку</Button>}
                    <AppliesList/>
                </div>
            </div>

        </div>
    );
};

export default HomePage;