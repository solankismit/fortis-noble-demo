interface CompanyInfoProps {
  companyName: string;
  orgNumber: string;
  vatNumber: string;
}

export function CompanyInfo({
  companyName,
  orgNumber,
  vatNumber,
}: CompanyInfoProps) {
  return (
    <div className="text-center mt-[94px] xl:mt-[40px] md:mt-[min(50px,7vw)] sm:mt-[25vmin]">
      <p className="font-monument-grotesk text-[1.6rem] tracking-[0.5px] xl:text-[1.5rem] lg:text-[1.3rem]">
        {companyName}
      </p>
      <p className="font-monument-grotesk text-[1.6rem] tracking-[0.5px] xl:text-[1.5rem] lg:text-[1.3rem]">
        <span>{orgNumber}</span>
        <span className="ml-[0.5em]">{vatNumber}</span>
      </p>
    </div>
  );
}
