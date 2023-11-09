import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.slice"

const store = configureStore({
    reducer: {auth: authReducer},
})

export default store;