/* eslint-disable @next/next/no-img-element */

export default function EmployeesSection() {
    return (
        <section className="py-0 px-4 sm:px-6 lg:px-0">
            <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                <img src="/assets/employees.jpg" alt="Employees" className="w-full lg:w-1/2 mb-6 lg:mb-6 lg:mr-8" />
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-col justify-center lg:justify-between items-center py-4 lg:mr-32 mt-8">
                    <h2 className="text-[44px] font-serif text-black mb-6">Employees</h2>
                    <p className="text-[20px] font-serif text-black mb-2">
                        Who are you looking for? Although we are spread across a global market, we are a close-knit team with expertise in all areas of business law.
                    </p>
                    <div className='flex justify-left mt-0'>
                        <button className='text-black font-serif font-light text-center border border-gray-400 mt-6 md:mt-7 lg:mt-6 mb-5 px-6 md:px-8 lg:px-16 py-3 md:py-3.5 lg:py-3 text-sm md:text-base lg:text-base hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>
                            Find employees
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}