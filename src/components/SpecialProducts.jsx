import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { allProducts } from '../apiCalls/Products'
import { useRecoilValue } from 'recoil'
import { userCartAtom } from '../atoms/cart/CartAtoms'
import { authAtom } from '../atoms/auth/authAtoms'
import { utilityFuntions } from '../utils/utilityFunctions'

export default function SpecialProducts() {

    const {handleAddCart} = utilityFuntions()

    const userCart = useRecoilValue(userCartAtom)
    const quantity = 1

    const auth = useRecoilValue(authAtom)
    const user = auth.user


    const [product, setProduts] = useState([])

    useEffect(() => {
        const allProductArray = async () => {
            try {
                const res = await allProducts()
                setProduts(res.data)
            } catch (error) {
                console.error('didnt get products from api call', error);
            }
        };
        allProductArray()
    }, [])

    return (
        <div>
            <div className=' my-10 pt-10 '>
                <p className=' text-[#ff010a] text-center '>
                    Exclusiv Products
                </p>
                <h2 className=' text-4xl font-semibold text-center '>
                    Special Products
                    <hr className=' border-[2px] border-[#ff010a] w-20 mx-auto mt-2 ' />
                </h2>
                <div className=' w-fit mx-auto mt-5 flex gap-10 text-lg '>
                    <h3>NEW ARRIVAL</h3>
                    <h3>FEATURED</h3>
                    <h3>SPECIAL</h3>
                </div>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-16 '>
                {
                    product.map((prods, index) => {
                        return (
                            <div key={index}>
                                <ProductCard smallImages={prods.images} name={prods.title} price={prods.price}
                                    strike={prods.old_price} prodId={prods.productCode} id={prods.productId}
                                    quantity={quantity} alreadyInCart={userCart} user={user} performFunction={() => handleAddCart(prods._id, prods.title, userCart, user)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}