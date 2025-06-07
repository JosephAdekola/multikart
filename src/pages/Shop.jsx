import React, { useEffect, useState } from 'react'
import { allProducts, categorySelector } from '../apiCalls/Products'
import ProductCard from '../components/ProductCard'
import { userCartAtom } from '../atoms/cart/CartAtoms'
import { useRecoilValue } from 'recoil'
import { authAtom } from '../atoms/auth/authAtoms'
import { utilityFuntions } from '../utils/utilityFunctions'
import { useParams, useNavigate } from 'react-router-dom'

export default function Shop() {
    const { handleAddCart } = utilityFuntions()
    const { category } = useParams()
    const navigate = useNavigate()

    const availableCategories = ["Men Wears", "Ladies Wear"]
    const userCart = useRecoilValue(userCartAtom)
    const auth = useRecoilValue(authAtom)
    const user = auth?.user

    const readableCategory = category ? category.replace("-", ' ') : ""
    const [displayCate, setDisplayCate] = useState(readableCategory)
    const [displayProduct, setDisplayProduct] = useState([])

    const getAllProduct = async () => {
        try {
            if (availableCategories.includes(displayCate)) {
                const resCat = await categorySelector({ category: displayCate })
                setDisplayProduct(Array.isArray(resCat?.data?.data) ? resCat.data.data : [])
            } else {
                const res = await allProducts()
                setDisplayProduct(Array.isArray(res?.data?.data) ? res.data.data : [])
            }
        } catch (error) {
            console.error("Error fetching products:", error)
            setDisplayProduct([])
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [displayCate, category])

    const handleCategoryChange = (e) => {
        const selected = e.target.value
        setDisplayCate(selected)

        // Update URL path
        if (availableCategories.includes(selected)) {
            const slug = selected.toLowerCase().replace(" ", "-")
            navigate(`/shop/${slug}`)
        } else {
            navigate('/shop')
        }
    }
console.log(displayProduct);

    return (
        <main className='w-full'>
            <div className='category-filter flex justify-between px-5 [&>label]:uppercase mt-15'>
                <label htmlFor="category-filter">
                    filter: 
                    <select id="category-filter" onChange={handleCategoryChange} value={displayCate}>
                        <option value="">all products</option>
                        {availableCategories.map((cat, idx) => (
                            <option key={idx} value={cat}>
                                {cat.toLowerCase()}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="search-bar">
                    search:
                    <input type="text" id="search-bar" className='border' />
                </label>
            </div>

            <div className='max-w-[1400px] mx-auto py-15 px-2 md:px-3 min-h-[70vh]'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-16'>
                    {displayProduct.map((prods, index) => (
                        <div key={index}>
                            <ProductCard
                                smallImages={prods.images}
                                name={prods.title}
                                price={prods.price}
                                strike={prods.old_price}
                                prodId={prods.productCode}
                                id={prods.productId}
                                quantity={1}
                                alreadyInCart={userCart}
                                user={user}
                                performFunction={() => handleAddCart(prods._id, prods.title, userCart, user)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
