import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin priviliges and overwrites RLS policies!
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || ''
);

// const upsertProductRecord = async (product: Stripe.Product) => {
//   const productData: Product = {
//     id: product.id,
//     active: product.active,
//     name: product.name,
//     description: product.description ?? undefined,
//     image: product.images?.[0] ?? null,
//     metadata: product.metadata
//   };

//   const { error } = await supabaseAdmin.from('products').upsert([productData]);
//   if (error) throw error;
//   console.log(`Product inserted/updated: ${product.id}`);
// };

// const upsertPriceRecord = async (price: Stripe.Price) => {
//   const priceData: Price = {
//     id: price.id,
//     product_id: typeof price.product === 'string' ? price.product : '',
//     active: price.active,
//     currency: price.currency,
//     description: price.nickname ?? undefined,
//     type: price.type,
//     unit_amount: price.unit_amount ?? undefined,
//     interval: price.recurring?.interval,
//     interval_count: price.recurring?.interval_count,
//     trial_period_days: price.recurring?.trial_period_days,
//     metadata: price.metadata
//   };

//   const { error } = await supabaseAdmin.from('prices').upsert([priceData]);
//   if (error) throw error;
//   console.log(`Price inserted/updated: ${price.id}`);
// };


const getUsers = async () => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
  if (error || !data) {
    throw error || new Error('No user found');
  }
  return data;
};
const getSellers = async () => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('role', 'seller')
  if (error || !data) {
    throw error || new Error('No user found');
  }
  return data;
}
const getWholeSellers = async () => {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('role', 'wholesaler')
  if (error || !data) {
    throw error || new Error('No user found');
  }
  return data;
}

const getQuantity = async (id: number) => {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*')
    .eq('id', id)
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getOrders = async () => {
  const { data, error } = await supabaseAdmin
    .from('orders')
    .select(`
      *,
      users (
        id,
        email,
        full_name,
        phone_number
        )
    `)
    .order('order_date', { ascending: false })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getWholeSaleOrders = async () => {
  const { data, error } = await supabaseAdmin
    .from('wholesaleorders_duplicate')
    .select(`
      *,
      seller:users (
        id,
        email,
        full_name,
        phone_number
      ),
      products(
        id, 
        name
      ),
      wholesale_products_price(
        wholesaler_id,
        quantity,
        price,
       wholesaler:users(
          full_name, email, phone_number
        )
      )
    `)
    .order('order_date', { ascending: false })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getSellerOrders = async () => {
  const { data, error } = await supabaseAdmin
    .from('sellerorders_duplicate')
    .select(`
      *,
      buyer:users (
        id,
        email,
        full_name,
        phone_number
      ),
      products(
        id, 
        name
      ),
      seller_products_price(
        seller_id,
        quantity,
        price,
       seller:users(
          full_name, email, phone_number
        )
      )
    `)
    .order('order_date', { ascending: false })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getWholeSaleOrdersSpecific = async (id: string) => {

  const{data, error} = await supabaseAdmin
  .from('wholesale_order')
  .select('*')
  .eq('wholesaler_id', id)
  if (error || !data) {
    throw error || new Error('No user found');
  }
  return data;
}

const getWholeSalePrice = async () => {
  const { data, error } = await supabaseAdmin
    .from('wholesale_products_price')
    .select(`*,
  users(
    full_name, email, phone_number
  ),
  products(
    id,
    name
  )
  `)
    .order('wholesaler_id', { ascending: true })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getSellerPrice = async () => {
  const { data, error } = await supabaseAdmin
    .from('seller_products_price')
    .select(`*,
  users(
    full_name, email, phone_number
  ),
  products(
    id,
    name
  )
  `)
    .order('product_id', { ascending: true })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}

const getProducts = async () => {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('*')
    .order('quantity', { ascending: true })
  if (error || !data) {
    throw error || new Error('No product found');
  }
  return data;
}
const addTransactionDetails = async (
  user_id: string,
  itinerary_id: string,
  order_id: string,
  amount: number, //in paise
  status: string,
  payment_id?: string
) => {
  const { error } = await supabaseAdmin
    .from('transactions')
    .insert({
      user_id: user_id,
      itinerary_id: itinerary_id,
      order_id: order_id,
      amount: amount,
      status: status,
      payment_id: payment_id,
    })
  if (error) throw error;
  console.log(`Transaction inserted: ${user_id}`);
  return;
}

const addSubscription = async (
  user_id: string,
  itinerary_id: string,
  status: string,
  subscription_createdtimestamp: string,
  subscription_startDate: string,
  subscription_endDueDate: string,
  subscription_endDate: string,
  isInstrument?: boolean,
  isRenewal?: boolean
) => {
  const { error } = await supabaseAdmin
    .from('subscriptions')
    .insert({
      user_id: user_id,
      itineraryId: itinerary_id,
      status: status,
      subscription_createdtimestamp: subscription_createdtimestamp,
    })
  if (error) throw error;
  console.log(`Subscription inserted: ${user_id}`);
  return;
}

export {
  // upsertProductRecord,
  addSubscription,
  addTransactionDetails,
  getUsers,
  getQuantity,
  getOrders,
  getProducts,
  getSellers,
  getWholeSellers,
  getWholeSaleOrders,
  getSellerOrders,
  getWholeSalePrice,
  getSellerPrice,
  getWholeSaleOrdersSpecific
};
