import React from "react";

const Expertise = () => {
  return (
    <>
      <div className="grid grid-cols-12 max-w-[1200px] mx-auto px-[min(50px,7vw)] 2xl:px-[100px] place-items-center">
        <div className="col-start-3 col-span-8">
          <p className="font-serif text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 block  isolate">
            With the combined knowledge of our renowned lawyers in all areas of
            business law, we quickly mobilize the right expertise and experience
            for each assignment. We are organized into groups focused on
            specific businesses and industries, and we collaborate seamlessly
            across the firm.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-gray-600 font-light text-center border border-gray-400 mt-6 md:mt-7 lg:mt-9 mb-5 px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 text-sm md:text-base lg:text-lg hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
          Our advisory services
        </button>
      </div>
    </>
  );
};

export default Expertise;
