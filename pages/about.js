import React from 'react'

export default function about() {
    return (
        <div className='w-full h-full'>
            <div className="bg-white">
                <nav className="flex items-center justify-between w-full max-w-7xl p-8 mx-auto my-0 text-gray-900 text-[18px]">
                    <div>
                        <a href="/" id="logo" className="text-gray-900 font-semibold">Chernivtsi National Theatre </a>
                    </div>
                    <div>
                        <button type='button' className="block text-gray-900 md:hidden mobile-button">
                        <svg className="fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
                        </button>
                    </div>
                    <div className="hidden md:flex flex-col md:flex-row items-start md:items-center space-x-9">
                        <a href="/events" className="text-gray-900">Tickets and Events</a>
                        <a href="/about" className="text-gray-900">About</a>
                        <a href="/news" className="text-gray-900">News</a>
                        <a href="/" className="text-gray-900">Sign in</a>
                    </div>
                    <div className="hidden flex flex-col items-start">
                        <a href="/" className="text-gray-900">Tickets and Events</a>
                        <a href="/" className="text-gray-900">About</a>
                        <a href="/" className="text-gray-900">News</a>
                        <a href="/" className="text-gray-900">Sign in</a>
                    </div>
                </nav>
            </div>
            <div className='text-gray-800 font-serif text-5xl max-w-6xl mx-auto mt-16 leading-[3.4rem]'>
                <h1 className='py-7'>I decided to create this website for my hometown theatre as I thought that it would be a nice idea. This website is probably half finished at this moment and I already hate how it looks. But, regardless of the outcome I learn a lot on the day to day basis. 
                </h1>

                <h1 class='pb-7'>
                Hopefully, I will be able to implement sign-in form with tickets purchase in the near future. 
                </h1>

                <h1 className=''>
                Tune in. IDK why I write this all right now, but I don't want my pages to be emplty, so I will include some content in each. 
                </h1>
                
                <h1 className='pt-7'>
                And I hate lorem ipsum btw. 
                </h1>
                <h1 className='pt-7'>
                Thanks, Vlad.//
                </h1>

            </div>
            <div className='border-b border-gray-600 mt-24'></div>

            <footer className='mt-14'>
                <div className="w-full  h-full mb-16 mt-16 flex md:justify-between flex-col md:flex-row" >
                <div className="flex flex-col sm:ml-16  md:max-w-4xl md:mx-auto md:justify-start"> 
                    <span className="font-sans text-gray-900 text-4xl mt-24">Contact us</span>
                    <span className="font-sans text-gray-900 text-xl mt-5">Phone: +380 372 522 628</span>
                    <span className="font-sans text-gray-900 text-xl mt-5">Address: Theater Square, 1, Chernivtsi, Chernivtsi region, Ukraine, 58000</span>
                    <span className="font-sans text-gray-900 text-xl mt-5">Email: dramteatr@i.ua</span>
                    <div className="flex flex-row mt-5">
                    <a className="mr-3" href="https://www.instagram.com/dramtheater_cv/"><svg className="fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"/></svg></a>
                    <a href='https://www.facebook.com/dramtheater'><svg className="fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                    </div>
                </div>
                <form className="my-form  font-sans text-gray-900 w-full max-w-md mx-auto mt-24 flex flex-col">
                    <h3 className='text-4xl flex justify-center'> Subscribe to our newsletter</h3>
                    <div className="mt-5 border-none mb-5 flex justify-center">            
                    <input className='text-gray-900 py-3 px-2 w-56 border-b bg-none border-gray-500 focus:outline-none' placeholder='Name' type="text" required></input>
                    <input className='text-gray-900 py-3 px-2 w-56 border-b bg-none border-gray-500 ml-3 focus:outline-none' placeholder='Email' type="email" required></input>
                    </div>
                    <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0 justify-center">
                    <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Sign up</button>
                    </div>
                </form>
                </div>
            </footer>
        </div>
    )
}
