import React, { useEffect, useState } from 'react'
import { allProducts } from '../apiCalls/Products'
import { NavLink } from 'react-router-dom'
import { cartAtoms, handleAddCart } from '../atoms/cart/CartAtoms'
import { useRecoilState } from 'recoil'
import { AllData } from '../utils/data/mockData'

export default function TopCollections() {    

    const [translateProducts, setTranslateProducts] = useState(true)
    const [staticProduct, setStaticProduct] = useState(false)
    const [products, setProducts] = useState([])
    const [imageToDisplay, setImageToDisplay] = useState({})
    const [mobileSlideIndex, setMobileSliderIndex] = useState(0)

    const [alreadyInCart, setAlreadyInCart] = useRecoilState(cartAtoms)
    const quantity = 1

    const getAllProducts = async () => {
        try {
            const res = await allProducts()
            setProducts(res.data)
        } catch (error) {
            console.error('could not get products', error);

        }
    }

    useEffect(() => {
        getAllProducts();

    }, [])

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            if (mobileSlideIndex < 306 && !staticProduct) {
                setMobileSliderIndex(prev => prev + 102)
            } else {
                setMobileSliderIndex(0)
            }
        }, 3000);
        const intervalId = setInterval(() => {
            setTranslateProducts((prev) => !prev);
        }, 3000);

        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId1)
        }

    }, [mobileSlideIndex])

    const handleImageChange = (prodId, index) => {
        setImageToDisplay(prev => ({ ...prev, [prodId]: index }))
    }




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
                            AllData.products.map((prod, index) => {
                                const currentImageIndex = imageToDisplay[prod.id] || 0
                                return (
                                    <div key={index}
                                        className=' min-w-[49%] sm:min-w-[23.5%] cursor-pointer '>
                                        <div className=' relative group '
                                            onMouseEnter={() => setImageToDisplay(prev => ({ ...prev, [prod.id]: 1 }))}
                                            onMouseLeave={() => setImageToDisplay({})}>
                                            <NavLink to={`/${prod.id}`}>
                                            <img src={prod.images[currentImageIndex]} alt="" />
                                            </NavLink>
                                            <div className=' absolute bottom-0 flex flex-col gap-2 '>
                                                {
                                                    prod.images.map((img, index) => {
                                                        return (
                                                            <div className=' w-5 h-10 '
                                                                onClick={() => handleImageChange(prod.id, index)}
                                                                key={index}>
                                                                <img src={img} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className=' absolute bottom-5 right-2 hidden group-hover:flex flex-col gap-7 
                                                        text-gray-400 '>
                                                <i className=' pi pi-cart-arrow-down cursor-pointer hover:text-[#ff4c3b] '
                                                    onClick={()=>handleAddCart(prod.images[0], prod.title,  prod.price, quantity, alreadyInCart, setAlreadyInCart )}></i>
                                                <i className=' pi pi-heart-fill cursor-pointer hover:text-[#ff4c3b] '></i>
                                                <i className=' pi pi-search cursor-pointer hover:text-[#ff4c3b] '></i>
                                                <i className=' pi pi-sync cursor-pointer hover:text-[#ff4c3b] '></i>
                                            </div>

                                        </div>
                                        <div className=' my-4 px-2 '>
                                            <div className=' text-sm text-yellow-500 '>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill text-gray-300'></i>
                                            </div>
                                            <p>{prod.title}</p>
                                            <div className=' flex gap-2 '>
                                                <p className=' font-bold text-lg '>{`$${(prod.price).toFixed(2)}`}</p>
                                                <p className=' line-through text-gray-400 '>{`$${(prod.old_price).toFixed(2)}`}</p>
                                            </div>
                                            <div className=' flex gap-1 mt-4 '>
                                                <button className=' w-[20px] h-[20px] rounded-full bg-blue-500 '></button>
                                                <button className=' w-[20px] h-[20px] rounded-full bg-red-500 '></button>
                                            </div>
                                        </div>
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
                            AllData.products.map((prod, index) => {
                                const currentImageIndex = imageToDisplay[prod.id] || 0
                                return (
                                    <div key={index}
                                        className=' min-w-[49%] sm:min-w-[23.5%] '>
                                        <div className=' relative group '
                                            onMouseEnter={() => setImageToDisplay(prev => ({ ...prev, [prod.id]: 1 }))}
                                            onMouseLeave={() => setImageToDisplay({})}
                                        >
                                            <img src={prod.images[currentImageIndex]} alt="" />
                                            <div className=' absolute bottom-0 flex flex-col gap-2 '>
                                                {
                                                    prod.images.map((img, index) => {
                                                        return (
                                                            <div className=' w-5 h-10 '
                                                                onClick={() => handleImageChange(prod.id, index)}
                                                                key={index}>
                                                                <img src={img} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className=' absolute bottom-5 right-2 hidden group-hover:flex flex-col gap-7 
                                                        text-gray-400 '>
                                                <i className=' pi pi-cart-arrow-down cursor-pointer hover:text-[#ff4c3b] '></i>
                                                <i className=' pi pi-heart-fill cursor-pointer hover:text-[#ff4c3b] '></i>
                                                <i className=' pi pi-search cursor-pointer hover:text-[#ff4c3b] '></i>
                                                <i className=' pi pi-sync cursor-pointer hover:text-[#ff4c3b] '></i>
                                            </div>

                                        </div>
                                        <div className=' my-4 px-2 '>
                                            <div className=' text-sm text-yellow-500 '>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill'></i>
                                                <i className='pi pi-star-fill text-gray-300'></i>
                                            </div>
                                            <p>{prod.title}</p>
                                            <div className=' flex gap-2 '>
                                                <p className=' font-bold text-lg '>{`$${(prod.price).toFixed(2)}`}</p>
                                                <p className=' line-through text-gray-400 '>{`$${(prod.old_price).toFixed(2)}`}</p>
                                            </div>
                                            <div className=' flex gap-1 mt-4 '>
                                                <button className=' w-[20px] h-[20px] rounded-full bg-blue-500 '></button>
                                                <button className=' w-[20px] h-[20px] rounded-full bg-red-500 '></button>
                                            </div>
                                        </div>
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