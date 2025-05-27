import { toast } from "react-toastify";
import { AllData } from "../../utils/data/mockData";
import { AddToCart, customerCart } from "../../apiCalls/CartCall";
import { recoilPersist } from "recoil-persist";
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../auth/authAtoms";
import { useEffect } from "react";


const { persistAtom } = recoilPersist({
    key: "myCart",
    storage: localStorage
});

export const userCartAtom = atom({
    key: "userCartAtom",
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export const cartTotal = selector({
    key: "cartTotal",
    get: ({ get }) => {
        const cartItems = get(userCartAtom);
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
});

export const cartnumber = selector({
    key: "cartnumber",
    get: ({ get }) => {
        const cartItems = get(userCartAtom);
        return cartItems.length;
    },
});



export function useSyncCart() {
    const setCart = useSetRecoilState(userCartAtom);
    const auth = useRecoilValue(authAtom);

    useEffect(() => {
        async function loadCart() {
            if (!auth?.token) return;
            const cartData = await customerCart(auth.token);
            setCart(cartData.data);
        }
        loadCart();
    }, [auth, setCart]);}


// export const handleAddCart = async (i, t, p, q, alreadyInCart, setAlreadyInCart) => {
//     const checkIndex = alreadyInCart.findIndex((cart) => cart.productNmae == t);
//     const payload = {
//         image: i,
//         productNmae: t,
//         price: p,
//         quantity: q
//     }

//     if (checkIndex == -1) {
//         // const res = await AddToCart(payload)

//         const updatedCart = [...alreadyInCart, payload];
//         setAlreadyInCart(updatedCart);

//         // res && (toast.success('item added to cart successfully'))

//         toast.success('item added to cart successfully')

//     } else {
//         toast.error('you already have this item in your cart')
//     }
//     fetchCart(setAlreadyInCart)

// }

// export const handleAddCartBuyNow = async (i, t, p, q, alreadyInCart, setAlreadyInCart, navigate) => {
//     const checkIndex = alreadyInCart.findIndex((cart) => cart.productNmae == t);
//     const payload = {
//         image: i,
//         productNmae: t,
//         price: p,
//         quantity: q
//     }

//     if (checkIndex == -1) {
//         // const res = await AddToCart(payload)

//         const updatedCart = [...alreadyInCart, payload];
//         setAlreadyInCart(updatedCart);

//     }

//     navigate("/checkout")

//     fetchCart(setAlreadyInCart)

// }