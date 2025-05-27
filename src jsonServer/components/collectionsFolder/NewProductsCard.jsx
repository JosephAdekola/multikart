import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NewProductsCard({prodArray=[], initIndex, finalIndex, prodId}) {
    return (
        <div className=' min-w-[100%] flex flex-col '>
            {
                prodArray.map((prod, index) => {
                    const display = index > initIndex && index < finalIndex
                    return (
                        <div className={` flex gap-5 min-w-[100%] py-3 cursor-pointer ${!display && ('hidden')}`}>
                            <div className=' w-[35%] h-fit '>
                                <NavLink to={`/${prod.id}`}>
                                    <img src={prod.images[0]} alt="" className='  ' />
                                </NavLink>
                            </div>
                            <div className=' my-auto '>
                                <div className=' flex gap-2 '>
                                    <i className=' pi pi-star-fill '></i>
                                    <i className=' pi pi-star-fill '></i>
                                    <i className=' pi pi-star-fill '></i>
                                    <i className=' pi pi-star-fill '></i>
                                    <i className=' pi pi-star-fill '></i>
                                </div>
                                <h3>{prod.title}</h3>
                                <h3>${prod.price}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
