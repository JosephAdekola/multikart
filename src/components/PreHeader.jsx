import {
    AccountDropDown,
    addMyAccountDropDown,
    removeMyAccountDropDown
} from '../atoms/preheaderatom/AccountDown';

import { ResponsiveMenuState } from '../atoms/responsiveMenuAtom/ResponsiveMenuAtom';

import { StaticDropDownStateAtom } from '../atoms/staticDropDownAtoms/StaticDropDownStateAtom';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import StaticDropDownMenu from './StaticDropDownMenu';
import ResponsiveMainMenu from './ResponsiveMainMenu';
import { useNavigate } from 'react-router-dom';
import { authAtom } from '../atoms/auth/authAtoms';


export default function PreHeader() {

    const getUserDetails = useRecoilValue(authAtom)
    
    const auth = getUserDetails.token
    
    

    const accountDropMenu = useRecoilValue(AccountDropDown)
    const addMyAcountDropDown = useSetRecoilState(addMyAccountDropDown)
    const removeMyAcountDropDown = useSetRecoilState(removeMyAccountDropDown)
    const responsiveMenu = useRecoilValue(ResponsiveMenuState)

    // FOR STATIC DROPDOWN
    const staticDropDownState = useRecoilValue(StaticDropDownStateAtom)

    const navigate = useNavigate()

    const logUserOut = (e)=>{
        e.preventDefault();
        localStorage.removeItem("recoil-persist")
        alert("logout successful")
        navigate("/")
        window.location.reload()
    }


    return (
        <div>
            <div className={`${!staticDropDownState ? 'hidden' : 'absolute top-0 left-0 h-[100vh] w-[300px] bg-white z-30'}`}>
                <StaticDropDownMenu />
            </div>
            <div className={` lg:hidden ${!responsiveMenu ? 'hidden' : 'absolute top-0 right-0 h-[100vh] w-[300px] bg-white z-30'}`}>
                <ResponsiveMainMenu />
            </div>
            <div className={`hidden lg:block md:block w-full h-[5vh] bg-[#f8f8f8]`}>

                <div className=' max-w-[1400px] flex justify-end lg:justify-between mx-auto h-full 
                    text-gray-500 px-4  '>

                    <div className=' hidden lg:flex gap-5 my-auto '>
                        <p className='  '>Welcome to Our store Multikart</p>
                        <p>Call Us: 123-456-7890</p>
                    </div>
                    <div className=' flex gap-5 my-auto relative z-30  '>
                        <p className=' group cursor-pointer '>
                            <span className=' pi pi-heart-fill group-hover:text-red-500 mr-1 '>
                            </span>
                            Wishlist
                        </p>
                        <p className={`group cursor-pointer`}
                            onMouseEnter={addMyAcountDropDown}
                            onMouseLeave={removeMyAcountDropDown}>
                            <span className=' pi pi-user group-hover:text-red-500 mr-1 '>
                            </span>
                            My Account
                        </p>
                        <ul className={`absolute right-0 top-6 text-black bg-[#f8f8f8] w-32 
                                flex flex-col gap-2 p-4 transition-all duration-300 ease-in-out
                                ${accountDropMenu ? ' translate-x-0 ' : 'translate-y-20 scale-0'}`}
                            onMouseEnter={addMyAcountDropDown}
                            onMouseLeave={removeMyAcountDropDown}>
                            <li className={`cursor-pointer ${auth && ("hidden")}`} onClick={()=>navigate("/login")} >Login</li>
                            <li className={`cursor-pointer ${auth && ("hidden")}`} onClick={()=>navigate("/signup")}>Register</li>
                            <li className={`cursor-pointer ${!auth && ("hidden")}`}
                                onClick={e=>logUserOut(e)}>
                                Logout
                            </li>
                            <li className={`cursor-pointer ${!auth && ("hidden")}`} onClick={()=>navigate("/orders")}>
                                My Orders
                            </li>
                            <li className={`cursor-pointer ${!auth && ("hidden")}`}
                                onClick={()=>navigate("/dashboard")}>
                                Account Details
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
