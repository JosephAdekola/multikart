import React, { useState } from 'react'

export default function ProductCard(props) {

    const [defaultImage, setDefaultImageState] = useState(props.image)

    return (
        <div>
            <div>
                <div className=' relative group '
                    onMouseEnter={()=>setDefaultImageState(props.subImage2)}
                    onMouseLeave={()=>setDefaultImageState(props.image)}>
                    <img src={defaultImage} alt="" />
                    <div className=' absolute bottom-0 flex flex-col gap-2 '>
                        <div className='  w-5 h-10 '
                            onClick={()=>setDefaultImageState(props.subImage1)}>
                            <img src={props.subImage1} alt="" />
                        </div>
                        <div className='  w-5 h-10 '
                            onClick={()=>setDefaultImageState(props.subImage2)}>
                            <img src={props.subImage2} alt="" />
                        </div>
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
                    <p>{props.name}</p>
                    <div className=' flex gap-2 '>
                        <p className=' font-bold text-lg '>{`$${(props.price).toFixed(2)}`}</p>
                        <p className=' line-through text-gray-400 '>{`$${(props.strike).toFixed(2)}`}</p>
                    </div>
                    <div className=' flex gap-1 mt-4 '>
                        <button className=' w-[20px] h-[20px] rounded-full bg-blue-500 '></button>
                        <button className=' w-[20px] h-[20px] rounded-full bg-red-500 '></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
