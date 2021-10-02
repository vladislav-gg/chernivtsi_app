import Head from 'next/head';
import Navbar from '../components/Burger';
import { useSession, signIn, signOut } from "next-auth/client"

export default function Home() {
  const { session, loading } = useSession()

  return (
    <body className="bg-gray-50 text-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet"/>
      </Head>
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
            {!session && (
              <>
                <br/>
                <a href='/api/auth/signin' onClick={signIn}>Sign In</a>
              </>

            )}
            {
              session &&(
                <>
                Signed in as {session.user.email}<br />
                <a onClick={signOut}>sign out</a>
                </>
              )
            }
          </div>
          <div className="hidden flex flex-col items-start">
            <a href="/" className="text-gray-900">Tickets and Events</a>
            <a href="/" className="text-gray-900">About</a>
            <a href="/" className="text-gray-900">News</a>
            <a href="/" className="text-gray-900">Sign in</a>
          </div>
        </nav>
      </div>
      <div className="relative w-full h-[850px]">
        <div className="w-full h-full bg-white absolute transition-all ease-in-out duration-1000 transform translate-x-0 slide z-0">
          <img className="object-cover h-full w-full" src="/images/swan_lake.jpg" alt="show" />
        </div>
        <div className="w-[20rem] h-[22rem] ml-16 mt-12 md:w-[32rem] md:h-[20rem] bg-white absolute z-10	md:mt-40 md:ml-64 ">
          <h3 className="font-serif font-semibold text-5xl py-5 px-7">The Nutcracker</h3>
          <h4 className="text-base text-gray-400 mb-2 px-7 italic">1 March–28 May 2022</h4>
          <h4 className="text-base px-7">The performance lasts about 3 hours, including two intervals.</h4>
          <h4 className="text-base px-7 mt-1">Tickets price: £40-£120</h4>
          <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 mt-7 px-7 ml-7">Buy tickets</button>
        </div>
      </div>
      <div className="events-section w-full h-full">
        <div className="flex items-center justify-center md:justify-start max-w-7xl mx-auto mt-10"> 
          <h1 className="text-gray-900 text-7xl font-serif font-medium">Next events</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8"> 
          <div className="event-date text-md text-gray-900 flex flex-row justify-start items-center">
            <span className="ml-10 font-serif font-bold">Th</span>
            <span className="ml-10 font-serif font-bold">23.09</span>
            <span className="ml-10 font-serif font-bold">19:00</span>
          </div>
          <div className="flex flex-col justify-center ml-10 mt-3 md:mt-0 md:ml-0">
            <h2 className="text-4xl text-gray-900 font-serif font-medium">Swan Lake</h2>
            <h4 className="text-lg text-gray-500 font-sans italic">Commedia per musica in four acts by Wolfgang Amadeus Mozart</h4>
          </div>
          <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0">
            <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Buy tickets</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8"> 
          <div className="event-date text-md text-gray-900 flex flex-row justify-start items-center">
            <span className="ml-10 font-serif font-bold">Fr</span>
            <span className="ml-10 font-serif font-bold">24.09</span>
            <span className="ml-10 font-serif font-bold">17:00</span>
          </div>
          <div className="flex flex-col justify-center ml-10 mt-3 md:mt-0 md:ml-0">
            <h2 className="text-4xl text-gray-900 font-serif font-medium">The Nutcracker</h2>
            <h4 className="text-lg text-gray-500 font-sans italic">Commedia per musica in four acts by Wolfgang Amadeus Mozart</h4>
          </div>
          <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0">
            <button className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Buy tickets</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8"> 
          <div className="event-date text-md text-gray-900 flex flex-row justify-start items-center">
            <span className="ml-10 font-serif font-bold">Fr</span>
            <span className="ml-10 font-serif font-bold">24.09</span>
            <span className="ml-10 font-serif font-bold">20:00</span>
          </div>
          <div className="flex flex-col justify-center ml-10 mt-3 md:mt-0 md:ml-0">
            <h2 className="text-4xl text-gray-900 font-serif font-medium">Romeo and Juliet</h2>
            <h4 className="text-lg text-gray-500 font-sans italic">Commedia per musica in four acts by Wolfgang Amadeus Mozart</h4>
          </div>
          <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0">
            <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Buy tickets</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-10  max-w-7xl mx-auto border-b border-gray-600 border-t border-gray-600 py-8"> 
          <div className="event-date text-md text-gray-900 flex flex-row justify-start items-center">
            <span className="ml-10 font-serif font-bold">Sat</span>
            <span className="ml-10 font-serif font-bold">25.09</span>
            <span className="ml-10 font-serif font-bold">20:00</span>
          </div>
          <div className="flex flex-col justify-center ml-10 mt-3 md:mt-0 md:ml-0">
            <h2 className="text-4xl text-gray-900 font-serif font-medium">The Magic Flute</h2>
            <h4 className="text-lg text-gray-500 font-sans italic max-w-[600px]">David McVicar’s spectacular production of Mozart’s comic opera.
            </h4>
          </div>
          <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0">
            <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Buy tickets</button>
          </div>
        </div>
        <div className="more-events w-full flex flex-row justify-center items-center align-middle mt-10 ">
          <a className="mr-5 font-serif font-semibold text-4xl border-b border-gray-500" href="/events">More events </a>
          <a href='/events'>  
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-no-shrink fill-current mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>    
        </div>
      </div>
      <section className='max-w-[85%] mx-auto mt-16 h-full relative'>
                <h1 className='font-serif text-7xl font-medium '>News</h1>
                <div className='flex flex-col md:flex-row w-full h-full mt-12'>
                    <div className='md:max-w-md'>
                        <div className='left-col'>
                            <img src='/images/the_nutckracker.jpg'></img>
                            <div className="flex flex-col pt-5"> 
                                <p className="text-xl text-gray-500 mt-1">20 September 2021</p>
                                <h3 className="text-2xl text-gray-900 mt-5">New ballet in our theatre</h3>
                                <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-no-shrink fill-current mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                </a>   
                            </div>
                        </div>
                        <div className='left-col mt-16'>
                            <img src='/images/spyashaya_krasavica.jpg'></img>
                            <div className="flex flex-col pt-5"> 
                                <p className="text-xl text-gray-500 mt-1">20 September 2021</p>
                                <h3 className="text-2xl text-gray-900 mt-5">New ballet in our theatre</h3>
                                <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-no-shrink fill-current mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                </a>   
                            </div>
                        </div>
                    </div>
                    <div className='right-col md:ml-10 h-full w-full mt-16 md:mt-0'>
                        <img src='/images/my_pic.jpg'></img>
                        <div className="flex flex-col pt-5"> 
                            <p className="text-xl text-gray-500 mt-1">20 September 2021</p>
                            <h3 className="text-2xl text-gray-900 mt-5">New ballet in our theatre</h3>
                            <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-no-shrink fill-current mt-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            </a>   
                        </div>
                    </div>
                </div>
                <div className="more-events w-full flex flex-row justify-center items-center align-middle mt-10 ">
                  <a className="mr-5 font-serif font-semibold text-4xl border-b border-gray-500" href="/news">More news </a>
                  <a href='/'>  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 flex-no-shrink fill-current mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>    
                </div>
                <div className='border-b border-gray-600 mt-16'></div>
      </section>
      <footer>
        <div className="w-full  h-full mb-16 mt-16 flex md:justify-between flex-col md:flex-row " >
          <div className="flex flex-col sm:ml-16  md:max-w-4xl md:mx-auto md:justify-start "> 
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
              <input className='text-gray-900 py-3 px-2 w-56 border-b bg-gray-50 border-gray-500 focus:outline-none' placeholder='Name' type="text" required></input>
              <input className='text-gray-900 py-3 px-2 w-56 border-b bg-gray-50 border-gray-500 ml-3 focus:outline-none' placeholder='Email' type="email" required></input>
            </div>
            <div className="flex md:items-center ml-10 mt-5 md:ml-0 md:mt-0 justify-center">
              <button type='button' className="text-gray-900  px-10 py-2 border-2 border-gray-600 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700">Sign up</button>
            </div>
          </form>
        </div>
      </footer>
    </body>
  )
}
