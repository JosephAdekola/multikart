import axios from "axios"


export const baseURL = "https://multikart-api-v1.onrender.com/api/v1/products"

export const allProducts = ()=>{
    const response = axios.get(`${baseURL}/allproducts`)
    return response
}

export const singleProduct = (payload)=>{
    const response = axios.get(`${baseURL}/singleProduct/${payload}`)
    return response
}



// export const baseURL = 'http://localhost:9000/'

// export const allProducts = async () => {
//     try {
//         const response = await axios.get(`${baseURL}products/`)
//         return response
//     } catch (error) {
//         console.error('error fetching products from source', error);
//         throw error
//     }
// }

// export const singleProduct = async (id) => {
//     try {
//         const response = await axios.get(`${baseURL}products/${id}/`)
//         return response
//     } catch (error) {
//         console.error('error fetching single products from source', error);
//         throw error
//     }
// }