import React from "react";
import PreviewPage from "../pages/checkout";

export default function Button() {
	return (
		<form action="/shows/nutckracker" method="POST">
			<button
				type="submit"
				className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 text-lg font-sans"
			>
				Buy tickets
			</button>
		</form>
	);
}
