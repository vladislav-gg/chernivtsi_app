import React from "react";
import Button from "./Button";

export default function Events() {
	return (
		<div>
			<div className="events-section w-full h-full px-2 md:px-0">
				<div className="flex items-center justify-center md:justify-start max-w-7xl mx-auto mt-10">
					<h1 className="text-gray-900 text-7xl font-serif font-medium">
						Next events
					</h1>
				</div>
				<a href="/shows/nutckracker">
					<div className="event_container flex flex-col md:flex-row md:justify-between mt-10 w-full md:max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8 text-gray-900 hover:text-gray-500 hover:transition duration-200">
						<div className="event-date text-md  flex flex-row justify-start items-center">
							<span className="ml-5 font-serif font-bold">Th</span>
							<span className="ml-5 font-serif font-bold">23.09</span>
							<span className="ml-5 font-serif font-bold">19:00</span>
						</div>
						<div className="flex flex-col justify-center ml-5 mt-3 md:mt-0 md:ml-0">
							<h2 className="text-4xl font-serif font-medium ">Swan Lake</h2>
							<h4 className="text-lg text-gray-500 font-sans italic mt-4 md:mt-0">
								Commedia per musica in four acts by Wolfgang Amadeus Mozart
							</h4>
						</div>
						<div className="flex md:items-center ml-5 mt-5 md:ml-0 md:mt-0">
							<Button />
						</div>
					</div>
				</a>
				<div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8 text-gray-900 hover:text-gray-500 hover:transition duration-200">
					<div className="event-date text-md  flex flex-row justify-start items-center">
						<span className="ml-5 font-serif font-bold">Fr</span>
						<span className="ml-5 font-serif font-bold">24.09</span>
						<span className="ml-5 font-serif font-bold">17:00</span>
					</div>
					<div className="flex flex-col justify-center ml-5 mt-3 md:mt-0 md:ml-0">
						<a href="/shows/nutckracker">
							<h2 className="text-4xl  font-serif font-medium">
								The Nutcracker
							</h2>
							<h4 className="text-lg text-gray-500 font-sans italic mt-4 md:mt-0">
								Commedia per musica in four acts by Wolfgang Amadeus Mozart
							</h4>
						</a>
					</div>
					<div className="flex md:items-center ml-5 mt-5 md:ml-0 md:mt-0">
						<Button />
					</div>
				</div>
				<a href="/shows/nutckracker">
					<div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8 hover:text-gray-500 text-gray-900 hover:text-gray-500 hover:transition duration-200">
						<div className="event-date text-md  flex flex-row justify-start items-center">
							<span className="ml-5 font-serif font-bold">Fr</span>
							<span className="ml-5 font-serif font-bold">24.09</span>
							<span className="ml-5 font-serif font-bold">20:00</span>
						</div>
						<div className="flex flex-col justify-center ml-5 mt-3 md:mt-0 md:ml-0">
							<h2 className="text-4xl font-serif font-medium">
								Romeo and Juliet
							</h2>
							<h4 className="text-lg text-gray-500 font-sans italic mt-4 md:mt-0">
								Commedia per musica in four acts by Wolfgang Amadeus Mozart
							</h4>
						</div>
						<div className="flex md:items-center ml-5 mt-5 md:ml-0 md:mt-0">
							<Button />
						</div>
					</div>
				</a>
				<a href="/shows/nutckracker">
					<div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8 text-gray-900 hover:text-gray-500 hover:transition duration-200">
						<div className="event-date text-md  flex flex-row justify-start items-center">
							<span className="ml-5 font-serif font-bold">Sat</span>
							<span className="ml-5 font-serif font-bold">25.09</span>
							<span className="ml-5 font-serif font-bold">20:00</span>
						</div>
						<div className="flex flex-col justify-center ml-5 mt-3 md:mt-0 md:ml-0">
							<h2 className="text-4xl  font-serif font-medium">
								The Magic Flute
							</h2>
							<h4 className="text-lg text-gray-500 font-sans italic max-w-[600px] mt-4 md:mt-0">
								David McVicar’s spectacular production of Mozart’s comic opera.
							</h4>
						</div>
						<div className="flex md:items-center ml-5 mt-5 md:ml-0 md:mt-0">
							<Button />
						</div>
					</div>
				</a>
				<div className="more-events w-full flex flex-row justify-center items-center align-middle mt-10 ">
					<a
						className="mr-5 font-serif font-semibold text-4xl border-b border-gray-500"
						href="/events"
					>
						More events{" "}
					</a>
					<a href="/events">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 flex-no-shrink fill-current mt-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
