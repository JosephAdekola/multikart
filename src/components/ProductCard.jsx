import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function ProductCard({smallImages = [], name, prodId, price, strike, performFunction}) {

    const [defaultImage, setDefaultImageState] = useState(smallImages[0])
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div className=' relative group '
                    onMouseEnter={() => setDefaultImageState(smallImages[1])}
                    onMouseLeave={() => setDefaultImageState(smallImages[0])}
                    >
                    {/* <NavLink to={`/${prodId}`}> */}
                        <img src={defaultImage} alt="" onClick={()=>{navigate(`/${prodId}`); window.location.reload()}} 
                            className='cursor-pointer' />
                    {/* </NavLink> */}
                    <div className=' absolute bottom-0 flex flex-col gap-2 '>
                        {
                            smallImages.map((img, ind) => {
                                return (
                                    <div className='  w-5 h-10 '
                                            key={ind}
                                             onClick={()=>setDefaultImageState(smallImages[`${ind}`])} >
                                        <img src={img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=' absolute bottom-5 right-2 flex flex-col gap-7 
                                text-gray-400 '>
                        <i className=' pi pi-cart-arrow-down cursor-pointer hover:text-[#ff4c3b] '
                            onClick={()=>performFunction()}>
                        </i>
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
                    <p>{name}</p>
                    <div className=' flex gap-2 '>
                        <p className=' font-bold text-lg '>{`$${(price).toFixed(2) }`}</p>
                        <p className=' line-through text-gray-400 '>{`$${(strike).toFixed(2)}`}</p>
                    </div>
                    <div className=' flex gap-1 mt-4 '>
                        <button className={`w-[20px] h-[20px] rounded-full bg-blue-500`}></button>
                        <button className={`w-[20px] h-[20px] rounded-full bg-red-500`}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}