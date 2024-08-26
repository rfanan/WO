import Image from "next/image";
import React from "react";
import bg_image from "@/img_assets/Desktop - 1.png";
import Navbar from "@/components/navbar/navbar";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Button from "@/components/button/button";

const HeroSection = () => {
  return (
    <div className="felx felx-col items-center justify-between">
      <div className="relative w-full">
        <div className=" absolute -z-10 w-full">
          <Image
            src={bg_image}
            alt="backgournd image"
            className="w-full bg-cover "
          />
        </div>
        <div className="text-center">
          <Navbar />
          <p className="text-4xl font-medium">Wedding Platinum</p>
        </div>
        <div className="px-10 text-sm pt-10">
          <div>Start price at</div>
          <div>RP 13,000,000</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <Button className={"mt-5"}>Order now</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
