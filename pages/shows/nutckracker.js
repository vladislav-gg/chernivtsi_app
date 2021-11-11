import React from 'react'
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';
import PreviewPage from '../checkout';

export default function nutckracker() {
    return (
			<div className="w-full h-full">
				<Navigation/>
				<div className="news-container">
				<div className="relative w-full h-[55rem]">
					<div className="w-full h-full bg-white absolute transition-all ease-in-out duration-1000 transform translate-x-0 slide z-0">
						<img
							className="object-cover h-full w-full"
							src="/images/swan_lake3.jpg"
							alt="show"
						/>
					</div>
				</div>
					<div className="flex max-w-7xl justify-between mt-16 mx-auto">
						<div className="left-container">
							<h2 className="text-gray-900 text-6xl font-medium font-serif">
								Swan Lake
							</h2>
							<p className="font-sans text-xl text-gray-900 mt-12 max-w-3xl">
							Tchaikovsky’s magical ballet tells the story of the doomed love of Prince Siegfried and Princess Odette. Prince Siegfried goes out hunting one night and chases a group of swans – one of them transforms into a young woman, Odette, who explains that she and her companions were turned into swans by the evil Baron Von Rothbart.
							The spell can only be broken if someone who has never loved before swears an oath of undying love and promises to marry her. The Prince declares his love to Odette and promises to be loyal forever.
							At a grand reception at the palace, the Prince must choose a bride – but he can think only of Odette. Suddenly a fanfare announces the arrival of two guests – it is Odette! The prince dances with her and asks for her hand in marriage.
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
                                        <span className=''>Vladislav Goian</span>
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
								<Button/>
                            </div>
                        </div>
					</div>
				</div>
                <Footer />
			</div>
		);
}
