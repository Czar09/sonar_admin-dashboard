import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'

interface ErrorPageProps {
    message?: string;
  }

const ErrorPage: React.FC<ErrorPageProps> = ({message}) => {
  return (
    <div className='px-8 md:px-4'>
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='flex justify-center items-center gap-1'>
                <i className='text-5xl md:text-lg text-slate-500'><BiErrorCircle /></i>
                <small className='text-slate-500 text-md'>{message}</small>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage