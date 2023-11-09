import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const authLoginAction = createAsyncThunk("auth/login", async ({ username, password }) => {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const response = await axios.post(`${baseUrl}/auth/login`, {
       username, password
    })
    return response.data
})

const registerAction = createAsyncThunk("auth/register", async ({ username, password }) => {
    // const baseUrl = import.meta.env.VITE_BASE_URL
    const response = await axios.post(`/api/users`, {
       id: nanoid(), username, password
    })

    console.log(response)

    return response
})

export { authLoginAction, registerAction }