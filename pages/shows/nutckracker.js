import React from 'react'
import Footer from '../../components/Footer';

export default function nutckracker() {
    return (
			<div className="w-full h-full">
				<div className="bg-white">
					<nav className="flex items-center justify-between w-full max-w-7xl p-8 mx-auto my-0 text-gray-900 text-[18px]">
						<div>
							<a href="/" id="logo" className="text-gray-900 font-semibold">
								Chernivtsi National Theatre{" "}
							</a>
						</div>
						<div>
							<button
								type="button"
								className="block text-gray-900 md:hidden mobile-button"
							>
								<svg
									className="fill-current"
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
								>
									<path
										d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
										fill="#1040e2"
									/>
									<path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
								</svg>
							</button>
						</div>
						<div className="hidden md:flex flex-col md:flex-row items-start md:items-center space-x-9">
							<a href="/events" className="text-gray-900">
								Tickets and Events
							</a>
							<a href="/about" className="text-gray-900">
								About
							</a>
							<a href="/news" className="text-gray-900">
								News
							</a>
							<a href="/" className="text-gray-900">
								Sign in
							</a>
						</div>
						<div className="hidden flex flex-col items-start">
							<a href="/" className="text-gray-900">
								Tickets and Events
							</a>
							<a href="/" className="text-gray-900">
								About
							</a>
							<a href="/" className="text-gray-900">
								News
							</a>
							<a href="/" className="text-gray-900">
								Sign in
							</a>
						</div>
					</nav>
				</div>
				<div className="news-container ">
					<div className="relative w-full h-[1000px]">
						<div className="w-full h-full bg-white absolute transition-all ease-in-out duration-1000 transform translate-x-0 slide z-0">
							<img
								className="object-cover h-full w-full"
								src="/images/nutcracker3.jpeg"
								alt="show"
							/>
						</div>
					</div>
					<div className="flex max-w-7xl justify-between mt-16 mx-auto">
						<div className="left-container">
							<h2 className="text-gray-900 text-6xl font-medium font-serif">
								The Nutcracker
							</h2>
							<p className="font-sans text-xl text-gray-900 mt-12 max-w-3xl">
								The Nutcracker has long been one of the most delightful ways to
								discover the enchantment of ballet and makes for a sparkling
								festive treat for the whole family. Tchaikovsky’s much-loved
								music is matched to a story of magic on Christmas Eve, and the
								journey of Clara and her Nutcracker to the Land of Sweets brings
								with it some of the most familiar of all ballet moments. Peter
								Wright’s gorgeous production for The Royal Ballet keeps true to
								the spirit of this Russian ballet classic, and the many solo
								roles and ensembles show the world-class skills of the Company
								at its best.
							</p>
							<div className="cast  text-gray-900 mt-10">
								<div className='text-xl flex flex-row mt-5'>
                                    <div className='font-semibold'>
									    <p>Actors: </p>
                                    </div>
                                    <div className='flex flex-col ml-8 font-sans italic'>
                                        <a className='underline ' href='https://www.behance.net/natpat?tracking_source=search_projects_recommended%7Cevc%20dsgn'><span className=''>Natalia Patemkina</span></a>
                                        <span className=''>Vlasta Tarasova</span>
                                        <span className=''>Aleksandr Malkov</span>
                                        <span className=''>Irina Chizhova</span>
                                    </div>
								</div>
								<div className='text-xl flex flex-row mt-5'>
                                    <div className='font-semibold'>
									    <p>Music: </p>
                                    </div>
                                    <div className='flex flex-col ml-8 font-sans italic'>
                                        <span className=''>Pyotr Il’yich Tchaikovsky</span>
                                    </div>
								</div>
								<div className='text-xl flex flex-row mt-5'>
                                    <div className='font-semibold'>
									    <p>Scenario: </p>
                                    </div>
                                    <div className='flex flex-col ml-8 font-sans italic'>
                                        <span className=''>Vladislav Gutenberg</span>
                                    </div>
								</div>
								<div className='text-xl flex flex-row mt-5'>
                                    <div className='font-semibold'>
									    <p>Designer: </p>
                                    </div>
                                    <div className='flex flex-col ml-8 font-sans italic'>
                                        <span className=''>Viktoria Didenko</span>
                                    </div>
								</div>
							
							</div>
						</div>
                        <div>

                        </div>
                        <div className='flex flex-col items-start '>
                            <div className='font-sans text-gray-900 mb-5 max-w-lg flex flex-col'>
                                <p className='text-2xl'>5 October - 31 December</p>
                                <p className='text-xl mt-3 '>16:00 / 19:00</p>
                            </div>    
                            <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0 justify-center">
                             <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Buy tickets</button>
                            </div>
                        </div>
					</div>
				</div>
                <Footer />
			</div>
		);
}
