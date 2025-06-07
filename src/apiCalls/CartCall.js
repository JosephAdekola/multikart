

import axios from "axios";


// const baseURL = "http://localhost:7077/api/v1/cart/"

const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/cart/`

export const customerCart = async (payload) => {
    try {
        const response = await axios.get(`${baseURL}get-my-cart`, payload);
        return response
    } catch (error) {
        console.error("Error fetching cart:", error.response?.data || error.message);
    }
};

export const AddToCart = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}add-to-cart`, payload);
        return response
    } catch (error) {
        console.error("Error fetching cart:", error.response?.data || error.message);
    }
}

export const DeleteCartItem = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}delete-cart`, payload)
    return response
    } catch (error) {
        console.error("Error deleting cart:", error.response?.data || error.message);
    }
}

export const changeCartQuantity = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}change-cart-quantity`, payload)
    return response
    } catch (error) {
        console.error("Error deleting cart:", error.response?.data || error.message);
    }
}

export const EditCart = async (id, payload) => {
    const response = await axios.put(`${baseURL}cart/${id}/`, payload);
    return response
}
