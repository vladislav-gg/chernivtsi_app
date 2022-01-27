import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image';
import PreviewPage from '../pages/checkout';
import HeroButton from './HeroButton';


export default function Hero() {
	const [sliderRef] = useKeenSlider({ loop: true })


    return (
			<div ref={sliderRef} className="keen-slider">
				<div className="keen-slider__slide relative w-full h-[55rem] ">
					<div className="w-full h-full bg-white absolute z-0">
						<div className='w-full h-[55rem] overflow-hidden relative '>
							<Image
							className="w-full h-full"
							src="/images/giselle2.jpg"
							alt="show"
							priority={true}
							objectFit='cover'
							layout='fill'
						/>
						</div>
						
					</div>
					<div className='w-full h-[55rem] bg-gradient-to-t from-black to-transparent opacity-60'></div>
						<div className='absolute left-10 md:left-44 bottom-40 text-white opacity-90'>
							<div>
							<a href='shows/nutckracker'>
								<h3 className="font-serif font-semibold text-7xl py-5 px-7">
									Giselle
								</h3>
								<h4 className="text-2xl font-sans mb-2 px-7 italic">
									1 March–28 May 2022
								</h4>
								<h4 className="text-2xl font-sans px-7">
									The performance lasts about 3 hours, including two intervals.
								</h4>
								<h4 className="text-2xl font-sans px-7 mt-1">
									Tickets price: £40-£120
								</h4>
								<form action="/api/checkout_sessions" method="POST">
									<HeroButton/>
								</form>
							</a>
							</div>
						</div>
				</div>
				<div className="keen-slider__slide relative w-full h-[55rem]">
					<div className="w-full h-full bg-white absolute z-0">
						<Image
							className=""
							src="/images/swan_lake.jpg"
							alt="show"
							priority={true}
							layout="fill"
							objectFit='cover'

						/>
					</div>
					{/* WHITE DIV */}
					{/* <div className="hidden w-[20rem] h-[22rem]  ml-16 mt-12 md:w-[32rem] md:h-[20rem] bg-white absolute z-10 md:mt-40 md:ml-64 ">
						<h3 className="font-serif font-semibold text-5xl py-5 px-7">
							Swan Lake
						</h3>
						<h4 className="text-lg font-sans text-gray-400 mb-2 px-7 italic">
							1 March–28 May 2022
						</h4>
						<h4 className="text-lg font-sans px-7">
							The performance lasts about 3 hours, including two intervals.
						</h4>
						<h4 className="text-lg font-sans px-7 mt-1">
							Tickets price: £40-£120
						</h4>
						<button
							type="button"
							className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 mt-7 px-7 ml-7 text-lg font-sans"
						>
							Buy tickets
						</button>
					</div> */}
					{/* WHITE DIV ENDS */}
					<div className='w-full h-[55rem] bg-gradient-to-t from-black to-transparent opacity-60'></div>
					<div className='absolute left-10 md:left-44 bottom-40 text-white opacity-90'>
						<div>
							<a href='shows/nutckracker'>

								<h3 className="font-serif font-semibold text-7xl py-5 px-7">
									Swan Lake
								</h3>
								<h4 className="text-2xl font-sans mb-2 px-7 italic">
									1 March–28 May 2022
								</h4>
								<h4 className="text-2xl font-sans px-7">
									The performance lasts about 3 hours, including two intervals.
								</h4>
								<h4 className="text-2xl font-sans px-7 mt-1">
									Tickets price: £40-£120
								</h4>
								<form action="/api/checkout_sessions" method="POST">
									<HeroButton/>
								</form>
							</a>
						</div>
					</div>
				</div>
				<div className="keen-slider__slide relative w-full h-[55rem]">
					<div className="w-full h-full bg-white absolute z-0">
						<Image
							className=""
							src="/images/the_nutcracker7.jpg"
							alt="show"
							priority={true}
							layout="fill"
							objectFit='cover'
						/>
					</div>
					{/* <div className="w-[20rem] h-[22rem] ml-16 mt-12 md:w-[32rem] md:h-[20rem] bg-white absolute z-10 md:mt-40 md:ml-64 ">
						<h3 className="font-serif font-semibold text-5xl py-5 px-7">
							The Nutcracker
						</h3>
						<h4 className="text-lg font-sans text-gray-400 mb-2 px-7 italic">
							1 March–28 May 2022
						</h4>
						<h4 className="text-lg font-sans px-7">
							The performance lasts about 3 hours, including two intervals.
						</h4>
						<h4 className="text-lg font-sans px-7 mt-1">
							Tickets price: £40-£120
						</h4>
						<button
							type="button"
							className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 mt-7 px-7 ml-7 text-lg font-sans"
						>
							Buy tickets
						</button>
					</div> */}
					<div className='w-full h-[55rem] bg-gradient-to-t from-black to-transparent opacity-60'></div>
						<div className='absolute left-10 md:left-44 bottom-40 text-white opacity-90'>
							<div>
							<a href='shows/nutckracker'>
								<h3 className="font-serif font-semibold text-7xl py-5 px-7">
									The Nutcracker

								</h3>
								<h4 className="text-2xl font-sans mb-2 px-7 italic">
									1 March–28 May 2022
								</h4>
								<h4 className="text-2xl font-sans px-7">
									The performance lasts about 3 hours, including two intervals.
								</h4>
								<h4 className="text-2xl font-sans px-7 mt-1">
									Tickets price: £40-£120
								</h4>
								<form action="/api/checkout_sessions" method="POST">
									<HeroButton/>
								</form>
							</a>
							</div>
						</div>
				</div>
				
			</div>
		);
}
