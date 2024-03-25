import {createSlice} from '@reduxjs/toolkit'


const initialState = []

export const appliesSlice = createSlice({
    name: 'applies',
    initialState,
    reducers: {
        none:(state)=>{

        }
    }
})

// Action creators are generated for each case reducer function
export const { none} = appliesSlice.actions

export default appliesSlice.reducer