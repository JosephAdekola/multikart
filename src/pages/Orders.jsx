import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../atoms/auth/authAtoms';
import { getUserOrders } from '../apiCalls/orders';
import Button from '../components/tools/Button';

export default function Orders() {
    const getUserDetails = useRecoilValue(authAtom);
    const user = getUserDetails.user;

    const [loadingOrders, setLoadingOrders] = useState(true);
    const [userOrderHistory, setUserOrderHistory] = useState([]);

    const fetchUserOrders = async () => {
        try {
            const res = await getUserOrders({ userId: user._id });
            if (res) {
                setUserOrderHistory(res.data.data);
                setLoadingOrders(false);
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            } else if (error.message) {
                console.log("axios error", error);
            } else if (error.request) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (user?._id) {
            fetchUserOrders();
        }
    }, [user]);

    if (loadingOrders) {
        return (
            <div className='flex justify-center min-h-[40vh]'>
                <p className='my-auto'>Please wait, your orders are loading...</p>
            </div>
        );
    }

    return (
        <div className='w-full overflow-hidden'>
            <div className='max-w-[1400px] mx-auto py-10 px-4'>
                <div className='overflow-x-auto'>
                    <table className='w-full min-w-[800px]'>
                        <thead>
                            <tr className='text-sm bg-gray-100'>
                                <th className='py-2 px-4'>ORDER NUMBER</th>
                                <th className='py-2 px-4'>DATE</th>
                                <th className='py-2 px-4'>PRODUCTS</th>
                                <th className='py-2 px-4'>TOTAL</th>
                                <th className='py-2 px-4'>STATUS</th>
                                <th className='hidden md:table-cell py-2 px-4'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userOrderHistory.map((item, index) => (
                                <tr key={index} className='text-center border-t border-gray-300'>
                                    <td className='py-2 px-4'>{item._id}</td>
                                    <td className='py-2 px-4'>
                                        {new Date(item.createdAt).toISOString().split('T')[0]}
                                    </td>
                                    <td className='py-2 px-4'>
                                        <ul>
                                            {item.items.map((prod, i) => (
                                                <li key={i} className='text-sm mb-1'>
                                                    {prod.product.title} &times; {prod.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className='py-2 px-4'>
                                        ${Number(item.total).toFixed(2)}
                                    </td>
                                    <td className='py-2 px-4'>{item.status}</td>
                                    <td className='py-2 px-4 flex gap-2 justify-center items-center'>
                                        <Button buttonText={"view"} />
                                        <Button buttonText={"track"} bground='gray-500' />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
