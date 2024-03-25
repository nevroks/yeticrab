import React, {FC, useMemo, useState} from 'react';
import classes from "./style.module.css";
import {useAppSelector} from "../../hooks/reduxHooks.tsx";
import {Button, Select, TextInput} from "@gravity-ui/uikit";
import {DateField} from '@gravity-ui/date-components';
import {Link} from "react-router-dom";
import {IApply} from "../../types/types.tsx";
import compareArrays from "./../../utils/compareArrays.ts"

const Apply:FC<IApply> = ({apply}) => {
    const isAdmin=useAppSelector(state => state.admin.value)

    const [moddedApply,setModdedApply]=useState({
        id:apply.id,
        date:apply.date,
        company:apply.company,
        deliver:apply.deliver,
        phoneNumber:apply.phoneNumber,
        commentary:apply.commentary,
        status:apply.status,
        ati:apply.ati
    })
    console.log(moddedApply.date)
    const changes=useMemo(()=>{
        return compareArrays(moddedApply,apply)
    },[moddedApply])
    return (
        <div className={classes.apply}>
            <div>
                <p>{apply.id}</p>
            </div>
            <div>
                {!isAdmin ? <p>{apply.date}</p> : <DateField onChange={()=>{}} format='YYYY/MM/DD/H/m' />}
            </div>
            <div>
                {!isAdmin ? <p>{apply.company}</p> : <TextInput placeholder="Название фирмы клиента"/>}
            </div>
            <div>
                {!isAdmin ? <p>{apply.deliver}</p> : <TextInput placeholder="ФИО перевозчика"/>}
            </div>
            <div>
                {!isAdmin ? <p>{apply.phoneNumber}</p> : <TextInput placeholder="Контактный телефон перевозчика"/>}
            </div>
            <div>
                {!isAdmin ? <p>{apply.commentary}</p> : <TextInput placeholder="Комментарий"/>}
            </div>
            <div>
                {!isAdmin ? <p>Статус заявки</p> : <select>
                    <option style={{color:"green"}} value="new">Новая</option>
                    <option style={{color:"yellow"}} value="work">В работе</option>
                    <option style={{color:"red"}} value="end">Завершено</option>
                </select>}
            </div>
            <div>
                <p><a href="https://ati.su/firms/12345/info">{apply.ati}</a></p>
            </div>
            <div className={classes.apply__btn_container}>
                <Link to={'/'}>Подробнее</Link>
                {isAdmin &&<Button>Удалить</Button>}
                {isAdmin &&<Button disabled={!changes}>Сохранить</Button>}
            </div>
        </div>
    );
};

export default Apply;