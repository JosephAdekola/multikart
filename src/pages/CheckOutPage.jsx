import React, { useEffect, useState } from 'react'
import { AllData } from '../utils/data/mockData'

export default function CheckOutPage() {

    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
            const total = AllData.cart.reduce((acc, cart) => acc + (cart.price * cart.quantity), 0);
            setTotalPrice(total);
        }, [AllData.cart])

    return (
        <div className=' min-h-[70vh] w-full '>
            <div className=' max-w-[1400px] mx-auto mt-17 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 
                      gap-10 px-2 '>
                <div className='formdetails capitalize py-10 '>
                    <h3 className=' font-bold text-gray-600 text-xl '>billing details</h3>
                    <form action="">
                        <div className=' grid sm:grid-cols-2 gap-5 '>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    first name
                                </label> <br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>

                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    last name
                                </label> <br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                        </div>
                        <div className=' grid sm:grid-cols-2 gap-5 '>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    phone
                                </label> <br />
                                <input type="number"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>

                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    email address
                                </label> <br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                        </div>
                        <div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    address
                                </label><br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>

                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    town/city
                                </label><br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    state
                                </label><br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    country
                                </label><br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    postal code
                                </label><br />
                                <input type="email"
                                    className='border border-gray-400 w-full h-[40px] mt-2' />
                            </div>
                        </div>
                        <div className=' flex gap-2 mt-5 '>
                            <input type="radio" className='  ' />
                            <label htmlFor="" className=' text-sm '>create an account?</label>
                        </div>
                    </form>
                </div>


                <div className=' bg-gray-50 border border-gray-300 p-5 h-fit '>
                    <div className=' grid grid-cols-2 border-b border-gray-300 p-5 capitalize font-bold text-gray-600 '>
                        <h3>product</h3>
                        <h3>total</h3>
                    </div>
                    <div className=' border-b border-gray-300 py-5 text-sm text-gray-500 flex flex-col gap-3 '>
                        {
                            AllData.cart.map((cart, index) => {
                                return (
                                    <div className=' grid grid-cols-2 px-5 '
                                        key={index}>
                                        <p>{cart.productNmae} x {cart.quantity}</p>
                                        <p>${cart.price * cart.quantity}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className=' border-b border-gray-300 py-5 text-sm text-gray-500 flex flex-col gap-3 '>
                        <div className=' grid grid-cols-2 px-5 capitalize font-bold text-gray-700 '>
                            <p>sub total</p>
                            <p>$49</p>
                        </div>
                        <div className=' grid grid-cols-2 px-5 capitalize font-bold text-gray-700 '>
                            <p>Shipping</p>
                            <div>
                                <div className=' flex gap-2 '>
                                    <input type="radio" name='delivery' value="freeShipping" />
                                    <label htmlFor="">free shipping</label>
                                </div>
                                <div className=' flex gap-2 '>
                                    <input type="radio" name='delivery' value="pickup" />
                                    <label htmlFor="">local pickup</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' p-5 capitalize '>
                        <div className=' grid grid-cols-2 '>
                            <p>total</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className=' py-5 '>
                            <div className=' flex gap-3 '>
                                <input type="radio" name="payment" id="" />
                                <label htmlFor="">COD</label>
                            </div>
                            <div className=' flex gap-3 '>
                                <input type="radio" name="payment" id="" />
                                <label htmlFor="">PayPal</label>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button className=' bg-[#ff4c3b] h-10 text-white px-5 text-sm border border-[#ff4c3b] cursor-pointer
                                                hover:bg-white hover:text-black transition-all duration-300 ease-in-out '>
                                PLACE ORDER
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
