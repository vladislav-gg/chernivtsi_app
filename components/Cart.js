import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	selectCount,
} from "../src/features/counter/counterSlice";
import Button from "./Button";

export default function Cart() {
	const [cartToggle, setCartToggle] = useState(false);
	const item = useSelector(selectCount);

	// REDUX HOKS
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	const handlePopUp = () => {
		setCartToggle(!cartToggle);
	};

	return (
		<div>
			<button
				class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full  focus:text-gray-500 transition duration-150 ease-in-out outline focus:outline-black "
				aria-label="Cart"
				onClick={handlePopUp}
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
				</svg>
				<span class="absolute inset-0 object-right-top -mr-6">
					<div class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-gray-500 text-white">
						{item.quantity}
					</div>
				</span>
			</button>
			<div
				className={`bg-white outline w-72 pb-5 z-50 absolute shadow-lg ${
					cartToggle ? "block" : "hidden"
				}`}
			>
				{item.quantity === 0 ? (
					<h1 className="ml-14 pt-3">Your cart is empty</h1>
				) : (
					<div className="mt-10 px-6">
						<div className="image-wrapper w-52 ">
							<img src="/images/swan_lake.webp"></img>
						</div>
						<div className="text-left mt-3 mb-5 text-gray-900 text-xlt-">
							<p>Show name: {item.name}</p>
							<p>
								Quantity:{" "}
								<button
									className="ml-1"
									onClick={() => {
										if (item.quantity <= 0) {
											return false;
										} else {
											dispatch(decrement());
										}
									}}
								>
									{" "}
									-{" "}
								</button>{" "}
								{item.quantity}{" "}
								<button onClick={() => dispatch(increment())}> + </button>
							</p>
							<p className="">Total: £{item.price * item.quantity}</p>
						</div>
						<Button />
					</div>
				)}
			</div>
		</div>
	);
}
