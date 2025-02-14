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
      <h2
        className="tmb-[0.42em] 
        "
      >
        {title}
      </h2>
      <p className="text-[2.4rem] xl:text-[2rem]">{description}</p>
      <footer className="mt-[58px] xl:mt-[38px] md:mt-[min(50px,7vw)]">
        <Button href={buttonHref} variant="white" circular>
          {buttonText}
        </Button>
      </footer>
    </div>
  );
}
