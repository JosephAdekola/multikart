import React from 'react'
import headerLogo from '../assets/images/headerImages/headerlogo.png'
import { setStaticBarOn } from '../atoms/staticDropDownAtoms/StaticDropDownStateAtom'
import { setResponsiveMenuOn } from '../atoms/responsiveMenuAtom/ResponsiveMenuAtom'
import { HeaderAtom,HeaderSubMenuState} from '../atoms/headerAtom/HeaderAtom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import HeaderSubMenus from './HeaderSubMenus'
import { NavLink } from 'react-router-dom'
import { numberOfCart } from '../atoms/cart/CartAtoms'

export default function Header() {

    const staticBarMenuOn = useSetRecoilState(setStaticBarOn)
    const responsiveMenuOn = useSetRecoilState(setResponsiveMenuOn)
    const headerMenus = useRecoilValue(HeaderAtom)
    const [subMenuState, setSubMenuState] = useRecoilState(HeaderSubMenuState)
    const cartInd = useRecoilValue(numberOfCart)



    // console.log(headerMenus);


    return (
        <div className=' w-full h-[12vh] bg-white '>
            <div className=' h-full max-w-[1400px]  mx-auto flex justify-between px-4 '>
                <div className=' flex text-3xl font-extra-bold gap-[60px]  '>
                    <i className=' pi pi-bars my-auto cursor-pointer '
                        onClick={staticBarMenuOn}></i>
                    <NavLink to={'/'} className={ ` flex` }>
                    <img src={headerLogo} alt="logo"
                        className=' max-w-[200px] object-contain my-auto ' />
                    </NavLink>
                </div>
                <div className=' flex gap-6 '>
                    <div className=' my-auto text-lg  hidden lg:block '>
                        <ul className=' flex gap-2 '>
                            {
                                headerMenus.map((m, index) => {
                                    return (
                                        <li key={index}
                                            className=' relative hover:cursor-pointer hover:text-[#ff4c3b] z-10 '
                                            onMouseEnter={()=> setSubMenuState(m.menu)}
                                            onMouseLeave={()=> setSubMenuState(null)}>
                                            {m.menu} <i className=' pi pi-angle-down '></i>
                                            {subMenuState === m.menu  && (
                                                <div className=' absolute '>
                                                {m.menu === 'HOME' && (<HeaderSubMenus menu1='Clothing'
                                                                                    menu2='Basics'
                                                                                    menu3='Beauty'
                                                                                    menu4='Watches'
                                                                                    menu5='Goggles'
                                                                                    menu6='Shoes'
                                                                                    menu7='Bags'
                                                                                    menu1Arrow='pi pi-angle-right'       />)}
                                            </div>
                                            )}
                                            {subMenuState === m.menu  && (
                                                <div className=' absolute '>
                                                {m.menu === 'SHOP' && (<HeaderSubMenus menu1='Left Sidebar'
                                                                                    menu2='Right Sidebar'
                                                                                    menu3='No Sidebar'
                                                                                    menu4='Sidebar Popup'
                                                                                    menu5='Metro'
                                                                                    menu6='Full Width'
                                                                                    menu7='3 Grid'
                                                                                    menu8='6 Grid'
                                                                                    menu9='List View'       />)}
                                            </div>
                                            )}
                                            {subMenuState === m.menu  && (
                                                <div className=' absolute '>
                                                {m.menu === 'PRODUCTS' && (<HeaderSubMenus menu1='Left Sidebar'
                                                                                    menu2='Right Sidebar'
                                                                                    menu3='No Sidebar'
                                                                                    menu4='Sidebar Popup'
                                                                                    menu5='Metro'
                                                                                    menu6='Full Width'
                                                                                    menu7='3 Grid'
                                                                                    menu8='6 Grid'
                                                                                    menu9='List View'       />)}
                                            </div>
                                            )}
                                            {subMenuState === m.menu  && (
                                                <div className=' absolute '>
                                                {m.menu === 'PAGES' && (<HeaderSubMenus menu1='Left Sidebar'
                                                                                    menu2='Right Sidebar'
                                                                                    menu3='No Sidebar'
                                                                                    menu4='Sidebar Popup'
                                                                                    menu5='Metro'
                                                                                    menu6='Full Width'
                                                                                    menu7='3 Grid'
                                                                                    menu8='6 Grid'
                                                                                    menu9='List View'       />)}
                                            </div>
                                            )}
                                            {subMenuState === m.menu  && (
                                                <div className=' absolute '>
                                                {m.menu === 'BLOGS' && (<HeaderSubMenus menu1='Left Sidebar'
                                                                                    menu2='Right Sidebar'
                                                                                    menu3='No Sidebar'
                                                                                    menu4='Sidebar Popup'
                                                                                    menu5='Metro'
                                                                                    menu6='Full Width'
                                                                                    menu7='3 Grid'
                                                                                    menu8='6 Grid'
                                                                                    menu9='List View'       />)}
                                            </div>
                                            )}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className=' my-auto text-3xl text-[#ff4c3b] lg:hidden '>
                        <i className=' pi pi-bars my-auto cursor-pointer '
                            onClick={responsiveMenuOn}></i>
                    </div>
                    <div className=' hidden lg:flex sm:flex gap-4 text-2xl h-full '>
                        <i className=' pi pi-search my-auto '></i>
                        <i className=' pi pi-cog my-auto '></i>
                        <NavLink to={`/cart`}
                                className={`my-auto`}>
                        <i className=' pi pi-shopping-cart my-auto py-4 pr-2 relative '>
                            <span className=' absolute top-0 right-0 text-sm bg-red-500
                                    text-white px-2 rounded-full  '>{cartInd}</span>
                        </i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
