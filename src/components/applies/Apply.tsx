import {FC, useMemo, useState} from 'react';
import classes from "./style.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.tsx";
import {Button, Icon, TextInput} from "@gravity-ui/uikit";
import {Link} from "react-router-dom";
import {IApply} from "../../types/types.tsx";
import compareArrays from "./../../utils/compareArrays.ts"
import {TrashBin} from '@gravity-ui/icons';
import {FloppyDisk} from '@gravity-ui/icons';
import {Rectangles4} from '@gravity-ui/icons';
import {changeApply, deleteApply} from "../../store/applies/appliesSlice.ts";
type applyPropsType ={
    apply:IApply
}
const Apply:FC<applyPropsType> = ({apply}) => {
    const isAdmin=useAppSelector(state => state.admin.value)
    const dispatch=useAppDispatch()
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
    const changes=useMemo(()=>{
        return compareArrays(moddedApply,apply)
    },[apply,moddedApply])

    const saveHandler=()=> {
        dispatch(changeApply(moddedApply))
    }

    function handleDelete() {
        dispatch(deleteApply(apply.id))
    }

    return (
        <div className={classes.apply}>
            <div className={classes.apply__block}>
                <p>{apply.id}</p>
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ?
                    <p>{apply.date}</p>
                    :
                    <TextInput view="clear"
                               value={moddedApply.date}
                               onChange={e=>setModdedApply({...moddedApply,date:e.target.value})}
                               placeholder='Дата и время получения' />}
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ?
                    <p>{apply.company}</p>
                    :
                    <TextInput  view="clear"
                                value={moddedApply.company}
                                onChange={e=>setModdedApply({...moddedApply,company:e.target.value})}
                                placeholder="Название фирмы клиента"/>}
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ?
                    <p>{apply.deliver}</p>
                    :
                    <TextInput view="clear"
                               value={moddedApply.deliver}
                               onChange={e=>setModdedApply({...moddedApply,deliver:e.target.value})}
                               placeholder="ФИО перевозчика"/>}
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ?
                    <p>{apply.phoneNumber}</p>
                    :
                    <TextInput view="clear"
                               value={moddedApply.phoneNumber}
                               onChange={e=>setModdedApply({...moddedApply,phoneNumber:e.target.value})}
                               placeholder="Контактный телефон перевозчика"/>}
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ?
                    <p>{apply.commentary}</p>
                    :
                    <TextInput  view="clear"
                                value={moddedApply.commentary}
                                onChange={e=>setModdedApply({...moddedApply,commentary:e.target.value})}
                                placeholder="Комментарий"/>}
            </div>
            <div className={classes.apply__block}>
                {!isAdmin ? <p>{apply.status}</p> : <select
                    value={moddedApply.status}
                    onChange={e => setModdedApply({...moddedApply,status:e.target.value})}
                    >
                    <option style={{color:"green"}} value="Новая">Новая</option>
                    <option style={{color:"yellow"}} value="В работе">В работе</option>
                    <option style={{color:"red"}} value="Завершено">Завершено</option>
                </select>}
            </div>
            <div className={classes.apply__block}>
                <p><a href="https://ati.su/firms/12345/info">{apply.ati}</a></p>
            </div>
            <div className={classes.apply__btn_container}>
                <Link className={classes.apply__block} to={`/applies/${apply.id}`}><Button><Icon data={Rectangles4} size={18} /></Button></Link>
                {isAdmin &&<div className={classes.apply__block}><Button onClick={handleDelete}><Icon data={TrashBin} size={18} /></Button></div>}
                {isAdmin &&<div style={!changes ? {scale:"110%",transition:"0.4s"} :{}} className={classes.apply__block}><Button onClick={saveHandler} disabled={changes}><Icon  data={FloppyDisk} size={18} /></Button></div>}
            </div>
        </div>
    );
};

export default Apply;