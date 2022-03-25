import React from "react";

export default function News() {
	return (
		<div>
			<section className="max-w-[85%] mx-auto mt-28 h-full relative">
				<h1 className="font-serif text-7xl font-medium ">News</h1>
				<div className="flex flex-col md:flex-row w-full h-full mt-12">
					<div className="md:max-w-md">
						<div className="left-col hover:shadow-lg transition duration-200 ease-in md:p-5">
							<a href="/shows/nutckracker">
								<img src="/images/the_nutckracker.jpg"></img>
								<div className="flex flex-col pt-5">
									<p className="text-xl text-gray-500 mt-1">
										20 September 2021
									</p>
									<h3 className="text-2xl text-gray-900 mt-5">
										New ballet in our theatre
									</h3>
									<a href="/shows/nutckracker">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-10 w-10 flex-no-shrink fill-current mt-5"
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
							</a>
						</div>
						<div className="left-col mt-5 left-col hover:shadow-lg transition duration-200 ease-in md:p-5">
							<a href="/shows/nutckracker">
								<img src="/images/spyashaya_krasavica.webp"></img>
								<div className="flex flex-col pt-5">
									<p className="text-xl text-gray-500 mt-1">
										20 September 2021
									</p>
									<h3 className="text-2xl text-gray-900 mt-5">
										New ballet in our theatre
									</h3>
									<a href="/shows/nutckracker">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-10 w-10 flex-no-shrink fill-current mt-5"
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
							</a>
						</div>
					</div>
					<div className="right-col md:ml-10 h-full w-full mt-16 md:mt-0 hover:shadow-lg transition duration-200 ease-in md:p-5">
						<a href="/shows/nutckracker">
							<img src="/images/my_pic.webp"></img>
							<div className="flex flex-col pt-5">
								<p className="text-xl text-gray-500 mt-1">20 September 2021</p>
								<h3 className="text-2xl text-gray-900 mt-5">
									New ballet in our theatre
								</h3>
								<a href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 flex-no-shrink fill-current mt-5"
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
						</a>
					</div>
				</div>
				<div className="more-events w-full flex flex-row justify-center items-center align-middle mt-10 ">
					<a
						className="mr-5 font-serif font-semibold text-4xl border-b border-gray-500"
						href="/news"
					>
						More news{" "}
					</a>
					<a href="/">
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
				<div className="border-b border-gray-600 mt-16"></div>
			</section>
		</div>
	);
}
