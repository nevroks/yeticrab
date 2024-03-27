import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks.tsx";
import {Button, Icon} from "@gravity-ui/uikit";
import {ArrowLeft} from '@gravity-ui/icons';
import classes from "./style.module.css";
const ApplyPage = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const apply=useAppSelector(state => state.applies[Number(id)-1])
    return (
        <div className={classes.page}>
            <Button onClick={()=>navigate(-1)}><Icon data={ArrowLeft} size={18} />Назад</Button>
            <div className={classes.apply__block}>
                <p>ID:{apply.id}</p>
            </div>
            <div className={classes.apply__block}>
                <p>Дата и время:{apply.date}</p>
            </div>
            <div className={classes.apply__block}>
                <p>Название компании клиента:{apply.company}</p>
            </div>
            <div className={classes.apply__block}>
                <p>ФИО перевозчика:{apply.deliver}</p>
            </div>
            <div className={classes.apply__block}>
                <p>Номер перевозчика:{apply.phoneNumber}</p>
            </div>
            <div className={classes.apply__block}>
                <p>Коментарий:{apply.commentary}</p>
            </div>
            <div className={classes.apply__block}>
                <p>Статус:{apply.status}</p>
            </div>
            <div className={classes.apply__block}>
                <p><a href={`${apply.ati}`}>ATI код:{apply.ati}(ссылка)</a></p>
            </div>
        </div>
    );
};

export default ApplyPage;