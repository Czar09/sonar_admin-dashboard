import React from 'react'

const products = [
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
    {
        "product_name": "Thar 4*4",
        "img": "https://tse1.mm.bing.net/th?id=OIP.xBPRNOgNq63NSj4iNdSK6QHaEK&pid=Api&P=0&h=180",
        "price": "22,00,000",
        "product_disp": "Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra."
    },
]

const FutureArrivals = () => {
  return (
    <div className='px-10 py-8'>
        <section className="text-gray-600 body-font">
  <div className="container   mx-auto">
    <div className="w-full ">
      <div className=" w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Future Arrivals</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="py-2 w-full leading-relaxed text-gray-500">Here are the products which you are planning to launch.</p>
    </div>
    <div className="grid grid-cols-5">
      {
        products.map(prod=>(
                <div className=" p-2">
                     <div className="bg-gray-100 p-3 rounded-lg">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={prod.img} alt="content"/>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{prod.product_name} - <small>₹{prod.price}</small></h2>
                        <p className="leading-relaxed text-base">{prod.product_disp}</p>
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

export default FutureArrivals