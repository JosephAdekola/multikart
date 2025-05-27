import React, { useEffect, useState } from 'react'
import { AllData } from '../utils/data/mockData'
import { authAtom } from '../atoms/auth/authAtoms'
import { userCartAtom } from '../atoms/cart/CartAtoms'
import { useRecoilValue } from 'recoil'
import Button from '../components/tools/Button'
import { placeOrder } from '../apiCalls/orders'


export default function CheckOutPage() {

    const cartItems = useRecoilValue(userCartAtom)
    console.log("ABC");
    
    const getDetail = useRecoilValue(authAtom)
    const userDetails = getDetail.user
    // console.log(userDetails);



    // User Details
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [postalCode, setPostalCode] = useState("")

    const [useMyAddr, setUseMyAddr] = useState(false)


    const [totalPrice, setTotalPrice] = useState()

    useEffect(() => {
        const total = cartItems.reduce((acc, cart) => acc + (cart.price * cart.quantity), 0);
        setTotalPrice(total);
        setFname(userDetails.firstName);
        setLname(userDetails.lastName);
        setPhone(userDetails.phone)
        setEmail(userDetails.email)
        setAddress(useMyAddr ? userDetails.address : "")
        setCity(useMyAddr ? userDetails.city : "")
        setState(useMyAddr ? userDetails.state : "")
        setCountry(useMyAddr ? userDetails.country : "")
        setPostalCode(useMyAddr ? userDetails.postalCode : "")
    }, [cartItems, useMyAddr])

    const handleOrderPlacement = async (e) => {
        e.preventDefault()

        const payload = {
            email: userDetails.email,
            phone,
            country,
            address,
            city,
            state,
            postalCode
        }
        if (!address || !city || !state || !postalCode || !country) {
            alert("all fields are required")
            return;
        }
        try {
            const res = await placeOrder(payload);
            if (res) {
                const paymentUrl = res.data.authorization_url
                window.open(
                    paymentUrl,
                    "PopupWindow",
                    "width=600,height=700,scrollbars=yes,resizable=yes" // Features
                );

            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                alert(error.response.data.message)
                return;
            }
            if (error.message) {
                console.log("axios error", error);
                return
            }
            if (error.request) {
                console.log(error);

            }
        }
    }

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
                                    className='border text-gray-500 border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={fname} />
                            </div>

                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    last name
                                </label> <br />
                                <input type="text"
                                    className='border text-gray-500 border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={lname} />
                            </div>
                        </div>
                        <div className=' grid sm:grid-cols-2 gap-5 '>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    phone
                                </label> <br />
                                <input type="number"
                                    className='border text-gray-500 border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={phone} />
                            </div>

                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    email address
                                </label> <br />
                                <input type="email"
                                    className='border text-gray-500 border-gray-400 w-full h-[40px] mt-2 px-3'
                                    value={email} />
                            </div>
                        </div>
                        <div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    <div className=' flex gap-2 mt-5 '>
                                        <input type="checkbox" className='  ' onChange={e => setUseMyAddr(e.target.checked)} />
                                        <label htmlFor="" className=' text-sm '>use your default address</label>
                                    </div>
                                    address
                                </label><br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={address} onChange={e => setAddress(e.target.value)} />
                            </div>


                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    town/city
                                </label><br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={city} onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    state
                                </label><br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={state} onChange={e => setState(e.target.value)} />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    country
                                </label><br />
                                <input type="text"
                                    className='border border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={country} onChange={e => setCountry(e.target.value)} />
                            </div>
                            <div className=' mt-5 '>
                                <label htmlFor=""
                                    className=' text-sm '>
                                    postal code
                                </label><br />
                                <input type="number"
                                    className='border border-gray-400 w-full h-[40px] mt-2 capitalize px-3'
                                    value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                            </div>
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
                            cartItems.map((cart, index) => {
                                return (
                                    <div className=' grid grid-cols-2 px-5 '
                                        key={index}>
                                        <p>{cart.title} x {cart.quantity}</p>
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
                            <Button buttonText={"place order"} performFunction={handleOrderPlacement} />
                            {/* <button className=' bg-[#ff4c3b] h-10 text-white px-5 text-sm border border-[#ff4c3b] cursor-pointer
                                                hover:bg-white hover:text-black transition-all duration-300 ease-in-out '>
                                PLACE ORDER
                            </button> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
