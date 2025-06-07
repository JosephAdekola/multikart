import axios from "axios"


// const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/products/`
const baseURL = "http://localhost:7077/api/v1/products/"

export const allProducts = ()=>{
    const response = axios.get(`${baseURL}allproducts`)
    return response
}

export const singleProduct = (payload)=>{
    const response = axios.get(`${baseURL}singleProduct/${payload}`)
    return response
}

export const categorySelector = (payload)=>{
    const response = axios.post(`${baseURL}category`, payload)
    return response
}

