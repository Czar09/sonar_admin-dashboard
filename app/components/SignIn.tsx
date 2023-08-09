"use client";
import React, { useState, useEffect } from 'react'

+

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type Props = {
}

function SignIn({ }: Props) {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		password: '',
	});

	const { name, email, phoneNumber, password } = formData;
	const supabaseClient = useSupabaseClient();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const router = useRouter();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { data, error } = await supabaseClient.auth.signInWithPassword(
			{
				email: formData.email,
				password: formData.password,
			}
		);
		if (!error) {
			toast.success('You are logged in');
			router.push('/admin');
		}
		else {
			toast.error('Invalid credentials');
		}
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-1 h-screen w-full'>
			<div className='bg-blue-400 flex flex-col justify-center'>
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<form className='max-w-[400px] w-full mx-auto rounded-lg space-y-4  p-8 px-8' onSubmit={onSubmit}>
					<h2 className='text-5xl uppercase dark:text-white font-extrabold text-center mb-10'>Login	</h2>

					<div className='flex flex-col container text-black py-2'>
						<input className=' rounded-lg  focus:border-red-500' id="email"
							type="email"
							name='email'
							required={true}
							value={email}
							onChange={onChange} />
							<label>Your Name</label>
							<i></i>
					</div>

					<div className='flex flex-col container text-black py-2'>
						
						<input className='rounded-lg  focus:border-blue-500' id="password"
							type="password"
							minLength={6}
							name='password'
							value={password}
							required={true}
							onChange={onChange}
							maxLength={10} />
							<label className='font-bold text-lg'>Password</label>
							<i></i>
					</div>
					<button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg' type='submit'>SignIn</button>
					<div className='flex items-center justify-center text-gray-400 font-semibold py-2'>
						<Link href='/' className='items-center text-red-500'>Cancel</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignIn