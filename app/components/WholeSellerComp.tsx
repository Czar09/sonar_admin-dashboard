'use client'
import { getProducts, getSellers, getWholeSellers, supabaseAdmin } from '@/utils/supabase-admin';
import React, { useEffect } from 'react'

export type Seller = {
    [x: string]: any;
}

const WholeSellerComp = () => {
    const [seller, setSeller] = React.useState<{ [x: string]: any } | null>(null);

    const runFun = async () => {
        const order = async () => await getWholeSellers().then((data) => {
            setSeller(data);
        });
        order();
    }

    useEffect(() => {
        runFun();
    }, []);

    return (
        <div className='px-4 lg:px-10 py-8'>
            <section className="text-gray-600 body-font">
                <div className="">
                    <div className="w-full ">
                        <div className=" w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">WholeSalers</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="py-2 w-full leading-relaxed text-gray-500">Here are the Wholesalers which are present in your organisation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        {
                            seller?.map((ele: Seller) => (
                                <div key={ele?.id} className=" p-2">
                                    <div className='bg-gray-300 p-3 rounded-lg space-y-2'>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{ele?.full_name}</h2>
                                        <p className="leading-relaxed text-base">Phone Number: {ele?.phone_number}</p>
                                        <p className="leading-relaxed text-base">Email: {ele?.email}</p>
                                        <p className="leading-relaxed text-base">Total Sales: </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WholeSellerComp