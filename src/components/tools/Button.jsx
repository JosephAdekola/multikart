import React from 'react'

export default function Button({bground="[#ff4c3b]", buttonText, width, horiMargin, performFunction, rightMargin, leftMargin}) {
    return (
        <button className={`text-white bg-${bground} uppercase text-sm px-3 py-1 font-bold w-${width} mx-${horiMargin}
                        hover:text-black hover:bg-white border border-[#ff4c3b] cursor-pointer mr-${rightMargin}
                        ml-${leftMargin} `}
                onClick={e=>performFunction(e)}>
            {buttonText}
        </button>
    )
}
