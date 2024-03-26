import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IApply} from "../../types/types.tsx";


const initialState:Array<IApply> = []

export const appliesSlice = createSlice({
    name: 'applies',
    initialState,
    reducers: {
        addApply:(state,{payload}:PayloadAction<IApply>)=>{
            state.push(payload)
        },
        changeApply:(state,{payload}:PayloadAction<IApply>)=>{
            const index=Number(payload.id)
            const apply=state.find(applies=>applies.id===index)
            if (apply){
                apply.date=payload.date
                apply.deliver=payload.deliver
                apply.company=payload.company
                apply.commentary=payload.commentary
                apply.phoneNumber=payload.phoneNumber
                apply.status=payload.status
            }
        },
        deleteApply:(state,{payload}:PayloadAction<number>)=>{
            const index = payload-1

            if (index===state.length-1){
                state.splice(-1,1)
                return
            }
            state.splice(index, 1);
            // Переопределяем айдишники
            const changesIndex =state.indexOf(state[index])
            for (let i=changesIndex;i<state.length;i++){
                state[i].id=state[i].id-1
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {addApply,changeApply,deleteApply} = appliesSlice.actions

export default appliesSlice.reducer