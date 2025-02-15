import { Button } from "../Button";

interface NewsletterProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function Newsletter({
  title,
  description,
  buttonText,
  buttonHref,
}: NewsletterProps) {
  return (
    <div className="text-center">
      <h2 className="mb-[0.42em] min-[320px]:text-center sm:text-[4.2rem] md:text-[4.8rem] 2xl:text-[6rem]">
        {title}
      </h2>
      <p className="text-[1.6rem] min-[330px]:text-[1.8rem] md:text-[2.2rem] 2xl:text-[2.4rem] leading-[1.4]">
        {description}
      </p>
      <footer className="2xl:mt-[58px] md:mt-[38px] mt-[min(50px,7vw)]">
        <Button href={buttonHref} variant="white" circular>
          {buttonText}
        </Button>
      </footer>
    </div>
  );
}
