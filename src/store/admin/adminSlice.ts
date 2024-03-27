import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value:false
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        toggleAdmin:(state)=>{
            state.value=!state.value
        }

    }
})

// Action creators are generated for each case reducer function
export const { toggleAdmin} = adminSlice.actions

export default adminSlice.reducer