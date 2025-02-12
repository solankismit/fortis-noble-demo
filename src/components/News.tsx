/* eslint-disable @next/next/no-img-element */
import React from 'react'

const News = () => {
    return (
        <>
            <div className='relative'>
                <h3 className="text-5xl font-medium font-serif text-center mb-12 justify-center">News</h3>
                <div className="flex flex-wrap gap-8">

                    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] group">
                        <img src="/assets/uppdrag1.jpg" alt="News" className="group-hover:opacity-50" />
                        <div className="p-6">
                            <h4 className="text-2xl font-serif font-light group-hover:text-gray-500">Aurelius acquires Lernia</h4>
                            <ul className="list-none mt-1 flex flex-row flex-wrap gap-1" >
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Banking and finance</li>
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Business transfers</li>
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Private Equity</li>
                            </ul>
                            <p className="text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">February 6, 2025</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] group">
                        <img src="/assets/uppdrag2.jpg" alt="News" className="group-hover:opacity-50" />
                        <div className="p-6">
                            <h4 className="text-2xl font-serif font-light group-hover:text-gray-500">Electronic Arts acquires TRACAB</h4>
                            <ul className="list-none mt-1 flex flex-row flex-wrap gap-1" >
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Labor law and pensions</li>
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Business transfers</li>
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Intellectual property law, market law and media law</li>
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">IT/Tech</li>
                            </ul>
                            <p className="text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">February 6, 2025</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] group">
                        <img src="/assets/corporate-stockholm.jpg" alt="News" className="group-hover:opacity-50" />
                        <div className="p-6">
                            <h4 className="text-2xl font-serif font-light group-hover:text-gray-500">Mannheimer Swartling Annual Publication 2025</h4>
                            <p className="text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">February 4, 2025</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[250px] group">
                        <img src="/assets/uppdrag3.jpg" alt="News" className="group-hover:opacity-50" />
                        <div className="p-6">
                            <h4 className="text-2xl font-serif font-light group-hover:text-gray-500">ICAGruppen enters into a credit facility agreement of SEK 6 billion.</h4>
                            <ul className="list-none mt-1 flex flex-row flex-wrap gap-1" >
                                <li className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">Banking and finance</li>
                            </ul>
                            <p className="text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">January 30, 2025</p>
                        </div>
                    </div>

                </div>
                <div>
                    <button className='absolute left-1/2 transform -translate-x-1/2 text-gray-600 font-light text-center border border-gray-400 mt-9 mb-5 px-6 py-3 text-xs sm:px-10 sm:py-4 sm:text-sm justify-center items-center place-content-center hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>
                        See more news
                    </button>
                </div>
            </div>
        </>
    )
}

export default News