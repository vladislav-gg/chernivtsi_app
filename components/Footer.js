import React from "react";
import { useRef, useState } from 'react';

export default function Footer() {
	  // 1. Create a reference to the input so we can fetch/clear it's value.
	  const inputEl = useRef(null);
	  // 2. Hold a message in state to handle the response from our API.
	  const [message, setMessage] = useState('Subscribe to our newsletter');
	
	  const subscribe = async (e) => {
		e.preventDefault();
	
		// 3. Send a request to our API with the user's email address.
		const res = await fetch('/api/subscribe', {
		  body: JSON.stringify({
			email: inputEl.current.value
		  }),
		  headers: {
			'Content-Type': 'application/json'
		  },
		  method: 'POST'
		});
	
		const { error } = await res.json();
	
		if (error) {
		  // 4. If there was an error, update the message in state.
		  setMessage(error);
	
		  return;
		}
		// 5. Clear the input value and show a success message.
		inputEl.current.value = '';
		setMessage('Success! 🎉 You are now subscribed to the newsletter.');
	  };
	
	return (
		<div>
			<footer className='bg-[#fff] h-[40rem]'>
				<div className="w-full flex flex-col md:items-center mt-56">
					<form onSubmit={subscribe} className="my-form  font-sans text-black font-semibold w-full max-w-md mx-auto flex flex-col">
						<label htmlFor='email-input' className="sm:ml-10 md:ml-0 text-4xl flex justify-center">
							{message}
						</label>
						<div className="mt-5 border-none mb-5 flex justify-center">
							
							<input
								className="text-black placeholder-gray-900 font-semibold py-3 px-2 w-80 border-b  border-gray-500 ml-3 focus:outline-none bg-transparent placeholder-opacity-50"
								placeholder="Email"
								type="email"
								required
								ref={inputEl}
							></input>
						</div>
						<div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0 justify-center">
							<button
								type="submit"
								className="text-black font-normal text-lg px-10 py-2 border-2 border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700"
							>
								Sign up
							</button>
						</div>
					</form>
					<div className="flex flex-col  md:flex-row  md:max-w-6xl md:mx-auto md:space-x-16 mt-40 ml-10">
						<p className="font-sans text-black  text-lg">
							<span className='font-semibold'>Phone:</span> +380 372 522 628
						</p>
						<p className="font-sans text-black  text-lg mt-5 md:mt-0">
							<p className='font-semibold'>Address:</p> 
							<p>Teatral'na Square, 1, Chernivtsi,</p> 
							<p>Chernivtsi region,Ukraine, 58000</p>
						</p>
						<p className="font-sans text-black  text-lg mt-5  md:mt-0">
							<span className='font-semibold'>Email:</span> dramteatr@i.ua
						</p>
						<div className="flex flex-row space-x-16 font-semibold mt-5 md:mt-0">
							<dvi className='text-lg '>
								<a  href='https://www.instagram.com/dramtheater_cv/'>Instagram</a>
							</dvi>
							<div className='text-lg '>
								<a  href='https://www.facebook.com/dramtheater'>Facebook</a>
							</div>
							
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
