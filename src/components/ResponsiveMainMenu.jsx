import React from 'react'
import { ResponsiveMenuAtom, setResponsiveMenuOff } from '../atoms/responsiveMenuAtom/ResponsiveMenuAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'

export default function ResponsiveMainMenu() {

    const responsiveMenu = useRecoilValue(ResponsiveMenuAtom)
    const responsiveMenuOff = useSetRecoilState(setResponsiveMenuOff)

    return (
        <div>
            <div className=' w-full h-[65px] text-lg font-semibold '>
                <div className=' h-full px-3 flex justify-end '>
                    <h2 className=' my-auto cursor-pointer '
                        onClick={responsiveMenuOff}>
                        BACK NAVBAR
                    </h2>
                    <i className=' pi pi-angle-right my-auto '></i>
                </div>
            </div>
            <hr className=' text-gray-200 ' />
            <div className=' py-2 flex flex-col gap-4 font-semibold '>
                {
                    responsiveMenu.map((m, index) => {
                        return (
                            <ul key={index} 
                                className={`px-7 cursor-pointer hover:text-[#ff4c3b]`}>
                                <li>
                                    {m.menu}
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
