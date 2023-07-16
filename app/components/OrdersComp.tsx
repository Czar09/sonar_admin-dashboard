'use client'
import React, { useEffect } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { getOrders, getUsers, supabaseAdmin } from '@/utils/supabase-admin'
const orders = [
    {
        "id": "6721bshagksal13",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "pending",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "6317283b713726g7312",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "cancelled",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "6721bshag",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "pending",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "6317283b71g3726g7312",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1jjsk1klsaka",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1jjsk1klsakaksla",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "6317283b71g63726g7312",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1jj",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "cancelled",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1jjskla",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "completed",
        "expected_delivery": "05-07-2023"
    },
    {
        "id": "1jjsk1",
        "cust_name": "tanuj bhatt",
        "img": "https://tse2.mm.bing.net/th?id=OIP.ysjUEDv4HWGqqqz7I1_l9AAAAA&pid=Api&P=0&h=180",
        "prod_img": "https://images.news18.com/ibnlive/uploads/2020/08/1597473433_mahindra-thar-4x4-new-suv.jpg",
        "product_name": "Thar",
        "price": "20 Lakhs",
        "order_time": "14:00",
        "order_date": "05-07-2023",
        "quantity": "01",
        "order_status": "pending",
        "expected_delivery": "05-07-2023"
    },
]


const OrdersComp = () => {

    const [ordernum, setOrdernum] = React.useState(0);
    const [usernum, setUsernum] = React.useState<{ [x: string]: any }[] | null>(null);
    const [userlength, setUserlength] = React.useState(0);

    const runFun = async () => {
        const order = async () => await getOrders().then((data) => {
            setOrdernum(data.length);
            console.log("new order", data);
            setUsernum(data);
        });
        order();
        const user = async () => await getUsers().then((data) => {
            console.log(data);
            setUserlength(data.length);
        });
        user();
    }

    useEffect(() => {
        runFun();
    }, [])

    const updateOrderStatus = async (id: number, status: string) => {
        console.log(id, status);
        const { error } = await supabaseAdmin
            .from('orders')
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
                event: 'INSERT',
                schema: 'public',
                table: 'orders',
            },
            (payload) => {
                console.log(payload)
                runFun();
            }
        )
        .subscribe()

    return (
        <div className='md:p-10 px-4 py-6'>
            <div className="flex flex-wrap w-full ">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Total orders</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p className=" w-full leading-relaxed text-gray-500 py-2">Yeah....! There are 10+ orders.</p>
            </div>
            {/* <h1 className='py-2'>Total Orders (10+)</h1> */}
            <div className='mt-3'>
                <div className=' ' >
                    {
                        usernum?.map(order => (
                            <div key={order.id} className='md:px-4 py-2 grid grid-cols-4 gap-1 border-b  items-center justify-between'>
                                <div className='flex'>
                                    <div className='pl-1'>
                                        <small className='text-gray-600 uppercase text-xs'>{order?.users?.["full_name"]}</small>
                                    </div>
                                </div>
                                <div className='flex items-center lg:w-[100%]'>
                                    <div className='pl-1'>
                                        <small className='text-gray-600 uppercase text-xs'>{order?.users?.["phone_number"]}</small>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex flex-col items-center justify-start gap-2 '>
                                        {
                                            order?.prod_data?.["products"]?.map((prod: any) => (
                                                <small key={prod?.name} className='text-gray-600 uppercase text-md'><strong>{prod?.name}</strong> x{prod?.quantity}</small>
                                            ))
                                        }
                                    </div>

                                    <div>
                                        <select defaultValue={'DEFAULT'} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleUpdate(e, order?.id)} className={`border px-2 py-1  rounded-lg text-black text-xs ${order?.status == 'pending' ? ` bg-yellow-500` : order.order_status == 'approved' || order?.status == 'delivered' ? `bg-green-600` : order?.status == 'cancelled' ? `bg-red-600` : `bg-blue-200`}  tracking-wider`}>

                                            <option className='' value="DEFAULT" >
                                                {order?.status}
                                            </option>
                                            <option value="pending">pending</option>
                                            <option value="approved">approved</option>
                                            <option value="delivered">delivered</option>
                                            <option value="cancelled">cancelled</option>
                                        </select>
                                    </div>
                                   
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OrdersComp




export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    // Create authenticated Supabase Client
    const supabase = createServerSupabaseClient(ctx);
    // Check if we have a session
    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (session)
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };

    return {
        props: {
            initialSession: session,
        }
    };
}