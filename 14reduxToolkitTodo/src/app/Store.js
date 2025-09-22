import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/TodoSlides';


export const store=configureStore({
    reducer:todoReducer,
})