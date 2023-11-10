import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth.slice"
import homeReducer from "../reducers/home.slice"
import courseReducer from "../reducers/courses.slice"

const store = configureStore({
    reducer: {auth: authReducer, home: homeReducer, courses: courseReducer},
})

export default store;