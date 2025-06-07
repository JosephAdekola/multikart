import axios from "axios";


const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/reviews`
// const baseURL = "http://localhost:7077/api/v1/reviews"

export const postReview = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}add-review`, payload);
        return response
    } catch (error) {
        console.error("Error adding reviews:", error.response?.data || error.message);
    }
};

export const getProductReviews = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}get-review`, payload);
        return response
    } catch (error) {
        console.error("Error fetching reviews:", error.response?.data || error.message);
    }
};