import React, {useState} from 'react'


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full max-w-7xl p-8 mx-auto my-0 text-gray-900 text-[18px]">
            <div className=''>
                <a href="/" id="logo" className="text-gray-900 font-semibold">Chernivtsi National Theatre </a>
                </div>
            <div>
            <button type='button' className="block text-gray-900 md:hidden mobile-button">
                <svg className="fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
                onClick={() => setOpen(!open)}
                /></svg>
            </button>

            </div>
            <div className={"hidden md:flex flex-col md:flex-row items-start md:items-center space-x-9" +(open ? 'flex':'hidden')}>
                <a href="/" className="text-gray-900">Tickets and Events</a>
                <a href="/" className="text-gray-900">About</a>
                <a href="/" className="text-gray-900">News</a>
                <a href="/" className="text-gray-900">Sign in</a>
            </div>
        </nav>
    )
}

