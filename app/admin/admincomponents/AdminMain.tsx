import React from 'react'
import {MdNotifications} from 'react-icons/md'
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineOrderedList} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import {GiExpense} from 'react-icons/gi'
import {VscFeedback} from 'react-icons/vsc'

const AdminMain = () => {
  return (
    <>
    <div className='flex items-center justify-around md:mt-2 py-2 px-2 '>
        <div className='lg:px-14 w-full md:px-10 px-1 '>
            <button className='w-full border border-[#24204B] md:py-2 py-1 rounded-full'>AddProducts</button>
        </div>
        <div className='lg:px-14 md:w-[15%] flex gap-3 '>
            <button className='w-full  py-2 rounded-full text-3xl'><MdNotifications /></button>
            <button className='w-full   py-2 rounded-full text-3xl'><RxAvatar /></button>
        </div>
    </div>
    <section className="text-gray-600 body-font ">
    <div className="container px-5 py-6 mx-auto">
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      <div className="">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
              <i className='text-white'><AiOutlineOrderedList /></i>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Total Orders Placed</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-xs">Here are the total numbers of order you have recived.</p>
            <h2 className='text-black font-semibold text-3xl mt-3'>12,000</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
              <i className='text-white'><BiUserCheck /></i>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Total new users joined</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-xs">Here are the total numbers of users which shows intrests.</p>
            <h2 className='text-black font-semibold text-3xl mt-3'>2000</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
              <i className='text-white'><VscFeedback /></i>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Feedbacks from the users</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-xs">Here are the total numbers of feedbacks you have recived from the user.</p>
            <h2 className='text-black font-semibold text-3xl mt-3'>12,000</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500  flex-shrink-0">
              <i className='text-white'><GiExpense /></i>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Total Income & Expense</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-xs">Here is the total income till now.</p>
            <div className='flex justify-between'>
              <div>
            <h2 className='text-black font-semibold text-2xl md:text-3xl mt-3'>₹12,000 </h2>
              <small className='text-xs'>(income)</small>
              </div>
              <div>
            <h2 className='text-black font-semibold text-2xl md:text-3xl mt-3'>₹12,000</h2>
              <small className='text-xs'>(expense)</small>
              </div>
            </div>
          </div>
    </div>
  </div>
    </div>
  </div>
</section>
</>
  )
}

export default AdminMain