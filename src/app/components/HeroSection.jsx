'use client'

import Image from "next/image";
import { MdOndemandVideo } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { RiMessage2Line } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";

import Link from "next/link";
import AboutPage from "./AboutPage";


const HeroSection = () => {
    
  return (
    <div className="relative flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto">
        <Image
          src="/images/newImg.png"
          width={900}
          height={100}
          className="rounded-sm"
        />

        <div className="absolute left-[228px] top-0 w-[800px] h-[354px] bg-gradient-to-l from-transparent to-black opacity-50"></div>

        <div className="absolute left-[260px] top-[180px] max-w-[30%] p-4 text-white">
          <h2 className="mb-2">NITYANAND CHARAN DAS</h2>
          <p className="font-semibold text-2xl">
            Learn key life lessons from the Gita: Mind control and conflict
            resolution
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className=" space-x-10 text-[15px] ml-11 mt-5">
            <Link
              href="#"
              className="hover:border-b-2 hover:border-indigo-600 hover:pb-2 hover:mt-2"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className=" hover:border-b-2 hover:border-indigo-600 hover:pb-2 hover:mt-2"
            >
              INSTRUCTOR
            </Link>
            <Link
              href="#"
              className=" hover:border-b-2 hover:border-indigo-600 hover:pb-2 hover:mt-2"
            >
              REVIEW
            </Link>

            <AboutPage/>

          </div>

          
        </div>

        <div className="w-[400px] h-[350px] bg-slate-200 rounded-sm absolute translate-x-[460px] top-[19%] p-4 text-black">
            <p className="font-semibold">Course fees</p>

            <div className="flex items-center mb-3 text-2xl text-black">
              <FaRupeeSign /> <span className="font-bold">5,000</span>
            </div>
            

            <p className="text-1xl font-semibold mb-2">What's included:</p>

            <div className="flex flex-col text-[15px]">
              <div className="mb-2 flex items-center">
                <MdOndemandVideo className="mr-3" />
                <span>5 on demand videos</span>
              </div>

              <div className="mb-2 flex items-center ">
                <PiVideoBold className="mr-3" />
                <span>2 livestream sessions</span>
              </div>

              <div className="mb-2 flex items-center ">
                <TiMessages className="mr-3" />
                <span>Live Q&A sessions with Nityanand Charan Das </span>
              </div>

              <div className="mb-2 flex items-center ">
                <RiMessage2Line className="mr-3" />
                <span>An active whatsapp community</span>
              </div>


            <button className="px-4 py-3 text-[16px] text-white bg-violet-800 rounded-full mt-10">
                Rigester today
            </button>

            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
