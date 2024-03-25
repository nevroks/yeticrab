import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IApply} from "../../types/types.tsx";


const initialState:Array<IApply> = []

export const appliesSlice = createSlice({
    name: 'applies',
    initialState,
    reducers: {
        addApply:(state,{payload}:PayloadAction<IApply>)=>{
            state.push(payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const {addApply} = appliesSlice.actions

export default appliesSlice.reducer