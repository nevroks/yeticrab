import {combineReducers, configureStore} from '@reduxjs/toolkit'
import appliesReducer from "./todo/appliesSlice.ts"
import adminReducer from "./auth/adminSlice.ts"
const reducers = combineReducers(
    {
        applies:appliesReducer,
        admin:adminReducer
    })
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch