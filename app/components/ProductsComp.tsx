'use client'
import { getProducts, supabaseAdmin } from '@/utils/supabase-admin';
import { useUser } from '@/utils/useUser';
import React, { useEffect } from 'react'

const ProductsComp = () => {
    const [proddata, setProddata] = React.useState<{ [x: string]: any }[] | null>(null);
    const [addquantity, setAddquantity] = React.useState<number>(0);
    const [subtractedquantity, setSubtractedquantity] = React.useState<number>(0);
    const { userDetails, isLoading } = useUser();
    const runFun = async () => {
        const order = async () => await getProducts().then((data) => {
            setProddata(data);
        });
        order();
    }

    const handleUpdate = async (e: any, id: string) => {
        setAddquantity(e.target.value);
        console.log(e.target.value, id);
    }
    const handleUpdate2 = async (e: any, id: string) => {
        setSubtractedquantity(e.target.value);
        console.log(e.target.value, id);
    }
    const updateQuantity = async (quantity: number, id: string) => {
        const { error } = await supabaseAdmin
            .from('products')
            .update({ quantity: quantity })
            .eq('id', id);

        setAddquantity(0);
        setSubtractedquantity(0);
    }
    const channelC = supabaseAdmin
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'products',
            },
            (payload) => {
                console.log(payload)
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
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Products</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="py-2 w-full leading-relaxed text-gray-500">Here are the products which are present in your inventory.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                        {
                            proddata?.map(prod => (
                                <div key={prod?.id} className=" p-2">
                                    <div className={`${prod.quantity < 10 ? `bg-red-300` : `bg-gray-300`} p-3 rounded-lg space-y-2`}>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{prod.name} - <small>₹{prod.price}</small></h2>
                                        <p className="leading-relaxed text-base">Remaining Quantity: {prod.quantity}</p>
                                        {userDetails?.role == 'admin' || userDetails?.role == 'superAdmin' ?
                                            <>
                                                <div className='flex'>
                                                    <input type='number' value={addquantity} onChange={(e) => { handleUpdate(e, prod?.id) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                                    <button className='flex bg-[#2ae656]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => updateQuantity(Number(prod?.quantity) + Number(addquantity), prod?.id)}>Add Quantity </button>
                                                </div>
                                                <div className='flex'>
                                                    <input name={prod?.name} type='number' value={subtractedquantity} onChange={(e) => { handleUpdate2(e, prod?.id) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                                    <button className='flex bg-[#e1372b]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => updateQuantity(Number(prod?.quantity) - Number(subtractedquantity), prod?.id)}>Subtract Quantity </button>
                                                </div>
                                            </> : 
                                            null}
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