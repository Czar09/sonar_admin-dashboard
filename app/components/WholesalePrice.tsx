'use client'
import { getProducts, getWholeSalePrice, supabaseAdmin } from '@/utils/supabase-admin';
import { useUser } from '@/utils/useUser';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


const WholeSalePrice = () => {
    const [proddata, setProddata] = React.useState<{ [x: string]: any }[] | null>(null);
    const [addquantity, setAddquantity] = React.useState<{ [productId: number]: number }>({});
    const [subtractedquantity, setSubtractedquantity] = React.useState<{ [productId: number]: number }>({});
    const [buyingquantity, setBuyingquantity] = React.useState<{ [productId: number]: number }>({});
    const [price, setPrice] = React.useState<{ [productId: number]: number }>({});
    const { isLoading, userDetails } = useUser();
    const router = useRouter();

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
    const handleBuyingQuantity = (productId: string, quantity: number) => {
        setBuyingquantity(prevBuyingQuantity => ({
            ...prevBuyingQuantity,
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
        alert("Quantity Updated Successfully with quantity of " + quantity + " for product " + proddata?.find((prod) => prod.id === id)?.products?.name);

    }

    const updatePrice = async (price: number, id: string) => {
        const { error } = await supabaseAdmin
            .from('wholesale_products_price')
            .update({ price: price })
            .eq('id', id);
        setPrice({});
        alert("Price Updated Successfully with price of ₹" + price + " for product " + proddata?.find((prod) => prod.id === id)?.products?.name);
    }
    const makeOrder = async (quantity: number, id: string, productId: number) => {
        const quantitycheck = Number(proddata?.find((prod) => prod.id === id)?.quantity);
        if (quantitycheck < quantity || quantitycheck === 0) {
            alert("You cannot buy more than the available quantity");
            return;
        }
        const { data, error } = await supabaseAdmin
            .from('wholesaleorders')
            .insert([{
                quantity: quantity,
                prod_id: productId,
                seller_id: userDetails?.id,
                order_date: Date.now(),
                status: 'pending',
                wholesale_productprice_id: id,
                amount: quantity * Number(proddata?.find((prod) => prod.id === id)?.price)
            }])
        setBuyingquantity({});
        // alert("quantity=", quantity, "id", id, "prodid=", productId, "price=", Number(proddata?.find((prod) => prod.id === id)?.price)*quantity);
        alert("Order Placed Successfully with amount of ₹" + quantity * Number(proddata?.find((prod) => prod.id === id)?.price) + " for product " + proddata?.find((prod) => prod.id === id)?.products?.name);
        updateQuantity(Number(proddata?.find((prod) => prod.id === id)?.quantity) - Number(quantity), id);
        location.reload();

    }
    const channelD = supabaseAdmin
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
                {
                    isLoading ? <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div> : (
                        <div className="">
                            <div className="w-full">
                                <div className=" w-full mb-6 lg:mb-0">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Whole Sale Prices</h1>
                                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                </div>
                                <div className='w-1/2 flex md:flex-row flex-col'>
                                    <p className="py-2 w-full leading-relaxed text-gray-500 md:text-2xl text-md">Here are the Wholesale Prices which are present in your inventory.</p>
                                    {
                                        userDetails?.role == 'admin' || userDetails?.role == 'superAdmin' || userDetails?.role == 'wholesaler' ?
                                            <button className='p-1 bg-yellow-600 text-sm text-black font-bold rounded-xl' onClick={() => router.push('/add-products-seller')}>
                                                Add Your Product Price
                                            </button> :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10">
                                {
                                    proddata?.map(prod => (
                                        <div key={prod?.id} className=" p-2">
                                            <div className={`${prod.quantity < 10 ? `bg-red-300` : `bg-gray-300`} p-3 rounded-lg space-y-2`}>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">WholeSaler Name: {prod.users.full_name}</h2>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Product Name: {prod.products.name}</h2>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Product Price: ₹{prod.price}</h2>
                                                <p className="leading-relaxed text-base">Remaining Quantity: {prod.quantity}</p>
                                                {
                                                    userDetails?.role == 'superAdmin' || userDetails?.role == 'wholesaler' ?
                                                        (
                                                            <>
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
                                                                    <input min="0" name={prod?.name} type='number' value={price[prod.id] || 0} onChange={(e) => { handlePriceChange(prod?.id, parseInt(e.target.value)) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                                                    <button className='flex bg-[#f9ff45]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => updatePrice(Number(price[prod?.id]), prod?.id)}>Change Price </button>
                                                                </div>
                                                            </>
                                                        )
                                                        :
                                                        null
                                                }
                                                {
                                                    userDetails?.role == 'admin' || userDetails?.role == 'superAdmin' || userDetails?.role == 'seller' ?
                                                        (
                                                            <>
                                                                <p className="leading-relaxed text-base font-bold">Enter how much quantity you want to buy</p>
                                                                <div className='flex'>
                                                                    <input min="0" name={prod?.name} type='number' value={buyingquantity[prod.id] || 0} onChange={(e) => { handleBuyingQuantity(prod?.id, parseInt(e.target.value)) }} required={true} className='h-8 p-2 mr-2 w-14' ></input>
                                                                    <button className='flex bg-[#4273e8]  rounded-md p-2 hover:bg-opacity-100 text-black font-bold text-xs' onClick={() => makeOrder(buyingquantity[prod?.id], prod?.id, prod?.products?.id)}>Buy Now! </button>
                                                                </div>
                                                            </>
                                                        ) :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default WholeSalePrice