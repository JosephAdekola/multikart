import React, { useState } from 'react'

export default function SideOffersCard(props) {

    const [tweekSetter, setTweekSetter] = useState(false)

    const iconTweek = () => {
        setTweekSetter(true)
        setTimeout(() => {
            setTweekSetter(false)
        }, 500)
    }

    return (
        <div className=' py-10 '>
            <div className=' w-fit mx-auto lg:flex md:flex justify-center gap-3 group '
                onMouseEnter={() => iconTweek()}>
                <div>
                    <i className={`${props.icon} text-5xl text-[#ff4c3b] text-center w-full
                                   ${!tweekSetter ? 'scale-100' : 'scale-110'}
                                   transition-all duration-500 ease-in-out `}></i>
                </div>
                <div>
                    <div>
                        <h3 className=' text-lg font-semibold group-hover:text-[#ff4c3b] text-center lg:text-left md:text-left '>
                            {props.title}
                        </h3>
                    </div>
                    <div>
                        <p className=' text-gray-500 text-sm  '>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
