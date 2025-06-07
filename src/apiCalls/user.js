import axios from "axios";

const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/users/`
// const baseURL = "http://localhost:7077/api/v1/users/"

export const getToken = (payload) =>{
    const response = axios.post(`${baseURL}sign-in`, payload);
    return response
} 

export const signup = (payload) =>{
    const response = axios.post(`${baseURL}register`, payload);
    return response
} 

export const verifyOtp = (payload) =>{
    const response = axios.post(`${baseURL}verify-otp`, payload);
    return response
} 

export const getNewOtp = (payload) =>{
    const response = axios.post(`${baseURL}resend-otp`, payload);
    return response
} 

export const passwordReset = (payload) =>{
    const response = axios.post(`${baseURL}reset-password`, payload);
    return response
} 

export const newPwSetter = (payload) =>{
    const response = axios.post(`${baseURL}set-new-password`, payload);
    return response
} 