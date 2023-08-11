'use client'
import { getProducts, getWholeSalePrice, supabaseAdmin } from '@/utils/supabase-admin';
import React, { useEffect } from 'react'


const WholeSalePrice = () => {
    const [proddata, setProddata] = React.useState<{ [x: string]: any }[] | null>(null);
    const [addquantity, setAddquantity] = React.useState<{ [productId: number]: number }>({});
    const [subtractedquantity, setSubtractedquantity] = React.useState<{ [productId: number]: number }>({});
    const [price, setPrice] = React.useState<{ [productId: number]: number }>({});

    const runFun = async () => {
        const order = async () => await getWholeSalePrice().then((data) => {
            setProddata(data);
            console.log("prod=", data);
        });
        order();
    }

    const handlePriceChange = (productId: string, price: number) => {
        setPrice(prevPrices => ({
            ...prevPrices,
            [productId]: price,
        }));
    };

    const handleAddQuantity = (productId: string, quantity: number) => {
        setAddquantity(prevAddQuantity => ({
            ...prevAddQuantity,
            [productId]: quantity,
        }));
    };

    const handleSubQuantity = (productId: string, quantity: number) => {
        setSubtractedquantity(prevSubtractedQuantity => ({
            ...prevSubtractedQuantity,
            [productId]: quantity,
        }));
    };
    const updateQuantity = async (quantity: number, id: string) => {
        const { error } = await supabaseAdmin
            .from('wholesale_products_price')
            .update({ quantity: quantity })
            .eq('id', id);
        setAddquantity({});
        setSubtractedquantity({});
    }
    const channelC = supabaseAdmin
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'wholesale_products_price',
            },
            (payload) => {
                runFun();
            }
        )
        .subscribe()
    useEffect(() => {
        runFun();
    }, []);

    return (
        <div className='px-4 lg:px-10 py-8'>
            <section className="text-gray-600 body-font">
                <div className="">
                    <div className="w-full ">
                        <div className=" w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Whole Sale Prices</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="py-2 w-full leading-relaxed text-gray-500">Here are the wholesale Prices which are present in your inventory.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        {
                            proddata?.map(prod => (
                                <div key={prod?.id} className=" p-2">
                                    <div className={`${prod.quantity < 10 ? `bg-red-300` : `bg-gray-300`} p-3 rounded-lg space-y-2`}>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">WholeSaler Name: {prod.users.full_name}</h2>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Product Name: {prod.products.name}</h2>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Product Price: ₹{prod.price}</h2>
                                        <p className="leading-relaxed text-base">Remaining Quantity: {prod.quantity}</p>
                                        <div className='flex'>
                                            <input min="0" defaultValue={0} type='number' value={addquantity[prod.id] || 0} onChange={(e) => { handleAddQuantity(prod?.id, parseInt(e.target.value)) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                            <button className='flex bg-[#2ae656]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => updateQuantity(Number(prod?.quantity) + Number(addquantity[prod?.id]), prod?.id)}>Add Quantity </button>
                                        </div>
                                        <div className='flex'>
                                            <input min="0" defaultValue={0} name={prod?.name} type='number' value={subtractedquantity[prod.id] || 0} onChange={(e) => { handleSubQuantity(prod?.id, parseInt(e.target.value)) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                            <button className='flex bg-[#e1372b]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => updateQuantity(Number(prod?.quantity) - Number(subtractedquantity[prod?.id]), prod?.id)}>Subtract Quantity </button>
                                        </div>
                                        <p className="leading-relaxed text-base">Enter the price below to change</p>
                                        <div className='flex'>
                                            <input key={prod.id} name={prod?.name} type='number' value={price[prod.id] || 0} onChange={(e) => { handlePriceChange(prod?.id, parseInt(e.target.value)) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                            <button className='flex bg-[#f9ff45]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => alert('price changed')}>Change Price </button>
                                        </div>
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

export default WholeSalePrice