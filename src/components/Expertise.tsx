import React from 'react'

const Expertise = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-4 md:mx-10 lg:mx-20'>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium font-serif text-center mb-6 md:mb-8 lg:mb-12 justify-center">Expertise</h3>
                <p className='font-serif text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 block my-6 md:my-7 lg:my-9 mx-4 md:mx-10 lg:mx-20 isolate'>With the combined knowledge of our renowned lawyers in all areas of business law, we quickly mobilize the right expertise and experience for each assignment. We are organized into groups focused on specific businesses and industries, and we collaborate seamlessly across the firm.</p>
            </div>
            <div className='flex justify-center'>
                <button className='text-gray-600 font-light text-center border border-gray-400 mt-6 md:mt-7 lg:mt-9 mb-5 px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-sm md:text-base lg:text-lg hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>
                    Our advisory services
                </button>
            </div>
        </>
    )
}

export default Expertise