import React, { useState } from 'react'
import {
    setStaticBarOff,
    staticDropDownMenus
} from '../atoms/staticDropDownAtoms/StaticDropDownStateAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import StaticDropDownSubMenus from './StaticDropDownSubMenus'


export default function StaticDropDownMenu() {

    const staticBarMenuOff = useSetRecoilState(setStaticBarOff)
    const staticMenus = useRecoilValue(staticDropDownMenus)

    const [activeSubMenu, setActiveSubMenu] = useState(null)



    // console.log(staticMenus);
    // console.log(underline);



    return (
        <>
            <div className=' w-full h-[70px] text-lg font-semibold '>
                <div className=' h-full px-3 flex '>
                    <i className=' pi pi-angle-left my-auto '></i>
                    <h2 className=' my-auto cursor-pointer '
                        onClick={staticBarMenuOff}>BACK</h2>
                </div>
            </div>
            <hr className=' text-gray-200 ' />
            <div>
                <div className=' py-2 flex flex-col gap-7 text-gray-600 '>
                    {
                        staticMenus.map((m, index) => {
                            return (
                                <li key={index}
                                    className=' px-7 flex justify-between relative cursor-pointer '
                                    onMouseEnter={()=>setActiveSubMenu(m.menu)}
                                    onMouseLeave={()=>setActiveSubMenu(null)}>
                                    {m.menu}
                                    <i className={`${m.hasArrowRight ? 'pi pi-angle-right my-auto' :
                                        ''}`}></i>
                                    <div className={`${ activeSubMenu === m.menu ? 'absolute left-[280px] top-[-10px]' : 'hidden'} `} >
                                        {
                                            m.menu === 'BAGS' ? <div>
                                                <StaticDropDownSubMenus first='Shopper Bags' 
                                                                        second='Laptop Bags' 
                                                                        third='Clutches' 
                                                                        fourth='Purses' />
                                            </div> : ''
                                        }
                                        {
                                            m.menu === 'FOOTWEAR' ? <div>
                                                <StaticDropDownSubMenus first='Sport Shoes' 
                                                                        second='Formal Shoes' 
                                                                        third='Casual Shoes'/>
                                                </div> : ''
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
                
            </div>
        </>
    )
}
