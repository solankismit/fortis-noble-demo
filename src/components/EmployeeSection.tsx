/* eslint-disable @next/next/no-img-element */

export default function EmployeesSection() {
  return (
    <section className="grid grid-cols-12 gap-x-[min(50px,7vw)] items-center">
      <img
        src="/assets/employees.jpg"
        alt="Employees"
        className="col-span-6 w-full"
      />
      <div className="col-start-7 col-span-5">
        <h2 className="font-serif text-black mb-6">Employees</h2>
        <p className="text-[20px] font-serif text-black mb-2">
          Who are you looking for? Although we are spread across a global
          market, we are a close-knit team with expertise in all areas of
          business law.
        </p>
        <div className="flex justify-left mt-0">
          <button className="text-black font-serif font-light text-center border border-gray-400 mt-6 md:mt-7 lg:mt-6 mb-5 px-6 md:px-8 lg:px-16 py-3 md:py-3.5 lg:py-3 text-sm md:text-base lg:text-base hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            Find employees
          </button>
        </div>
      </div>
    </section>
  );
}
