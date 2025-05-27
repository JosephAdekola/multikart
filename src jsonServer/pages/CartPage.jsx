import React, { useEffect, useState } from 'react'
import { cartAtoms, fetchCart } from '../atoms/cart/CartAtoms'
import { useRecoilState } from 'recoil'
import { AllCart, DeleteCartIteem, EditCart } from '../apiCalls/CartCall'
import { toast } from 'react-toastify'

export default function CartPage() {
    const [cartDetails, setCartDetails] = useRecoilState(cartAtoms)
    const [totalPrice, setTotalPrice] = useState(0)

    const RemoveCartItemHandler = (id) => {
        const deleteId = id

        const fetchToBeDeleted = async () => {
            try {
                const res = await DeleteCartIteem(deleteId)
                fetchCart(setCartDetails);
                res && (toast.info('item successfully removed from cart'));

            } catch (error) {
                console.error('error deleting cart', error)
            }
        };

        fetchToBeDeleted();
        // window.location.reload();

    }

    const handleQuantityChange = (id, i, n, p, event) => {
        const editId = id
        const noNegative = event.target.value > 0

        const payLoad = {
            id: id,
            image: i,
            productNmae: n,
            price: p,
            quantity: noNegative ? Number(event.target.value) : ''
        }

        const fetchToBeEdited = async () => {
            try {
                await EditCart(editId, payLoad)
                fetchCart(setCartDetails)
            } catch (error) {

            }
        };
        fetchToBeEdited()
    }

    useEffect(() => {
        const total = cartDetails.reduce((acc, cart) => acc + (cart.price * cart.quantity), 0);
        setTotalPrice(total);
    }, [cartDetails])

    // console.log(cartDetails);   

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
                                            <img src={cart.image} alt="" className='w-10 mx-auto ' />
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            {cart.productNmae}
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            ${cart.price}
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 '>
                                            <input type="number" value={cart.quantity} className=' border border-gray-300 w-10 text-center ' onChange={(event) => handleQuantityChange(cart.id, cart.image, cart.productNmae, cart.price, event)} />
                                        </td>
                                        <td className=' py-2 text-center border-y border-gray-300 cursor-pointer '
                                            onClick={() => RemoveCartItemHandler(cart.id)}>
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
                    <button className=' text-white bg-[#ff4c3b] text-sm px-3 py-1 font-bold hover:text-black hover:bg-white border border-[#ff4c3b] cursor-pointer '>
                        CONTINUE SHOPPING
                    </button>
                    <button className=' text-white bg-[#ff4c3b] text-sm px-3 py-1 font-bold hover:text-black hover:bg-white border border-[#ff4c3b] cursor-pointer '>
                        CHECK OUT
                    </button>
                </div>
            </div>
        </div>
    )
}
