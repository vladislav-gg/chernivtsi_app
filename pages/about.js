import React from 'react'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function about() {
    return (
        <div className='w-full h-full'>
            <div className="bg-white">
                <Navigation/>
            </div>
            <div className='text-gray-800 font-serif text-4xl max-w-6xl mx-auto mt-16 leading-[3rem]'>
                <h1 className='py-7'>I decided to create this website for my hometown theatre as I thought it would be a nice idea. This website is probably half finished at this moment and I already hate how it looks. But, regardless of the outcome I learn a lot on the day to day basis. 
                </h1>

                <h1 class='pb-7'>
                Hopefully, I will be able to implement sign-in form with tickets purchase in the near future. 
                </h1>

                <h1 className=''>
                Tune in. IDK why I write this all right now, but I don't want my pages to be empty, so I will include some content in each. 
                </h1>
                
                <h1 className='pt-7'>
                And I hate lorem ipsum btw. 
                </h1>
                <h1 className='pt-7'>
                Thanks, Vlad.//
                </h1>

            </div>
            <div className='border-b border-gray-600 mt-24'></div>

            <Footer/>
        </div>
    )
}
