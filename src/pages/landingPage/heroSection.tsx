import Image from "next/image";
import React from "react";
import bg_image from "@/img_assets/bg-image.png";
import depth_image from "@/img_assets/dpeth-image.png";
import Navbar from "@/components/navbar/navbar";
import Button from "@/components/button/button";
import { IconLocation, IconWorld } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <div className="felx felx-col items-center justify-between ">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full bg-cover">
          <Image
            src={bg_image}
            alt="backgournd image"
            className="w-full bg-contain "
          />
        </div>
        <div className="text-center">
          <Navbar />
          <p className="text-4xl font-semibold mt-6 md:text-[100px] md:mt-10 lg:text-[160px] lg:mt-24">
            Wedding Platinum
          </p>
          <div className="flex justify-center -mt-16 md:mr-10 md:ml-3 md:-mt-[140px] lg:-mt-[195px] lg:ml-7 lg:mr-20">
            <Image
              src={depth_image}
              alt="depth image"
              style={{
                width: "60%",
                height: "auto",
              }}
            ></Image>
          </div>
        </div>
        <div className="w-full px-5 -mt-3 md:-mt-24 md:px-10 lg:-mt-16 lg:px-28">
          <div className="flex justify-between items-end">
            <div className="text-sm">
              <div>Start price at</div>
              <div className="font-semibold py-1 text-xl md:text-4xl">
                RP 13,000,000
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <Button className="mt-2 font-medium text-[12px] md:text-lg">
                Order now
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <IconWorld size={"40px"} />
              <div className="flex flex-wrap text-sm md:text-lg md:block ">
                <div>Serang-Banten</div>
                <div>Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
