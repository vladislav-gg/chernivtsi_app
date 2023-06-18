import React from "react";

export default function Button({ onClick, text='Buy tickets', ...rest }) {
	return (
			<button
				type="submit"
				onClick={onClick}
				{...rest}
				className="text-gray-900  px-9 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 text-lg font-sans"
			>
				{text}
			</button>
	);
}
