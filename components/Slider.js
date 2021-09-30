import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="relative w-full h-[800px]">
                <div className="w-full h-full bg-white absolute transition-all ease-in-out duration-1000 transform translate-x-0 slide z-0">
                    <img className="object-cover h-full w-full" src="/images/swan_lake.jpg" alt="show" />
                </div>
                <div className="w-full h-full bg-white absolute transition-all ease-in-out duration-1000 transform translate-x-0 slide z-0">
                    <img className="object-cover h-full w-full" src="/images/swan_lake.jpg" alt="show" />
                </div>
                <div className="w-[32rem] h-56 bg-white absolute z-10	mt-40 ml-56">
                    <h3 className="font-sans font-semibold text-2xl py-5 px-7">The Nutcracker</h3>
                    <h4 className="text-sm text-gray-600 mb-2 px-7">1 March–28 May 2022</h4>
                    <h4 className="text-sm px-7">The performance lasts about 3 hours, including two intervals.</h4>
                    <h4 className="text-sm px-7">Tickets price: £40-£120</h4>
                    <button className="border-2 text-sm mt-7 px-7 ml-7">Buy tickets</button>
                </div>
            </div>

        )
    }
}
