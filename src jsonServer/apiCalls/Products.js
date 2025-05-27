import axios from "axios"


export const baseURL = 'http://localhost:9000/'

export const allProducts = async () => {
    try {
        const response = await axios.get(`${baseURL}products/`)
        return response
    } catch (error) {
        console.error('error fetching products from source', error);
        throw error
    }
}

export const singleProduct = async (id) => {
    try {
        const response = await axios.get(`${baseURL}products/${id}/`)
        return response
    } catch (error) {
        console.error('error fetching single products from source', error);
        throw error
    }
}