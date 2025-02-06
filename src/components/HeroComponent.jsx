import React from 'react'
import { useEffect } from 'react';

import { HeroImages, HeroImageIndex, HeroAutoNavigate } from '../atoms/heroAtom/HeroAtoms'
import { useRecoilState, useRecoilValue } from 'recoil';

export default function HeroComponent() {

    const bannerImages = useRecoilValue(HeroImages)
    const [ImageIndex, setImageIndex] = useRecoilState(HeroImageIndex)
    const [heroNavigate, setHeroNavigate] = useRecoilState(HeroAutoNavigate)

    useEffect(()=>{
        if (!heroNavigate) {
          const intervalId = setInterval(() => {
            setImageIndex((H) => (H + 1) % bannerImages.length)
          }, 5000);
          return ()=> clearInterval(intervalId)
        }
      }, [heroNavigate])
    
      const nextHero = () => {
        setImageIndex((H) => (H + 1) % bannerImages.length)
      }
    
      const previousHero = () => {
        setImageIndex((H) => H===0 ? bannerImages.length - 1 : H - 1)
      }

    // console.log(bannerImages);
    

  return (
    
    <div className={`w-full h-[60vh] lg:h-[75vh] bg-center bg-no-repeat bg-cover relative overflow-hidden`}
        onMouseEnter={() => setHeroNavigate(true)}
        onMouseLeave={() => setHeroNavigate(false)}        >

        <div className={`absolute w-full h-full bg-gray-500 flex transition-all duration-300 ease-in-out
                         `}
              style={{transform: ` translateX(-${ImageIndex * 100}%) `}}>


          {
            bannerImages.map((image, index) => {
              return (
                <div key={index}
                  style={{ backgroundImage: `url(${image})` }}
                  className={`w-full h-full bg-cover bg-center flex-shrink-0`}>
                  <div className=' w-full h-full flex  '>
                    <div className={` transition-all duration-700 ease-linear w-[350px] lg:w-[800px] pl-5 
                        lg:pl-[150px] 
                        ${ImageIndex == 0 ? 'my-auto text-center flex flex-col lg:gap-2 ' :
                        'hidden'} `}>
                      <h1 className=' tracking-[7px] lg:tracking-[0.5rem] lg:text-2xl '>
                        Welcome To Fashion
                      </h1>
                      <h1 className=' text-4xl lg:text-6xl font-semibold '>
                        MEN FASHION
                      </h1>
                      <button className=' bg-[#ff4c3b] border-[2px] border-[#ff4c3b] font-bold
                          hover:bg-white hover:border-[#ff4c3b] text-white w-[150px] 
                          mx-auto mt-3 px-6 py-2 hover:text-black transition-all duration-300
                          ease-[cubic-bezier(0.455, 0.03, 0.515, 0.955)] '>
                        SHOP NOW
                      </button>
                      
                    </div>
                    <div className={` transition-all duration-700 ease-linear w-[350px] lg:w-[800px] pl-5
                        lg:pl-[150px] 
                        ${ImageIndex == 1 ? 'my-auto text-center flex flex-col lg:gap-2  ' :
                        'hidden'} } `}>

                      <h1 className=' tracking-[7px] lg:tracking-[0.5rem] lg:text-2xl '>
                        Welcome To Fashion
                      </h1>
                      <h1 className=' text-4xl lg:text-6xl font-semibold '>
                        WOMEN FASHION
                      </h1>
                      <button className=' bg-[#ff4c3b] border-[2px] border-[#ff4c3b] font-bold
                          hover:bg-white hover:border-[#ff4c3b] text-white w-[150px] 
                          mx-auto mt-3 px-6 py-2 hover:text-black transition-all duration-300
                          ease-[cubic-bezier(0.455, 0.03, 0.515, 0.955)] '>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }       
        </div>

        <div className={`w-[100%] ${heroNavigate ? 'flex' : 'hidden'}  justify-between absolute top-[40%] lg:px-36 `}>
          <i className=' pi pi-angle-left text-4xl hover:cursor-pointer text-gray-400  '
            onClick={() => previousHero()}
          ></i>
          <i className=' pi pi-angle-right text-4xl hover:cursor-pointer text-gray-400 '
            onClick={() => nextHero()}></i>
        </div>


      </div>
  )
}
