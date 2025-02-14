/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "./Button";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  categories?: string[];
}

const NewsCard = ({ image, title, date, categories }: NewsCardProps) => (
  <div className="bg-white  overflow-hidden transition-shadow duration-300 flex-1 min-w-[250px] group">
    <img src={image} alt="News" className="group-hover:opacity-50" />
    <div className="p-6">
      <h4 className="text-2xl font-serif font-light group-hover:text-gray-500">
        {title}
      </h4>
      {categories && categories.length > 0 && (
        <ul className="list-none mt-1 flex flex-row flex-wrap gap-1">
          {categories.map((category, index) => (
            <li
              key={index}
              className="border-b border-gray-500 text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase"
            >
              {category}
            </li>
          ))}
        </ul>
      )}
      <p className="text-gray-500 inline font-sans text-xs font-normal tracking-widest uppercase">
        {date}
      </p>
    </div>
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
      title: "Mannheimer Swartling Annual Publication 2025",
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
        <div className="flex flex-wrap gap-8">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              categories={item.categories}
            />
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <Button href="/news">See more news</Button>
        </div>
      </div>
    </>
  );
};

export default News;
