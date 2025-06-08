import React, { useEffect, useState } from 'react';
import { getProductReviews } from '../apiCalls/reviewsCall';

export default function Reviews({ productId }) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getReviews = async () => {
            try {
                const res = await getProductReviews({ productId });
                // ensure you're sending productId in body if using POST
                if (res?.data) {
                    setReviews(res.data);
                }
            } catch (error) {
                if (error.response) {
                    console.error(error.response.data.message);
                } else if (error.message) {
                    console.error("Axios error:", error.message);
                } else if (error.request) {
                    console.error("Request error:", error.request);
                }
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            getReviews();
        }
    }, [productId]);

    if (loading) return <p>Loading reviews...</p>;


    return (
        <main>
            <div className=' grid sm:grid-cols-2 gap-2 '>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id} className='bg-amber-100 p-4 my-2 rounded'>
                            <p><strong>{review.userId?.firstName}:</strong> {review.comment}</p>
                            <p>
                                Rating: {
                                    review.rating < 1 ? '⭕⭕⭕⭕⭕' :
                                        review.rating < 2 ? '⭐⭕⭕⭕⭕' :
                                            review.rating < 3 ? '⭐⭐⭕⭕⭕' :
                                                review.rating < 4 ? '⭐⭐⭐⭕⭕' :
                                                    review.rating < 5 ? '⭐⭐⭐⭐⭕' :
                                                        '⭐⭐⭐⭐⭐'
                                }
                            </p>

                        </div>
                    ))
                ) : (
                    <p>No reviews yet for this product.</p>
                )}
            </div>
        </main>
    );
}
