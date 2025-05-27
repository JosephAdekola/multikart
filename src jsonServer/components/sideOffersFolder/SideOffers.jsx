import React, { useEffect, useState } from 'react'
import SideOffersCard from './SideOffersCard'
import axios from 'axios'

export default function SideOffers() {

    const offers = [
        {
            id: 1, offer: <SideOffersCard icon='pi pi-truck'
                title='FREE SHIPPING'
                description='Free Shipping World Wide' />
        },
        {
            id: 2, offer: <SideOffersCard icon='pi pi-clock'
                title='24 X 7 SERVICE'
                description='Online Service For 24 X 7' />
        },
        {
            id: 3, offer: <SideOffersCard icon='pi pi-megaphone'
                title='FESTIVAL OFFER'
                description='new online special festival offer' />
        },
    ]


    return (
        <div className=' grid md:grid-cols-3 lg:grid-cols-3 gap-0 border-gray-300  border-t-2 border-b-2 my-5 py-5 '>
            {
                offers.map((off, index) => {
                    return (
                        <div key={index}
                            className={` border-gray-300 ${index !== offers.length - 1 ? 'lg:border-r-2 md:border-r-2' : ''}`}>
                            {off.offer}
                        </div>
                    )
                })
            }
        </div>
    )
}
