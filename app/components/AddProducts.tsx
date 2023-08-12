import { supabaseAdmin } from '@/utils/supabase-admin';
import { useUser } from '@/utils/useUser';
import React, { useState } from 'react'


const ProductData = [
  {
    "id": 32,
    "name": "Pink Salt",
    "price": 100,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 37,
    "name": "Sama Ke Chawal",
    "price": 100,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 40,
    "name": "Mamra Badam",
    "price": 100,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 43,
    "name": "Sooji",
    "price": 100,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 44,
    "name": "Poha",
    "price": 100,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 59,
    "name": "Ghee",
    "price": 100,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 34,
    "name": "Jira",
    "price": 90,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 35,
    "name": "Saunf",
    "price": 80,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 36,
    "name": "Methi Daana",
    "price": 30,
    "quantity": 8,
    "metric": "kg"
  },
  {
    "id": 38,
    "name": "Brown Rice",
    "price": 180,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 41,
    "name": "Kashmiri Mama Badam",
    "price": 400,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 42,
    "name": "Kaju",
    "price": 350,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 45,
    "name": "Almond Gurbandi",
    "price": 250,
    "quantity": 8,
    "metric": "kg"
  },
  {
    "id": 46,
    "name": "Phool Makhana",
    "price": 95,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 47,
    "name": "Akhrot",
    "price": 350,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 54,
    "name": "Sunflower Oil",
    "price": 100,
    "quantity": 14,
    "metric": "ltr"
  },
  {
    "id": 48,
    "name": "Black Mustard Oil",
    "price": 215,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 7,
    "name": "Matar",
    "price": 100,
    "quantity": 12,
    "metric": "kg"
  },
  {
    "id": 49,
    "name": "Yellow Mustard Oil",
    "price": 315,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 50,
    "name": "Coconut Oil",
    "price": 800,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 51,
    "name": "Sesame Oil",
    "price": 600,
    "quantity": 73,
    "metric": "ltr"
  },
  {
    "id": 52,
    "name": "Almond Oil",
    "price": 300,
    "quantity": 102,
    "metric": "ltr"
  },
  {
    "id": 53,
    "name": "Walnut Oil",
    "price": 300,
    "quantity": 82,
    "metric": "ltr"
  },
  {
    "id": 55,
    "name": "Peanut Oil",
    "price": 500,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 56,
    "name": "Flax Seed Oil",
    "price": 120,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 57,
    "name": "Kalounji Oil",
    "price": 180,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 58,
    "name": "Castor Oil",
    "price": 120,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 60,
    "name": "Honey",
    "price": 150,
    "quantity": 10,
    "metric": "ltr"
  },
  {
    "id": 9,
    "name": "Kabuli Chana",
    "price": 135,
    "quantity": 9,
    "metric": "kg"
  },
  {
    "id": 2,
    "name": "Chana Daal",
    "price": 100,
    "quantity": 9,
    "metric": "kg"
  },
  {
    "id": 1,
    "name": "Arhar Daal",
    "price": 190,
    "quantity": 4,
    "metric": "kg"
  },
  {
    "id": 3,
    "name": "Moong Daal Dhuli",
    "price": 170,
    "quantity": 12,
    "metric": "kg"
  },
  {
    "id": 4,
    "name": "Masoor Daal",
    "price": 120,
    "quantity": 99,
    "metric": "kg"
  },
  {
    "id": 5,
    "name": "Masoor Daal Pink",
    "price": 120,
    "quantity": 37,
    "metric": "kg"
  },
  {
    "id": 6,
    "name": "Urad Dhuli",
    "price": 180,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 8,
    "name": "Rajma Laal/Chitra",
    "price": 240,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 10,
    "name": "Chawal Kinki",
    "price": 70,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 11,
    "name": "Urad Chhilka",
    "price": 140,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 12,
    "name": "Moong Chhilka",
    "price": 160,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 13,
    "name": "Moong Saboot",
    "price": 160,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 14,
    "name": "Urad Saboot",
    "price": 160,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 15,
    "name": "Chawal",
    "price": 95,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 16,
    "name": "Shakkar Gud Wali",
    "price": 120,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 17,
    "name": "Wheat Flour",
    "price": 45,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 18,
    "name": "Multigrain Flour",
    "price": 65,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 19,
    "name": "Chana Atta",
    "price": 120,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 20,
    "name": "Makki Atta",
    "price": 70,
    "quantity": 8,
    "metric": "kg"
  },
  {
    "id": 39,
    "name": "Bajra Atta",
    "price": 70,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 21,
    "name": "Jau Atta",
    "price": 70,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 22,
    "name": "Ragi Atta",
    "price": 130,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 23,
    "name": "Jwar Atta",
    "price": 70,
    "quantity": 5,
    "metric": "kg"
  },
  {
    "id": 24,
    "name": "Besan",
    "price": 120,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 25,
    "name": "Rice Flour",
    "price": 70,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 26,
    "name": "Red Chilly Powder",
    "price": 60,
    "quantity": 8,
    "metric": "kg"
  },
  {
    "id": 27,
    "name": "Kashmiri Chilly Powder",
    "price": 180,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 28,
    "name": "Turmeric Powder",
    "price": 45,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 29,
    "name": "Pahadi Turmeric Powder",
    "price": 80,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 30,
    "name": "Coriander Powder",
    "price": 50,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 31,
    "name": "Garam Masala Powder",
    "price": 150,
    "quantity": 10,
    "metric": "kg"
  },
  {
    "id": 33,
    "name": "Sendha Salt",
    "price": 85,
    "quantity": 10,
    "metric": "kg"
  }
]

const AddProducts = () => {

  const [formData, setFormData] = useState({
    prod_id: 32,
    price: 0,
    quantity: 0,
  });

  const { prod_id, price, quantity } = formData;
  const {userDetails} = useUser();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const addProd = async()=>{
      const {data, error} = await supabaseAdmin
      .from('wholesale_products_price')
      .insert({
        product_id: prod_id,
        wholesaler_id: userDetails?.id,
        price: price,
        quantity: quantity
      });
      if(error){
        console.log(error);
      }

      alert('Product Added Successfully');
    }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Your Product Price</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fill below form in order to add your desired product.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Choose Product</label>
                  <select className='w-full border p-3 bg-gray-100' name="prod_id" id="prod_id"  onChange={onChange}>
                    {ProductData != null ? ProductData.map((country) => (
                      <option  key={country.id} value={country.id} >{country.name}</option>
                    ))
                      : null
                    }
                  </select>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Product Quantity (in quintal only)</label>
                  <input type="number" id="quantity" name="quantity" onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Product Price per qunital</label>
                  <input type="number" id="price" name="price" onChange={onChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={addProd}>Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default AddProducts