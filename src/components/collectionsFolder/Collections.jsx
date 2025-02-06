import React, { useEffect, useState } from 'react'
import firstCollectiom from '../../assets/images/collections/collection1.jpg'
import secondCollectiom from '../../assets/images/collections/collection2.jpg'
import thirdCollectiom from '../../assets/images/collections/collection3.jpg'
import fourthCollectiom from '../../assets/images/collections/collection4.jpg'
import fifthCollectiom from '../../assets/images/collections/collection5.jpg'
import sixththCollectiom from '../../assets/images/collections/collection6.jpg'




export default function Collections() {

    const allCollectionsData = [
        { id: 1, Image: firstCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' },
        { id: 2, Image: secondCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' },
        { id: 3, Image: thirdCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' },
        { id: 4, Image: fourthCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' },
        { id: 5, Image: fifthCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' },
        { id: 6, Image: sixththCollectiom, date: '29 January 2018', title: 'sitametLorem ipsum dolor sitametsitametsitamet.', autor: 'John Dio' }
    ]

    const [collectionIndex, setCollectionIndex] = useState(0)
    const [ResponsiveCollectionIndex, setResponsiveCollectionIndex] = useState(100)
    const [staticSlide, setStaticSlide] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (collectionIndex >= 102) {
                setCollectionIndex(0)
            } else if (!staticSlide) {
                setCollectionIndex((prev) => prev + 34)
            }
        }, 3000);

        const intervalId1 = setInterval(() => {
            if (ResponsiveCollectionIndex >= 500) {
                setResponsiveCollectionIndex(0)
            } else if (!staticSlide) {
                setResponsiveCollectionIndex((prev) => prev + 100)
            }
        }, 3000)        
        return () => {clearInterval(intervalId); clearInterval(intervalId1)}
    }, [collectionIndex, ResponsiveCollectionIndex, staticSlide])


    return (
        <div>
            <div className=' my-10 pt-10 '>
                <p className=' text-[#ff010a] text-center '>
                    Exclusiv Products
                </p>
                <h2 className=' text-4xl font-semibold text-center '>
                    Special Products
                    <hr className=' border-[2px] border-[#ff010a] w-20 mx-auto mt-2 ' />
                </h2>

            </div>
            <div className='overflow-x-hidden'
                onMouseEnter={() => setStaticSlide(true)}
                onMouseLeave={() => setStaticSlide(false)}>
                
                {/* FOR SMALL SCREEN */}
                <div className={` flex lg:hidden md:hidden transition-transform duration-700 ease-in-out  `}
                    style={{ transform: `translateX(-${ResponsiveCollectionIndex}%)` }}>
                    {
                        allCollectionsData.map((col, index) => {
                            return (
                                <div key={index}
                                    className={ `min-w-[100%] lg:min-w-[32%] md:min-w-[32%]`}>

                                    <div className=' relative '>
                                        <img src={col.Image} alt="" />
                                        <div className=' absolute top-0 opacity-0 hover:opacity-50 bg-[#ff4c3b] w-full h-full flex justify-center my-auto
                                                        transition-all duration-1000 ease-in-out '>
                                        </div>
                                    </div>
                                    <div className=' text-center px-5 py-3 '>
                                        <p className=' text-lg text-[#ff4c3b] '>{col.date}</p>
                                        <h3 className=' text-xl text-gray-600 font-semibold leading-[25px] '>{col.title}</h3>
                                        <hr className=' w-[25%] mx-auto text-[#ff4c3b] my-1 ' />
                                        <div className=' flex justify-center gap-2 text-gray-400 text-sm '>
                                            <p> by {col.autor},</p>
                                            <p>2 Comments</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>


                {/* FOR BIG SCREEN */}
                <div className={` hidden lg:flex md:flex gap-[2%] transition-transform duration-700 ease-in-out  `}
                    style={{ transform: `translateX(-${collectionIndex}%)` }}>
                    {
                        allCollectionsData.map((col, index) => {
                            return (
                                <div key={index}
                                    className={ `min-w-[100%] lg:min-w-[32%] md:min-w-[32%]`}>

                                    <div className=' relative '>
                                        <img src={col.Image} alt="" />
                                        <div className=' absolute top-0 opacity-0 hover:opacity-50 bg-[#ff4c3b] w-full h-full flex justify-center my-auto
                                                        transition-all duration-1000 ease-in-out '>
                                        </div>
                                    </div>
                                    <div className=' text-center px-5 py-3 '>
                                        <p className=' text-lg text-[#ff4c3b] '>{col.date}</p>
                                        <h3 className=' text-xl text-gray-600 font-semibold leading-[25px] '>{col.title}</h3>
                                        <hr className=' w-[25%] mx-auto text-[#ff4c3b] my-1 ' />
                                        <div className=' flex justify-center gap-2 text-gray-400 text-sm '>
                                            <p> by {col.autor},</p>
                                            <p>2 Comments</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
