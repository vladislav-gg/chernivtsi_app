import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function paymentSuccess() {
	return (
		<div className="w-full h-full">
			<Navigation />
			<div className="flex justify-center items-center max-w-5xl m-auto my-36">
				<h1 className="font-sans text-6xl text-gray-900 ">
					Unfortunately, something went wrong. Please contact us at @@@@@
				</h1>
			</div>

			<Footer />
		</div>
	);
}
