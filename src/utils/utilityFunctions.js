import { useSetRecoilState, useRecoilValue } from "recoil";
import { toast } from "react-toastify";
import { userCartAtom } from "../atoms/cart/CartAtoms";
import { authAtom } from "../atoms/auth/authAtoms";
import {
    AddToCart,
    changeCartQuantity,
    customerCart,
    DeleteCartItem,
} from "../apiCalls/CartCall";

export const utilityFuntions = () => {
    const setCartData = useSetRecoilState(userCartAtom);
    const auth = useRecoilValue(authAtom);

    const fetchUserCart = async () => {
        try {
            const token = auth?.token;
            const cartData = await customerCart({
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setCartData(cartData?.data || []);
        } catch (error) {
            console.error("Error fetching cart:", error);
            setCartData([]);
        }
    };

    const handleAddCart = async (productId, title, cart, user) => {
        if (!Array.isArray(cart)) return;

        const exists = cart.some((item) => item.productId === productId);
        if (exists) {
            toast.warn("This item is already in your cart");
            return;
        }

        try {
            const payload = {
                userId: user._id,
                productId,
                quantity: 1,
            };

            const res = await AddToCart(payload);
            if (res) {
                await fetchUserCart(); // refresh cart data
                toast.success(`${title} successfully added to cart`);
            }
        } catch (error) {
            const message =
                error?.response?.data?.message || error.message || "Error adding to cart.";
            toast.error(message);
            console.error("Add to cart error:", message);
        }
    };

    const RemoveCartItemHandler = async (userId, id) => {
        try {
            const payload = {
                userId: userId,
                productId: id,
            };

            const res = await DeleteCartItem(payload);

            if (res) {
                toast.success("Item successfully deleted from cart");
                fetchUserCart();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
                return;
            }
            if (error.message) {
                console.log("axios error", error);
                return;
            }
            if (error.request) {
                console.log(error);
            }
        }
    };

    const handleQuantityChange = async (
        happen,
        quantitySetter,
        i,
        identity,
        user
    ) => {
        happen.preventDefault();
        const value = Number(happen.target.value);

        quantitySetter((prev) => {
            const updated = [...prev];
            updated[i] = value;
            return updated;
        });

        try {
            const payload = {
                userId: user._id.toString(),
                productId: identity,
                quantity: value,
            };

            const res = await changeCartQuantity(payload);

            if (res) {
                fetchUserCart();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
                return;
            }
            if (error.message) {
                console.log("axios error", error);
                return;
            }
            if (error.request) {
                console.log(error);
            }
        }
    };

    return {
        fetchUserCart,
        handleAddCart,
        RemoveCartItemHandler,
        handleQuantityChange,
    };
};
