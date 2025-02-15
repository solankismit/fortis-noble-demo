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
    <div className="text-center mt-[25vmin] sm:mt-[min(50px,7vw)] md:mt-[40px] 2xl:mt-[94px]">
      <p className="font-monument-grotesk text-[1.3rem] tracking-[0.5px] 2xl:text-[1.6rem] ">
        {companyName}
      </p>
      <p className="font-monument-grotesk tracking-[0.5px] 2xl:text-[1.6rem] text-[1.3rem]">
        <span>{orgNumber}</span>
        <span className="ml-[0.5em]">{vatNumber}</span>
      </p>
    </div>
  );
}
