import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useState } from "react";

export default function Navigation() {
	const { data: session, status } = useSession();
	const loading = status === "loading";
	const [active, setActive] = useState(false);

	// Burger menu toggle
	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div>
			<nav className="flex flex-col border-b justify-between md:h-[5rem] h-full ml-8 mr-8 md:mb-0 md:flex-row md:justify-between md:max-w-7xl md:mx-auto text-gray-900 text-xl items-center">
				<div className="">
					<a
						href="/"
						id="logo"
						className="text-gray-900 font-sans font-semibold text-xl"
					>
						Chernivtsi National Theatre{" "}
					</a>
				</div>
				<div className="mt-2 ">
					<button
						type="button"
						className="mobile-burger-menu block text-gray-900 md:hidden hover:rounded-full border-gray-700"
						onClick={handleClick}
					>
						<svg
							className="fill-current"
							width="34"
							height="34"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd"
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
					<a
						href="/events"
						className="text-gray-900 border-gray-700 border-b border-transparent hover:border-b hover:border-gray-700 font-normal text-lg"
					>
						Tickets and Events
					</a>
					<a
						href="/about"
						className="text-gray-900 border-b border-transparent hover:border-b hover:border-gray-700 font-normal text-lg"
					>
						About
					</a>
					<a
						href="/news"
						className="text-gray-900 border-b border-transparent hover:border-b hover:border-gray-700 font-normal text-lg"
					>
						News
					</a>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg> */}

					{session && (
						<div className="text-gray-900 font-normal text-lg">
							Signed in as {session.user.name} <br />
						</div>
					)}
					{!session ? (
						<>
							<button
								className="border-b border-transparent hover:border-b hover:border-gray-700 font-normal text-lg"
								onClick={() => signIn("google")}
							>
								Sign in
							</button>
						</>
					) : (
						<button
							className="border-b border-transparent hover:border-b hover:border-gray-700 font-normal text-lg"
							onClick={() => signOut()}
						>
							Sign Out
						</button>
					)}
				</div>
				{/* MOBILE NAVIGATION */}
				<div
					className={`${
						active ? "md:hidden" : "hidden"
					}  flex flex-col items-start mt-5 mb-5 text-xl `}
				>
					<a href="/events" className="text-gray-900  font-normal text-lg">
						Tickets and Events
					</a>
					<a href="/about" className="text-gray-900 font-normal text-lg">
						About
					</a>
					<a href="/news" className="text-gray-900 font-normal text-lg">
						News
					</a>
				</div>
			</nav>
		</div>
	);
}
Navigation.auth = true;
