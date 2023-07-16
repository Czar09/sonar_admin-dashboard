'use client'
import { getProducts } from '@/utils/supabase-admin';
import React, { useEffect } from 'react'

const products = [
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar",
        "img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "price": "2,000,000",
        "ratings": "4.5",
        "bestseller": "false",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
]

const ProductsComp = () => {
    const [proddata, setProddata] = React.useState<{ [x: string]: any }[] | null>(null);
    const runFun = async () => {
        const order = async () => await getProducts().then((data) => {
            setProddata(data);
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
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Products</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="py-2 w-full leading-relaxed text-gray-500">Here are the products which are present in your inventory.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        {
                            proddata?.map(prod => (
                                <div key={prod.price} className=" p-2">
                                    <div className={`${prod.quantity<10? `bg-red-300`:`bg-gray-300`} p-3 rounded-lg`}>


                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{prod.name} - <small>₹{prod.price}</small></h2>
                                        <p className="leading-relaxed text-base">Remaining Quantity: {prod.quantity}</p>

                                        
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

export default ProductsComp