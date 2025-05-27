

import axios from "axios";
import { baseURL } from "./Products";

export const AllCart = async() =>{
    const response = await axios.get(`${baseURL}cart`);
    return response
}

export const AddToCart = async(payload) =>{
    const response = await axios.post(`${baseURL}cart`, payload);
    return response
}

export const EditCart = async(id, payload) => {
    const response = await axios.put(`${baseURL}cart/${id}/`, payload);
    return response
}

export const DeleteCartIteem = async(id) =>{
    const response = await axios.delete(`${baseURL}cart/${id}/`)
    return response
}