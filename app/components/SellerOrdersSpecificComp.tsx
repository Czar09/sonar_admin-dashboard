'use client'
import React, { useEffect } from 'react'
import { getOrders, getUsers, getWholeSaleOrders, supabaseAdmin } from '@/utils/supabase-admin'
import { useUser } from '@/utils/useUser';

const SellerOrderSpecificComp = () => {

    const [ordernum, setOrdernum] = React.useState(0);
    const [usernum, setUsernum] = React.useState<{ [x: string]: any }[] | null>(null);
    const [userlength, setUserlength] = React.useState(0);
    const { isLoading, userDetails, sellorder } = useUser();

    console.log("sellinordeser", sellorder)

    const updateOrderStatus = async (id: number, status: string) => {
        const { error } = await supabaseAdmin
            .from('sellerorders_duplicate')
            .update({ status: status })
            .eq('id', id);
    }

    const handleUpdate = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
        let status = String(e.target.value);
        updateOrderStatus(id, status);
    };
    const channelB = supabaseAdmin
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'sellerorders_duplicate',
            },
            (payload) => {

            }
        )
        .subscribe()

    return (
        <div className='md:p-10 px-4 py-6'>
            <div className="flex flex-wrap w-full ">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Seller orders</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
            </div>
            {/* <h1 className='py-2'>Total Orders (10+)</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {
                    isLoading ?
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div> :
                        sellorder?.map(prod => (
                            <div key={prod.id} className=" p-2">

                                <div className={`p-3 rounded-lg ${prod?.status == 'pending' ? ` bg-yellow-500` : prod.order_status == 'approved' || prod?.status == 'delivered' ? `bg-green-600` : prod?.status == 'cancelled' ? `bg-red-600` : `bg-blue-200`}`} >
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Amount:  ₹{prod.amount}</h2>

                                    <p className="leading-relaxed text-base">ORDER: </p>
                                    <div className='flex-col'>

                                        <small className='ml-2 text-gray-600 uppercase text-lg space-x-3'><strong>{prod?.product_name}</strong> x{prod?.quantity}</small>

                                    </div>
                                </div>
                            </div>
                        ))

                }
            </div>
        </div>
    )
}

export default SellerOrderSpecificComp



