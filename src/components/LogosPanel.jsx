import React from 'react'
import logo1 from '../assets/images/logos/logo1.png'
import logo2 from '../assets/images/logos/logo2.png'
import logo3 from '../assets/images/logos/logo3.png'
import logo4 from '../assets/images/logos/logo4.png'
import logo5 from '../assets/images/logos/logo5.png'
import logo6 from '../assets/images/logos/logo6.png'

export default function LogosPanel() {

    const allLogos = [
        {id:1, img:logo1},
        {id:2, img:logo2},
        {id:3, img:logo3},
        {id:4, img:logo4},
        {id:6, img:logo5},
        {id:6, img:logo6},
    ]

  return (
    <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
                lg:grid-cols-6 my-18 '>
            {
                allLogos.map((logo, index)=>{
                    return(
                        <div key={logo.id}
                        className={`${index>2 ? 'hidden' : 'block'}
                                    ${index>3 ? 'sm:hidden' : 'sm:block'}
                                    ${index>4 ? 'md:hidden' : 'md:block'}
                                    ${index>5 ? 'lg:hidden' : 'lg:block'} `}>
                            <img src={logo.img} alt={`logo ${logo.id}`}
                                className={`opacity-50 hover:opacity-100
                                    transition-all duration-700 ease-in-out`} />                           
                        </div>
                    )
                })
            }
        </div>
  )
}
