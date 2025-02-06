import React from 'react'

export default function CollectionsCard(props) {
    return (
        <div>
            <div className=' relative '>
                <img src={props.Image} alt="" />
                <div className=' absolute top-0 opacity-50 bg-[#ff4c3b] w-full h-full flex justify-center my-auto '>
                    <div className=' my-auto '><i className=' pi pi-instagram text-9xl '></i></div>
                </div>
            </div>
            <div className=' text-center px-5 py-3 '>
                <p className=' text-lg text-[#ff4c3b] '>{props.date}</p>
                <h3 className=' text-xl text-gray-600 font-semibold leading-[25px] '>{props.title}</h3>
                <hr className=' w-[25%] mx-auto text-[#ff4c3b] my-1 ' />
                <div className=' flex justify-center gap-2 text-gray-400 text-sm '>
                    <p> by {props.autor},</p>
                    <p>2 Comments</p>
                </div>
            </div>
        </div>
    )
}
