import React, { useEffect, useState } from 'react'
import { allProducts } from '../apiCalls/Products'
import ProductCard from './ProductCard'
import { userCartAtom } from '../atoms/cart/CartAtoms'
import { useRecoilValue } from 'recoil'
import { authAtom } from '../atoms/auth/authAtoms'
import { utilityFuntions } from '../utils/utilityFunctions'

export default function TopCollections() {

    const {handleAddCart} = utilityFuntions()

    const [translateProducts, setTranslateProducts] = useState(true)
    const [staticProduct, setStaticProduct] = useState(false)
    const [products, setProducts] = useState([])
    const [mobileSlideIndex, setMobileSliderIndex] = useState(0)
    
    const userCart = useRecoilValue(userCartAtom)
        const quantity = 1
    
        const auth = useRecoilValue(authAtom)
        const user = auth.user


    const getAllProducts = async () => {
        try {
            const res = await allProducts()
            setProducts(res.data.data)
        } catch (error) {
            console.error('could not get products', error);

        }
    }

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            if (mobileSlideIndex < 306 && !staticProduct) {
                setMobileSliderIndex(prev => prev + 102)
            } else {
                setMobileSliderIndex(0)
            }
        }, 5000);
        const intervalId = setInterval(() => {
            setTranslateProducts((prev) => !prev);
        }, 3000);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId1);
            getAllProducts();
        }

    }, [mobileSlideIndex])

    return (
        <div className=' py-15 '>
            <div>
                <p className=' text-[#ff010a] text-center '>
                    Special Offer
                </p>
                <h2 className=' text-4xl font-semibold text-center '>
                    TOP COLLECTION
                    <hr className=' border-[2px] border-[#ff010a] w-20 mx-auto mt-2 ' />
                </h2>
                <p className=' max-w-[700px] mx-auto text-gray-500 text-center '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                    eius consequatur adipisci modi ab illo magni a accusantium repellat fuga?
                </p>
            </div>
            <div className=' overflow-hidden my-5 '
                onMouseEnter={() => setStaticProduct(true)}
                onMouseLeave={() => setStaticProduct(false)}>
                <div className={`hidden sm:block ${!translateProducts && !staticProduct ? '-translate-x-[100%]' : 'translate-x-0'}
                                transition-all duration-300 ease-in-out `}>
                    <div className=' flex gap-[2%]  min-w-full '>
                        {
                            products.map((prod, index) => {
                                return (

                                    <div key={index}
                                        className=' min-w-[49%] sm:min-w-[23.5%] cursor-pointer '>
                                        <ProductCard smallImages={prod.images} name={prod.title} price={prod.price}
                                            strike={prod.old_price} prodId={prod.productCode} quantity={quantity}
                                            performFunction={() => handleAddCart(prod._id, prod.title, userCart, user)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>



                <div
                    className={` sm:hidden transition-all duration-300 ease-in-out `}
                    style={{ transform: `translateX(-${mobileSlideIndex}%)` }}
                >
                    <div className=' flex gap-[2%]  min-w-full '>
                        {
                            products.map((prod, index) => {
                                return (

                                    <div key={index}
                                        className=' min-w-[49%] sm:min-w-[23.5%] '>
                                        <ProductCard smallImages={prod.images} name={prod.title} price={prod.price}
                                            strike={prod.old_price} prodId={prod.productCode} quantity={quantity}
                                            performFunction={() => handleAddCart(prod._id, prod.title, userCart, user)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}