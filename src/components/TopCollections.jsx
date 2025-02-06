import React, { useEffect } from 'react'
import {
    TopProductsAtom,
    TranslateTopProducts,
    HoldTopProducts
} from '../atoms/topCollectionAtoms/TopCollectionsAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import ProductCard from './ProductCard'

export default function TopCollections() {

    const allTopProducts = useRecoilValue(TopProductsAtom)

    const [translateProducts, setTranslateProducts] = useRecoilState(TranslateTopProducts)
    const [staticProduct, setStaticProduct] = useRecoilState(HoldTopProducts)



    useEffect(() => {
        const intervalId = setInterval(() => {
            setTranslateProducts((prev) => !prev);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    // console.log(allTopProducts);


    return (
        <div className=' py-15 '>
            <div>
                <p className=' text-[#ff010a] text-center '>
                    Special Offer
                </p>
                <h2 className=' text-4xl font-semibold text-center '>
                    TOP COLLECTION
                    <hr className=' border-[2px] border-[#ff010a] w-20 mx-auto mt-2 ' />
                </h2>
                <p className=' max-w-[700px] mx-auto text-gray-500 text-center '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                    eius consequatur adipisci modi ab illo magni a accusantium repellat fuga?
                </p>
            </div>
            <div className=' overflow-hidden my-5 '
                onMouseEnter={()=>setStaticProduct(true)}
                onMouseLeave={()=>setStaticProduct(false)}>
                <div className={`flex ${!translateProducts && !staticProduct ? '-translate-x-[100%]' : 'translate-x-0'}
                                transition-transform duration-300 ease-in-out `}>
                    <div className=' grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-full '>
                        <div >
                            {
                                <ProductCard image={allTopProducts[0].image} subImage1={allTopProducts[0].subImage1} 
                                    subImage2={allTopProducts[0].subImage2} name={allTopProducts[0].name}
                                    price={allTopProducts[0].price} strike={allTopProducts[0].strike} />
                            }
                        </div>
                        <div >
                            {
                                <ProductCard image={allTopProducts[1].image} subImage1={allTopProducts[1].subImage1} 
                                    subImage2={allTopProducts[1].subImage2} name={allTopProducts[1].name}
                                    price={allTopProducts[1].price} strike={allTopProducts[1].strike} />
                            }
                        </div>
                        <div className=' hidden md:block lg:block ' >
                            {
                                <ProductCard image={allTopProducts[2].image} subImage1={allTopProducts[2].subImage1} 
                                    subImage2={allTopProducts[2].subImage2} name={allTopProducts[2].name}
                                    price={allTopProducts[2].price} strike={allTopProducts[2].strike} />
                            }
                        </div>
                        <div className=' hidden lg:block ' >
                            {
                                <ProductCard image={allTopProducts[3].image} subImage1={allTopProducts[3].subImage1} 
                                    subImage2={allTopProducts[3].subImage2} name={allTopProducts[3].name}
                                    price={allTopProducts[3].price} strike={allTopProducts[3].strike} />
                            }
                        </div>
                    </div>
                    <div className=' grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-full '>
                        <div >
                            {
                                <ProductCard image={allTopProducts[0].image} subImage1={allTopProducts[0].subImage1} 
                                    subImage2={allTopProducts[0].subImage2} name={allTopProducts[0].name}
                                    price={allTopProducts[0].price} strike={allTopProducts[0].strike} />
                            }
                        </div>
                        <div >
                            {
                                <ProductCard image={allTopProducts[1].image} subImage1={allTopProducts[1].subImage1} 
                                    subImage2={allTopProducts[1].subImage2} name={allTopProducts[1].name}
                                    price={allTopProducts[1].price} strike={allTopProducts[1].strike} />
                            }
                        </div>
                        <div className=' hidden md:block lg:block ' >
                            {
                                <ProductCard image={allTopProducts[2].image} subImage1={allTopProducts[2].subImage1} 
                                    subImage2={allTopProducts[2].subImage2} name={allTopProducts[2].name}
                                    price={allTopProducts[2].price} strike={allTopProducts[2].strike} />
                            }
                        </div>
                        <div className=' hidden lg:block ' >
                            {
                                <ProductCard image={allTopProducts[3].image} subImage1={allTopProducts[3].subImage1} 
                                    subImage2={allTopProducts[3].subImage2} name={allTopProducts[3].name}
                                    price={allTopProducts[3].price} strike={allTopProducts[3].strike} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}