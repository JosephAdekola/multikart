import React from 'react'
import { HeaderSubMenuUnderlineState } from '../atoms/headerAtom/HeaderAtom'
import { useRecoilState } from 'recoil'

export default function HeaderSubMenus(props) {

    const [underLine, setUnderline] = useRecoilState(HeaderSubMenuUnderlineState)

  return (
    <div className=' w-[200px] bg-white pt-10 pb-2 '>
        <ul>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu1)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu1}
                <i className={props.menu1Arrow}></i>
                { underLine === props.menu1 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu2)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu2}
                <i className={props.menu2Arrow}></i>
                { underLine === props.menu2 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu3)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu3}
                <i className={props.menu3Arrow}></i>
                { underLine === props.menu3 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu4)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu4}
                <i className={props.menu4Arrow}></i>
                { underLine === props.menu4 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu5)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu5}
                <i className={props.menu5Arrow}></i>
                { underLine === props.menu5 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu6)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu6}
                <i className={props.menu6Arrow}></i>
                { underLine === props.menu6 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu7)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu7}
                <i className={props.menu7Arrow}></i>
                { underLine === props.menu7 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu8)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu8}
                <i className={props.menu8Arrow}></i>
                { underLine === props.menu8 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu9)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu9}
                <i className={props.menu9Arrow}></i>
                { underLine === props.menu9 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
            <li className=' flex justify-between px-3 cursor-pointer relative text-black hover:text-black '
                onMouseEnter={()=>setUnderline(props.menu0)}
                onMouseLeave={()=>setUnderline(null)}>
                {props.menu0}
                <i className={props.menu0Arrow}></i>
                { underLine === props.menu0 && (<hr className=' absolute w-10  bottom-0 border border-[#ff4c3b] ' />) }
            </li>
        </ul>
    </div>
  )
}
