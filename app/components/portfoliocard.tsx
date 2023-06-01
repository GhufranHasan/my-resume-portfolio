import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imageUrl,
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="shadow-md shadow-orange-900 h-60 hover:scale-105 duration-75 bg-black">
      <div>
        <Image
          src={imageUrl}
          alt=""
          className="w-full h-40 rounded-t-md"
          width={800}
          height={800}
        />
      </div>
      <div className="flex justify-between px-5 text-white">
        <button className="p-4 hover:scale-105 duration-200">
          <a href={demoUrl} target="_blank">
            Demo
          </a>
        </button>
        <button className="p-4 hover:scale-105 duration-200">
          <a href={codeUrl} target="_blank">
            Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;