import { useRecoilValue } from 'recoil'
import Button from '../components/tools/Button'
import { cartTotal, userCartAtom } from '../atoms/cart/CartAtoms'
import { authAtom } from '../atoms/auth/authAtoms'
import { utilityFuntions } from '../utils/utilityFunctions'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function CartPage() {
    const {RemoveCartItemHandler, handleQuantityChange} = utilityFuntions()

    const cartDetails = useRecoilValue(userCartAtom)

    const navigate = useNavigate()

    const [cartQuantity, setCartQuantity] = useState(cartDetails.map(item=>item.quantity))
    
    
    

    const totalPrice = useRecoilValue(cartTotal)

    const auth = useRecoilValue(authAtom)
            const user = auth.user
            
return (
        <div className=' w-full '>
            <div className=' max-w-[1400px] mx-auto py-15 '>
                <table className=' w-full '>
                    <thead>
                        <tr className=' text-sm '>
                            <th>IMAGE</th>
                            <th>PRODUCT NAME</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>ACTION</th>
                            <th className=' hidden md:block '>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartDetails.map((cart, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            <img src={cart.images[0]} alt="" className='w-10 mx-auto ' />
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            {cart.title}
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            ${cart.price}
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            <input type="number" value={cartQuantity[index]} className=' border border-gray-300 w-10 text-center ' onChange={(event) => handleQuantityChange(event, setCartQuantity, index, cart.productId, user)} />
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 cursor-pointer '
                                            onClick={() => RemoveCartItemHandler( user._id,cart.productId)}>
                                            <i className='pi pi-times'></i>
                                        </td>
                                        <td className=' hidden md:table-cell py-2 text-center border-y border-gray-300 '>
                                            {(cart.price * cart.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className=' flex gap-5 justify-end px-15 '>
                    <p>Total Price:</p>
                    <p className=' text-2xl font-bold '>${(totalPrice).toFixed(2)}</p>
                </div>
                <div className=' flex justify-between py-5 pr-15 pl-7 '>
                    <Button buttonText={"continue shopping"} />
                    <Button buttonText={"checkout"} performFunction={()=>navigate("/checkout")} />
                </div>
            </div>
        </div>
    )
}
