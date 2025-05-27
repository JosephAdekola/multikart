import React, { useEffect, useState } from 'react'
import HeroComponent from '../components/HeroComponent'
import menDiscountImg from '../assets/images/discountImages/mendiscount.jpg'
import womenDiscountImg from '../assets/images/discountImages/womenDiscount.jpg'
import TopCollections from '../components/TopCollections'

import topProductBg from '../assets/images/topProductBgImage/1.jpg'
import SpecialProducts from '../components/SpecialProducts'
import SideOffers from '../components/sideOffersFolder/SideOffers'
import Collections from '../components/collectionsFolder/Collections'
import InstagramPosts from '../components/InstagramPosts'
import LogosPanel from '../components/LogosPanel'
import { AllData } from '../utils/data/mockData'
import axios from 'axios'



export default function HomePage() {

    console.log("hello");
    

    // const parsedStorage = JSON.parse(localStorage.getItem("recoil-persist"))
    // const token = parsedStorage.authAtom.token

    // // console.log(token);


    // const customerCart = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:7077/api/v1/cart/get-my-cart", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });

    //         console.log("Cart Data:", res.data); // Log just the useful data
    //     } catch (error) {
    //         console.error("Error fetching cart:", error.response?.data || error.message);
    //     }
    // };


    // useEffect(() => {
    //     customerCart()
    // }, [])

    return (
        <div className=' w-full min-h-[85vh] bg-white '>
            <div>
                <HeroComponent />
            </div>

            {/* MEN AND WOMEN DISCOUNT */}
            <div className=' max-w-[1400px] mx-auto mt-17 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 
                      gap-10 px-2 '>
                <div className=' relative cursor-pointer group overflow-hidden '>
                    <img src={menDiscountImg} alt="" className=' group-hover:scale-[1.1]
                        transition-transform duration-700 ease-in-out ' />
                    <div className=' absolute top-[35%] right-10 lg:right-20 '>
                        <p className=' text-red-500 text-center '>10% OFF</p>
                        <p className=' text-4xl lg:text-6xl font-semibold '>MEN</p>
                    </div>
                </div>
                <div className=' relative cursor-pointer group overflow-hidden '>
                    <img src={womenDiscountImg} alt="" className=' group-hover:scale-[1.1]
                        transition-transform duration-700 ease-in-out ' />
                    <div className=' absolute top-[35%] right-10 lg:right-20 '>
                        <p className=' text-red-500 text-center '>10% OFF</p>
                        <p className=' text-4xl lg:text-6xl font-semibold '>WOMEN</p>
                    </div>

                </div>
            </div>

            <div className=' max-w-[1400px] mx-auto px-2 '>
                <TopCollections />
            </div>

            <div className={` w-full h-[40vh] lg:h-[64vh] bg-gray-500 lg:bg-fixed bg-cover `}
                style={{ backgroundImage: `url(${topProductBg})` }} >
                <div className=' lg:ml-16 max-w-[900px] h-full text-center flex '>
                    <div className=' my-auto mx-auto '>
                        <h1 className=' text-[#ff4c3b] text-5xl lg:text-9xl font-bold '>2025</h1>
                        <h2 className=' text-4xl lg:text-6xl font-bold lg:my-6 '>FASHION TRENDS</h2>
                        <p className=' lg:text-2xl text-gray-500 tracking-[10px] font-bold '>SPECIAL OFFER</p>
                    </div>
                </div>
            </div>
            <div className=' max-w-[1400px] mx-auto px-2 '>
                <SpecialProducts />
            </div>
            <div className=' max-w-[1400px] mx-auto px-2 '>
                <SideOffers />
            </div>
            <div className=' max-w-[1400px] mx-auto px-2 '>
                <Collections />
            </div>
            <div className=' max-w-[100%] mx-auto px-0 '>
                <InstagramPosts />
            </div>
            <div className=' max-w-[1400px] mx-auto px-2 '>
                <LogosPanel />
            </div>
        </div>
    )
}
