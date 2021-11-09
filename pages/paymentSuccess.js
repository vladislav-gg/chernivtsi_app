import React from 'react'
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
 


export default function paymentSuccess() {
    return (
        <div className='w-full h-full'>
            <Navigation/>
            <div className='flex justify-center items-center max-w-5xl m-auto my-36'>
                <h1 className='font-sans text-6xl text-gray-900 '>Thank you for your purchase. The ticket will automatically be sent to your email.</h1>
            </div>

            <Footer/>
        </div>
    )
}
