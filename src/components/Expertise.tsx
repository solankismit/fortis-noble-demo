import React from "react";
import { Button } from "./Button";

const Expertise = () => {
  return (
    <>
      <div className="grid grid-cols-12  mx-auto gap-[min(50px,7vw)]">
        <div className="col-start-1 col-span-12   min-[1200px]:col-start-3 min-[1200px]:col-span-8">
          <p className="font-serif block isolate">
            With the combined knowledge of our renowned lawyers in all areas of
            business law, we quickly mobilize the right expertise and experience
            for each assignment. We are organized into groups focused on
            specific businesses and industries, and we collaborate seamlessly
            across the firm.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className="mt-[min(50px, 7vw)] md:mt-[47px] 2xl:mt-[70px]"
          href="/expertise"
        >
          Our advisory services
        </Button>
      </div>
    </>
  );
};

export default Expertise;
