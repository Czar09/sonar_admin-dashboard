import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import Link from 'next/link'
const orders=[
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
        "id": "6317283b71g63726g7312",
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
  return (
    <div className='p-10'>
         <div className="flex flex-wrap w-full ">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Total orders</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className=" w-full leading-relaxed text-gray-500 py-2">Yeah....! There are 10+ orders.</p>
    </div>
        {/* <h1 className='py-2'>Total Orders (10+)</h1> */}
        <div className='mt-3'>
            <div className=' flex flex-col ' >
                {
                    orders.map(order=>(
                        <div className='px-4 py-2  border-b flex items-center justify-between'>
                            <div className='flex items-center w-[100%]'>
                                <div >
                                    <img className='w-10 h-10 rounded-full' src={order.img} />
                                </div>
                                <div className='pl-1'>
                                    <h6 className='text-gray-600 uppercase text-xs'>{order.cust_name}</h6>
                                </div>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center justify-start gap-2 '>
                                    <img className='w-10 h-10 rounded-full' src={order.prod_img} alt="" />
                                    <small className='text-slate-500'>{order.product_name} (Qty: {order.quantity})</small>
                                    <small className='text-green-500 font-semibold'>₹{order.price}</small>
                                </div>
                                <div>
                                {
                                order.order_status == "pending" ?
                                <button disabled className='border px-2 py-1  rounded-lg text-white text-xs  bg-yellow-500 tracking-wider' type='button'>Pending</button> :
                                order.order_status == "completed" ?
                                <button disabled className='border px-2 py-1  rounded-lg text-white text-xs  bg-green-600 tracking-wider ' type='button'>Delivered</button> :
                                <button disabled className='border px-2 py-1  rounded-lg text-white text-xs  bg-red-600 tracking-wider' type='button'>Cancelled</button>
                                    
                                }
                                </div>
                                <div>
                                    <Link href={"/orders/" + order.id} className='text-2xl cursor-pointer'><BiLinkExternal /></Link>
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