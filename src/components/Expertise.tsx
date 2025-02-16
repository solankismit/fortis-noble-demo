import React from "react";
import { Button } from "./Button";

interface ExpertiseProps {
  description: string;
  ctaButton: string;
}

const Expertise = ({ description, ctaButton }: ExpertiseProps) => {
  return (
    <>
      <div className="grid grid-cols-12  mx-auto gap-[min(50px,7vw)]">
        <div className="col-start-1 col-span-12   min-[1200px]:col-start-3 min-[1200px]:col-span-8">
          <p className="leading-[1.4] block isolate">{description}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className="mt-[min(50px,7vw)] md:mt-[47px] 2xl:mt-[70px]"
          href="#"
        >
          {ctaButton}
        </Button>
      </div>
    </>
  );
};

export default Expertise;
