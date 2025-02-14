/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./Button";
import Link from "next/link";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  categories?: string[];
}

const NewsCard = ({ image, title, date, categories }: NewsCardProps) => (
  <div className="bg-white  overflow-hidden flex-1 min-w-[250px] ">
    <div className="group cursor-pointer">
      <Link href={`#`}>
        <img
          src={image}
          alt="News"
          className="group-hover:opacity-50 transition-all duration-300"
        />
        <h4 className="font-serif font-light group-hover:text-[#999999] transition-all duration-300 pt-[32px]">
          {title}
        </h4>
      </Link>
    </div>
    {categories && categories.length > 0 && (
      <ul className="list-none mt-[10px] md:mt-[12px] xl:mt-[18px] 2xl:mt-[20px] flex flex-row flex-wrap ">
        {categories.map((category, index) => (
          <li
            key={index}
            className="inline-block mr-[3.2px] md:mr-[12px] mb-[2px] md:mb-[6px]"
          >
            <Link
              href={`#`}
              key={index}
              className="border-b border-[#999999] hover:border-transparent transition-all duration-300 text-[#999999] font-sans text-[1.2rem] md:text-[1.3rem] font-normal tracking-widest uppercase"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    )}
    <p className="text-[#999999]  font-sans text-[1.2rem] md:text-[1.3rem] font-normal tracking-widest uppercase">
      {date}
    </p>
  </div>
);

const News = () => {
  const newsItems = [
    {
      image: "/assets/uppdrag1.jpg",
      title: "Aurelius acquires Lernia",
      date: "February 6, 2025",
      categories: [
        "Banking and finance",
        "Business transfers",
        "Private Equity",
      ],
    },
    {
      image: "/assets/uppdrag2.jpg",
      title: "Electronic Arts acquires TRACAB",
      date: "February 6, 2025",
      categories: [
        "Labor law and pensions",
        "Business transfers",
        "Intellectual property law, market law and media law",
        "IT/Tech",
      ],
    },
    {
      image: "/assets/corporate-stockholm.jpg",
      title: "Fortis Noble Annual Publication 2025",
      date: "February 4, 2025",
    },
    {
      image: "/assets/uppdrag3.jpg",
      title:
        "ICAGruppen enters into a credit facility agreement of SEK 6 billion.",
      date: "January 30, 2025",
      categories: ["Banking and finance"],
    },
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[min(50px,7vw)]">
          {newsItems.map((item, index) => (
            <div key={index} className="relative">
              <NewsCard
                image={item.image}
                title={item.title}
                date={item.date}
                categories={item.categories}
              />
              {index < newsItems.length - 1 && (
                <>
                  {/* Show divider for xl (4 columns) */}
                  <div className="hidden xl:block absolute right-[-25px] top-0 h-full w-[1px] bg-[#d8d8d8]" />
                  
                  {/* Show divider for md (2 columns) except after every 2nd item */}
                  {index % 2 !== 1 && (
                    <div className="hidden md:block xl:hidden absolute right-[-25px] top-0 h-full w-[1px] bg-[#d8d8d8]" />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[47px] 2xl:mt-[60px]">
          <Button href="/news">News</Button>
        </div>
      </div>
    </>
  );
};

export default News;
