import React from 'react'

interface ErrorPageProps {
    message?: string;
  }

const ErrorPage: React.FC<ErrorPageProps> = ({message}) => {
  return (
    <div className=''>
        <div className='flex items-center justify-center h-[100vh]'>
            <div>
                <small className='text-slate-500 text-md'>{message}</small>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage