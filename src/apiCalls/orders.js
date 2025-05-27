import axios from "axios";


const baseURL = "https://multikart-api-v1.onrender.com/api/v1/order/"

export const placeOrder = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}create-order`, payload);
        return response
    } catch (error) {
        console.error("there was an error while placing your order:", error.response?.data || error.message);
    }
};

export const getUserOrders = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}my-orders`, payload);
        return response
    } catch (error) {
        console.error("there was an error while fetching your orders:", error.response?.data || error.message);
    }
};