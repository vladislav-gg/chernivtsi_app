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
							{/* <input
								className="text-black font-semibold py-3 px-2 w-56 border-b placeholder-gray-900 border-gray-500 focus:outline-none bg-transparent placeholder-opacity-50"
								placeholder="Name"
								type="text"
								required
							></input> */}
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
							{/* <a
								className="mr-3"
								href="https://www.instagram.com/dramtheater_cv/"
							>
								<svg
									className="fill-current text-gray-800"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
								</svg>
							</a>
							<a href="https://www.facebook.com/dramtheater">
								<svg
									className="fill-current text-gray-800"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
								</svg>
							</a> */}
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
