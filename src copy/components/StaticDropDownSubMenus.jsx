import React, { useState } from 'react'

export default function StaticDropDownSubMenus(props) {

    const [firstUnder, setFirstUnder] = useState(false)
    const [secondUnder, setSecondUnder] = useState(false)
    const [thirdUnder, setThirdUnder] = useState(false)
    const [fouthUnder, setFourthUnder] = useState(false)

  return (
    <div className=' w-[200px] bg-white cursor-auto   '>
        <ul>
            <li className=' px-2 py-1 cursor-pointer my-2 '
                onMouseEnter={()=>setFirstUnder(true)}
                onMouseLeave={()=>setFirstUnder(false)}>
                {props.first}
                <hr className={`w-[50px] border border-[#ff4c3b] ${!firstUnder ? 'hidden' : ''} `} />
            </li>
            <li className=' px-2 py-1 cursor-pointer my-2 '
                onMouseEnter={()=>setSecondUnder(true)}
                onMouseLeave={()=>setSecondUnder(false)}>
                {props.second}
                <hr className={`w-[50px] border border-[#ff4c3b] ${!secondUnder ? 'hidden' : ''} `} />
            </li>
            <li className=' px-2 py-1 cursor-pointer my-2 '
                onMouseEnter={()=>setThirdUnder(true)}
                onMouseLeave={()=>setThirdUnder(false)}>
                {props.third}
                <hr className={`w-[50px] border border-[#ff4c3b] ${!thirdUnder ? 'hidden' : ''} `} />
            </li>
            <li className=' px-2 py-1 cursor-pointer my-2 '
                onMouseEnter={()=>setFourthUnder(true)}
                onMouseLeave={()=>setFourthUnder(false)}>
                {props.fourth}
                <hr className={`w-[50px] border border-[#ff4c3b] ${!fouthUnder ? 'hidden' : ''} `} />
            </li>
        </ul>
    </div>
  )
}
