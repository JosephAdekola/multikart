import React, { useEffect, useState } from 'react'
import { singleProduct } from '../apiCalls/Products'
import { allProducts } from '../apiCalls/Products'
import { useNavigate, useParams } from 'react-router-dom'
import NewProductsCard from '../components/collectionsFolder/NewProductsCard'
import ProductCard from '../components/ProductCard'
// import { AllCart } from '../apiCalls/CartCall'
import { userCartAtom } from '../atoms/cart/CartAtoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import { AllData } from '../utils/data/mockData'
import Reviews from '../components/Reviews.jsx'
import Button from '../components/tools/Button.jsx'
import { authAtom } from '../atoms/auth/authAtoms.js'
import { postReview } from '../apiCalls/reviewsCall.js'
import { utilityFuntions } from '../utils/utilityFunctions.js'


export default function ProductsDetails() {

    const navigate = useNavigate()

    const { handleAddCart } = utilityFuntions()

    const passedId = useParams()
    const productId = passedId.id
    const [product, setProduct] = useState({})
    const [everyProduct, setEveryProduct] = useState([])
    const [hidBrand, setHidBrand] = useState(true)
    const [newProdsTransformIndex, setNewProdsTransformIndex] = useState(0)
    const [imgeToDisplay, setImgeToDisplay] = useState(0)
    const [quantitty, setQuantity] = useState(1)
    const [moreDetails, setMoreDetails] = useState('description')
    const [mobileCol1, setMobileCol1] = useState(false)

    const alreadyInCart = useRecoilValue(userCartAtom)

    const [newReview, setNewReview] = useState("")
    const [rating, setRating] = useState(0)
    const [star1, setStar1] = useState("gray-300")
    const [star2, setStar2] = useState("gray-300")
    const [star3, setStar3] = useState("gray-300")
    const [star4, setStar4] = useState("gray-300")
    const [star5, setStar5] = useState("gray-300")
    const getUser = useRecoilValue(authAtom)
    const user = getUser.user


    const reviewAdder = async (e) => {
        e.preventDefault()

        const payload = {
            userId: user._id,
            productId: product._id,
            rating: rating,
            comment: newReview
        }
        if (!user._id) {
            alert("you have to be a registered user before you can post review")
        }
        try {
            const res = await postReview(payload)
            if (res) {
                alert(res.data.message)
                setNewReview("")
                setRating(0)
                setStar1("gray-300")
                setStar2("gray-300")
                setStar3("gray-300")
                setStar4("gray-300")
                setStar5("gray-300")
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                alert(error.response.data.message)
                return;
            }
            if (error.message) {
                console.log("axios error", error);
                return
            }
            if (error.request) {
                console.log(error);

            }
        }
    }


    const sellingPoints = [
        { id: 1, icon: 'pi-truck', title: 'Free Shipping', desc: 'Free Shipping Word Wide' },
        { id: 2, icon: 'pi-clock', title: '24 X 7 Service', desc: 'Online Payment For 24 X 7' },
        { id: 3, icon: 'pi-megaphone', title: 'Festival Offer', desc: 'New Online Special Festival Offer' },
        { id: 4, icon: 'pi-credit-card', title: 'Online Payment', desc: 'seamless payment Process' }
    ]



    const nextNewProd = () => {
        if (newProdsTransformIndex < 200) {
            setNewProdsTransformIndex(prev => prev + 100)
        } else {
            setNewProdsTransformIndex(0)
        }
    }

    const prevNewProd = () => {
        if (newProdsTransformIndex < 300 && newProdsTransformIndex > 0) {
            setNewProdsTransformIndex(prev => prev - 100)
        } else if (newProdsTransformIndex == 0) {
            setNewProdsTransformIndex(200)
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            // setProduct(AllData.products[productId - 1])
            try {
                const res = await singleProduct(productId)
                setProduct(res?.data)
            } catch (error) {
                console.error('unable to get product from the api call', error);
                throw error
            }
        };

        const fetchAllProducts = async () => {
            try {
                const res = await allProducts()
                setEveryProduct(res?.data.data)
            } catch (error) {
                console.error(`unable to fetch all products from api call`, error);
                throw error
            }
        };

        fetchProduct();
        fetchAllProducts();

    }, [productId])



    return (
        <div className=' min-h-[70vh] w-full '>
            <div className={`col1 w-[80%] h-[85vh] px-2 overflow-y-scroll flex md:hidden flex-col gap-5 bg-white ${!mobileCol1 ? 'hidden' : 'absolute'}`}>
                <div className=' flex gap-2 px-5 cursor-pointer mt-3 '
                    onClick={() => setMobileCol1(false)}>
                    <i className=' pi pi-angle-left my-auto text-sm '></i>
                    <h2 className=' '>BACK</h2>
                </div>
                <hr className=' text-gray-300 ' />
                <div className='  p-7 '>
                    <div className=' flex justify-between '>
                        <h2 className=' font-bold '>BRAND</h2>
                        <i className=' pi pi-sort-down-fill my-auto text-sm '
                            onClick={() => setHidBrand(!hidBrand)}></i>
                    </div>
                    <ul className={`text-gray-500 mt-5 
                                ${hidBrand && ('hidden')}`}>
                        <li className=' my-1 cursor-pointer ' >Clothing</li>
                        <li className=' my-1 cursor-pointer ' >Bags</li>
                        <li className=' my-1 cursor-pointer ' >Footwear</li>
                        <li className=' my-1 cursor-pointer ' >Watches</li>
                        <li className=' my-1 cursor-pointer ' >Accessories</li>
                    </ul>
                </div>
                <div className=' p-7 border border-gray-300 '>
                    {
                        sellingPoints.map((sell, index) => {
                            return (
                                <div className=' flex gap-3 py-3 '
                                    key={index}>
                                    <div>
                                        <i className={`pi ${sell.icon} text-4xl text-[#ff4c3b] `}></i>
                                    </div>
                                    <div>
                                        <h3>{sell.title}</h3>
                                        <p className=' text-sm text-gray-500 '>{sell.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=''>
                    <div className=' flex justify-between '>
                        <h3 className=' text-sm font-bold '>NEW PRODUCT</h3>
                        <div className=' flex gap-1 text-gray-500 text-2xl '>
                            <i className=' pi pi-angle-left '
                                onClick={() => prevNewProd()}></i>
                            <i className=' pi pi-angle-right '
                                onClick={() => nextNewProd()}></i>
                        </div>
                    </div>
                    <hr className=' text-gray-300 mt-3  ' />
                    <div className=' overflow-hidden '>
                        <div className=' flex transition-all duration-700 ease-in-out '
                            style={{ transform: `translateX(-${newProdsTransformIndex}%)` }}>
                            <NewProductsCard prodArray={everyProduct} initIndex={0} finalIndex={4} />
                            <NewProductsCard prodArray={everyProduct} initIndex={3} finalIndex={7} />
                            <NewProductsCard prodArray={everyProduct} initIndex={6} finalIndex={10} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' max-w-[1400px] my-5 mx-auto px-4 ' >
                <div className=' main flex gap-[1%] '>
                    <div className=' col1 w-[23%] hidden md:flex flex-col gap-5 '>
                        <div className=' border border-gray-300 p-7 '>
                            <div className=' flex justify-between '>
                                <h2 className=' font-bold '>BRAND</h2>
                                <i className=' pi pi-sort-down-fill my-auto text-sm '
                                    onClick={() => setHidBrand(!hidBrand)}></i>
                            </div>
                            <ul className={`text-gray-500 mt-5 
                                ${hidBrand && ('hidden')}`}>
                                <li className=' my-1 cursor-pointer ' >Clothing</li>
                                <li className=' my-1 cursor-pointer ' >Bags</li>
                                <li className=' my-1 cursor-pointer ' >Footwear</li>
                                <li className=' my-1 cursor-pointer ' >Watches</li>
                                <li className=' my-1 cursor-pointer ' >Accessories</li>
                            </ul>
                        </div>
                        <div className=' p-7 border border-gray-300 '>
                            {
                                sellingPoints.map((sell, index) => {
                                    return (
                                        <div className=' flex gap-3 py-3 '
                                            key={index}>
                                            <div>
                                                <i className={`pi ${sell.icon} text-4xl text-[#ff4c3b] `}></i>
                                            </div>
                                            <div>
                                                <h3>{sell.title}</h3>
                                                <p className=' text-sm text-gray-500 '>{sell.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className=''>
                            <div className=' flex justify-between '>
                                <h3 className=' text-sm font-bold '>NEW PRODUCT</h3>
                                <div className=' flex gap-1 text-gray-500 text-2xl '>
                                    <i className=' pi pi-angle-left '
                                        onClick={() => prevNewProd()}></i>
                                    <i className=' pi pi-angle-right '
                                        onClick={() => nextNewProd()}></i>
                                </div>
                            </div>
                            <hr className=' text-gray-300 mt-3  ' />
                            <div className=' overflow-hidden '>
                                <div className=' flex transition-all duration-700 ease-in-out '
                                    style={{ transform: `translateX(-${newProdsTransformIndex}%)` }}>
                                    <NewProductsCard prodArray={everyProduct} initIndex={0} finalIndex={4} />
                                    <NewProductsCard prodArray={everyProduct} initIndex={3} finalIndex={7} />
                                    <NewProductsCard prodArray={everyProduct} initIndex={6} finalIndex={10} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' col2 w-full md:w-[76%] '>
                        <div className=' rol1 md:flex gap-[1%] '>
                            <button className=' bg-[#ff4c3b] text-white text-lg px-5 py-2 md:hidden cursor-pointer '
                                onClick={() => setMobileCol1(true)}>
                                <i className=' pi pi-filter-fill text-white mr-3 '></i>
                                FILTER
                            </button>
                            <div className=' rcol1 w-full md:w-[49.5%] '>
                                <div className='  '>
                                    <img src={product?.images?.[imgeToDisplay]} alt="" />
                                </div>
                                <div className=' mt-3 flex gap-3 '>
                                    {
                                        product?.images?.map((imagee, index) => {
                                            return (
                                                <div key={index}
                                                    className={`${index == imgeToDisplay && ('border')}`}>
                                                    <img src={imagee} alt=""
                                                        onClick={() => setImgeToDisplay(index)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className=' rcol2 w-full md:w-[49.5%] px-5 '>
                                <div className=' flex flex-col gap-2 text-center md:text-left '>
                                    <h2 className=' uppercase text-xl font-bold '>{product.title}</h2>
                                    <div className=' flex justify-center md:justify-start gap-2 '>
                                        <p className='line-through text-gray-400'>${product.old_price}</p>
                                        <p className=' text-red-500 '>{product.discount}</p>
                                    </div>
                                    <p className=' text-3xl '>${product.price}</p>
                                    <div className=' flex justify-center md:justify-start gap-1  '>
                                        <button className=' border border-gray-300 w-6 h-6 rounded-full bg-amber-300 '></button>
                                        <button className=' border border-gray-300 w-6 h-6 rounded-full '></button>
                                        <button className=' border border-gray-300 w-6 h-6 rounded-full bg-green-500 '></button>
                                    </div>
                                    <hr className=' text-gray-300 ' />
                                    <p>Select Size</p>
                                    <div className=' flex justify-center md:justify-start gap-3 '>
                                        <button className=' px-4 py-2 border border-gray-300 rounded-full '>S</button>
                                        <button className=' px-4 py-2 border border-gray-300 rounded-full '>M</button>
                                        <button className=' px-4 py-2 border border-gray-300 rounded-full '>L</button>
                                    </div>
                                    <p className=' text-red-500 '>{product.stock}</p>
                                    <h3>Quantity</h3>
                                    <div className=' text-gray-400 '>
                                        <button className=' pi pi-angle-left border h-8 px-2 '
                                            onClick={() => { if (quantitty > 0) { setQuantity(prev => prev - 1) } }}></button>
                                        <input type="text" className=' w-[60px] h-8 border text-center ' value={quantitty} />
                                        <button className=' pi pi-angle-right border h-8 px-2 '
                                            onClick={() => setQuantity(prev => prev + 1)}></button>
                                    </div>

                                    <div className=' flex justify-center md:justify-start gap-3 py-5 '>
                                        <Button buttonText={"add to cart"} performFunction={() => handleAddCart(product._id, product.title, alreadyInCart, user)} />
                                        <Button buttonText={"buy now"} performFunction={() => { handleAddCart(product._id, product.title, alreadyInCart, user); navigate("/checkout") }} />
                                    </div>

                                    <hr className=' text-gray-300 ' />
                                    <div>
                                        <h3 className=' text-sm font-bold '>Product Details</h3>
                                        <p className=' text-sm text-gray-500 '>{product.productDetail}</p>
                                    </div>
                                    <hr className=' text-gray-300 ' />
                                    <div className=' py-3 flex flex-col gap-2 '>
                                        <h3>Share It</h3>
                                        <div className=' flex justify-center md:justify-start gap-5 '>
                                            <i className=' pi pi-instagram hover:text-[#ff4c3b] cursor-pointer '></i>
                                            <i className=' pi pi-facebook hover:text-[#ff4c3b] cursor-pointer '></i>
                                            <i className=' pi pi-google hover:text-[#ff4c3b] cursor-pointer '></i>
                                            <i className=' pi pi-twitter hover:text-[#ff4c3b] cursor-pointer '></i>
                                            <i className=' pi pi-instagram hover:text-[#ff4c3b] cursor-pointer '></i>
                                            <i className=' pi pi-wifi hover:text-[#ff4c3b] cursor-pointer '></i>
                                        </div>
                                    </div>
                                    <hr className=' text-gray-300 ' />
                                    <div>
                                        <h3 className=' text-sm font-bold '>Time Reminder</h3>
                                        <div className=' flex gap-5 bg-gray-100 w-fit px-5 py-2 text-sm mx-auto md:mx-px '>
                                            <div>
                                                <p>00</p>
                                                <p>Days</p>
                                            </div>
                                            <p>:</p>
                                            <div>
                                                <p>00</p>
                                                <p>Hrs</p>
                                            </div>
                                            <p>:</p>
                                            <div>
                                                <p>00</p>
                                                <p>Mins</p>
                                            </div>
                                            <p>:</p>
                                            <div>
                                                <p>00</p>
                                                <p>Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' rol2 w-full mt-5 py-5 flex flex-col gap-5 '>
                            <div>
                                <ul className=' px-5 text-center sm:flex gap-0 text-sm '>
                                    <li onClick={() => setMoreDetails('description')} className={`cursor-pointer border-b px-3 py-3 border-gray-300 ${moreDetails == 'description' && ('text-[#ff4c3b] border-b-[#ff4c3b]')}`}>DESCRIPTION</li>
                                    <li onClick={() => setMoreDetails('details')} className={`cursor-pointer border-b px-3 py-3 border-gray-300 ${moreDetails == 'details' && ('text-[#ff4c3b] border-b-[#ff4c3b]')}`}>DETAILS</li>
                                    <li onClick={() => setMoreDetails('video')} className={`cursor-pointer border-b px-3 py-3 border-gray-300 ${moreDetails == 'video' && ('text-[#ff4c3b] border-b-[#ff4c3b]')}`}>VIDEO</li>
                                    <li onClick={() => setMoreDetails('review')} className={`cursor-pointer border-b px-3 py-3 border-gray-300 ${moreDetails == 'review' && ('text-[#ff4c3b] border-b-[#ff4c3b]')}`}>PRODUCT REVIEWS</li>
                                </ul>
                            </div>

                            <div className=' text-gray-500 '>
                                <div className={` px-10 ${moreDetails !== 'description' ? 'hidden' : 'block'}`}>
                                    <p>{product.description}</p>
                                </div>

                                <div className={` px-10 ${moreDetails !== 'details' ? 'hidden' : 'block'}`}>
                                    <p>{product.details}</p>
                                </div>

                                <div className={` px-10 ${moreDetails !== 'video' ? 'hidden' : 'block'}`}>
                                    <p>{product.Video}</p>
                                </div>

                                <div className={` px-10 ${moreDetails !== 'review' ? 'hidden' : 'block'}`}>
                                    <div>
                                        <p>
                                            <Reviews productId={product._id} />
                                        </p>
                                    </div>
                                    <div>
                                        <form action="" className=' flex flex-col gap-2 '>
                                            <input type="text" placeholder='what do you think about this product?'
                                                className=' border w-full px-3 py-2 rounded ' value={newReview}
                                                onChange={e => setNewReview(e.target.value)} />
                                            <div className=' flex gap-2 '>
                                                <p> Rating: </p>
                                                <i className={`my-auto pi pi-star-fill text-${star1}`} onClick={() => {
                                                    setStar1("yellow-500");
                                                    setStar2("gray-300")
                                                    setStar3("gray-300")
                                                    setStar4("gray-300")
                                                    setStar5("gray-300")
                                                    setRating(1)
                                                }}>
                                                </i>
                                                <i className={`my-auto pi pi-star-fill text-${star2}`} onClick={() => {
                                                    setStar1("yellow-500");
                                                    setStar2("yellow-500")
                                                    setStar3("gray-300")
                                                    setStar4("gray-300")
                                                    setStar5("gray-300")
                                                    setRating(2)
                                                }}>
                                                </i>
                                                <i className={`my-auto pi pi-star-fill text-${star3}`} onClick={() => {
                                                    setStar1("yellow-500");
                                                    setStar2("yellow-500")
                                                    setStar3("yellow-500")
                                                    setStar4("gray-300")
                                                    setStar5("gray-300")
                                                    setRating(3)
                                                }}>
                                                </i>
                                                <i className={`my-auto pi pi-star-fill text-${star4}`} onClick={() => {
                                                    setStar1("yellow-500");
                                                    setStar2("yellow-500")
                                                    setStar3("yellow-500")
                                                    setStar4("yellow-500")
                                                    setStar5("gray-300")
                                                    setRating(4)
                                                }}>
                                                </i>
                                                <i className={`my-auto pi pi-star-fill text-${star5}`} onClick={() => {
                                                    setStar1("yellow-500");
                                                    setStar2("yellow-500")
                                                    setStar3("yellow-500")
                                                    setStar4("yellow-500")
                                                    setStar5("yellow-500")
                                                    setRating(5)
                                                }}>
                                                </i>
                                            </div>
                                            <Button buttonText={"submit"} width={"fit"} leftMargin={"auto"} performFunction={reviewAdder} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' related-products w-full py-5 '>
                    <div className=' py-5 '>
                        <h2 className=' text-3xl font-bold '>RELATED PRODUCTS</h2>
                    </div>
                    <div className=' md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 '>
                        {
                            everyProduct.map((prod, index) => {
                                const display = prod.title != product.title
                                return (
                                    <div key={index}
                                        className={`${!display && ('hidden')}`}>
                                        <ProductCard smallImages={prod.images} name={prod.title} prodId={prod.productCode} price={prod.price} strike={prod.old_price} alreadyInCart={1} setAlreadyInCart={1} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}