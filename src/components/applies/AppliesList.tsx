import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks.tsx";
import Apply from "./Apply.tsx";

const AppliesList = () => {
    const appliesArray=useAppSelector(state => state.applies)

    return (
        <div>
            {appliesArray.map(apply=>{
                return <Apply key={apply.id} apply={apply}/>
            })}
        </div>
    );
};

export default AppliesList;