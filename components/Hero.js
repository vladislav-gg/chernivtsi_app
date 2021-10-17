import React from 'react'

export default function Hero() {
    return (
			<div>
				<div className="relative w-full h-[55rem]">
					<div className="w-full h-full bg-white absolute z-0">
						<img
							className="object-cover h-full w-full"
							src="/images/swan_lake.jpg"
							alt="show"
						/>
					</div>
					<div className="w-[20rem] h-[22rem] ml-16 mt-12 md:w-[32rem] md:h-[20rem] bg-white absolute z-10 md:mt-40 md:ml-64 ">
						<h3 className="font-serif font-semibold text-5xl py-5 px-7">
							Swan Lake
						</h3>
						<h4 className="text-lg font-sans text-gray-400 mb-2 px-7 italic">
							1 March–28 May 2022
						</h4>
						<h4 className="text-lg font-sans px-7">
							The performance lasts about 3 hours, including two intervals.
						</h4>
						<h4 className="text-lg font-sans px-7 mt-4">
							Tickets price: £40-£120
						</h4>
						<button
							type="button"
							className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 mt-7 px-7 ml-7 text-lg font-sans"
						>
							Buy tickets
						</button>
					</div>
				</div>
			</div>
		);
}
