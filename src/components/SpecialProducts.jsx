import React from 'react'
import { TopProductsAtom } from '../atoms/topCollectionAtoms/TopCollectionsAtom'
import ProductCard from './ProductCard'
import { useRecoilValue } from 'recoil'

export default function SpecialProducts() {
    const allTopProducts = useRecoilValue(TopProductsAtom)
    const products = [
        {id: 1, product: <ProductCard image={allTopProducts[0].image} subImage1={allTopProducts[0].subImage1} 
                                            subImage2={allTopProducts[0].subImage2} name={allTopProducts[0].name}
                                            price={allTopProducts[0].price} strike={allTopProducts[0].strike} />},
        {id:2, product: <ProductCard image={allTopProducts[1].image} subImage1={allTopProducts[1].subImage1} 
                                            subImage2={allTopProducts[1].subImage2} name={allTopProducts[1].name}
                                            price={allTopProducts[1].price} strike={allTopProducts[1].strike} />},
        {id:3, product: <ProductCard image={allTopProducts[2].image} subImage1={allTopProducts[2].subImage1} 
                                            subImage2={allTopProducts[2].subImage2} name={allTopProducts[2].name}
                                            price={allTopProducts[2].price} strike={allTopProducts[2].strike} />},
        {id:4, product: <ProductCard image={allTopProducts[3].image} subImage1={allTopProducts[3].subImage1} 
                                            subImage2={allTopProducts[3].subImage2} name={allTopProducts[3].name}
                                            price={allTopProducts[3].price} strike={allTopProducts[3].strike} />},
        {id: 1, product: <ProductCard image={allTopProducts[0].image} subImage1={allTopProducts[0].subImage1} 
                                            subImage2={allTopProducts[0].subImage2} name={allTopProducts[0].name}
                                            price={allTopProducts[0].price} strike={allTopProducts[0].strike} />},
        {id:2, product: <ProductCard image={allTopProducts[1].image} subImage1={allTopProducts[1].subImage1} 
                                            subImage2={allTopProducts[1].subImage2} name={allTopProducts[1].name}
                                            price={allTopProducts[1].price} strike={allTopProducts[1].strike} />},
        {id:3, product: <ProductCard image={allTopProducts[2].image} subImage1={allTopProducts[2].subImage1} 
                                            subImage2={allTopProducts[2].subImage2} name={allTopProducts[2].name}
                                            price={allTopProducts[2].price} strike={allTopProducts[2].strike} />},
        {id:4, product: <ProductCard image={allTopProducts[3].image} subImage1={allTopProducts[3].subImage1} 
                                            subImage2={allTopProducts[3].subImage2} name={allTopProducts[3].name}
                                            price={allTopProducts[3].price} strike={allTopProducts[3].strike} />}
    ]

    
    
    
    
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
                <div className=' w-fit mx-auto mt-5 flex gap-10 text-lg '>
                    <h3>NEW ARRIVAL</h3>
                    <h3>FEATURED</h3>
                    <h3>SPECIAL</h3>
                </div>
            </div>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-16 '>
        {
            products.map((prods, index)=>{
                return(
                    <div key={index}>
                    {prods.product}
                </div>
                )
            })
        }
    </div>
    </div>
  )
}
