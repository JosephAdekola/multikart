import { atom, selector } from "recoil";
import { AddToCart, AllCart } from "../../apiCalls/CartCall";
import { toast } from "react-toastify";


export const cartAtoms = atom({
    key: 'cartAtoms',
    default: [ ]
})

export const numberOfCart = selector({
    key: 'numberOfCart',
    get: ({get}) => {
        const cart = get(cartAtoms)
        const lenght = cart.length
        return lenght
    }
})

export const fetchCart = async(setCart) =>{
    try {
        const res = await AllCart()
    setCart(res.data)
    } catch (error) {
        console.error('could not get all cart from call into the fetchCart in the cartAtoms file', error);
        
    }
}

export const handleAddCart = async (i, t, p, q, alreadyInCart, setAlreadyInCart) =>{
        const checkIndex = alreadyInCart.findIndex((cart)=>cart.productNmae == t);
        const payload = {
            image: i,
            productNmae: t,
            price: p,
            quantity: q
        }

        if (checkIndex == -1) {
            const res = await AddToCart(payload)
            
            res && (toast.success('item added to cart successfully'))
            
        } else {
            toast.error('you already have this item in your cart')
        }
        fetchCart(setAlreadyInCart)
        
    }