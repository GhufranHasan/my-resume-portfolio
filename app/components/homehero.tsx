import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = () => {
  return (
    <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-16">
      {/* left starts here */}
      <div className="p-5 max-w-lg">
        <h1 className="mb-2">
          I am a <br />
          <span className="font-bold text-yellow-500">
            Full Stack Developer
          </span>
        </h1>
        <p className="my-4">
          Hi there! I'm Ghufran Hasan, a passionate full stack developer with
          experience in building web applications. I specialize in JavaScript,
          Typescript, Angular, React, and Next.js. I love solving complex
          problems and creating innovative solutions. Let's work together to
          bring your ideas to life!
        </p>
        <button className="group flex items-center bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-black hover:to-amber-950 py-2 px-4 rounded-lg">
          Profile
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right starts here */}
      <div className="">
        {/* <Image src={} alt="my image" /> */}
        <img
          src="my_pic.png"
          alt="My picture solo"
          width={800}
          height={800}
          className="md:w-full w-1/2 mx-auto"
        />
      </div>
      {/* right ends here */}
    </section>
  );
};
