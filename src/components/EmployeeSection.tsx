/* eslint-disable @next/next/no-img-element */

import { Button } from "./Button";

interface EmployeesSectionProps {
  title: string;
  description: string;
  ctaButton: string;
}

export default function EmployeesSection({
  title,
  description,
  ctaButton,
}: EmployeesSectionProps) {
  return (
    <section className="grid grid-cols-12 gap-[min(50px,7vw)] items-center">
      <img
        src="/assets/employees.jpg"
        alt="Employees"
        className="col-span-12 md:col-span-6 w-full"
      />
      <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-5">
        <h2 className="font-serif text-black">{title}</h2>
        <p className="leading-[1.4] block isolate mt-[min(50px,7vw)] md:mt-[27px] ">
          {description}
        </p>
        <Button href="/employees" className="mt-[min(50px,7vw)] md:mt-[27px]">
          {ctaButton}
        </Button>
      </div>
    </section>
  );
}
