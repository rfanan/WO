import Image from "next/image";
import React from "react";
import img1 from "@/img_assets/img services/1.png";
import img2 from "@/img_assets/img services/2.png";
import img3 from "@/img_assets/img services/3.png";
import img4 from "@/img_assets/img services/4.png";
import img5 from "@/img_assets/img services/5.png";
import img6 from "@/img_assets/img services/6.png";

const Services = () => {
  return (
    <section>
      <div id="OurServices" className="py-32">
        <div className="w-full">
          <div className="grid place-content-center place-items-center">
            <div className="text-4xl font-semibold">Our Services</div>
            <div className="text-lg font-normal text-center w-96">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              voluptatum.
            </div>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="place-items-center justify-items-center sm:p-20 sm:py-10 sm:grid sm:grid-cols-3 sm:gap-3 md:p-40 md:py-10 md:grid md:grid-cols-3 md:gap-3  ">
              {/* grid consultant & event */}
              <div className="row-span-2">
                <div className="absolute text-slate-200 mt-4 sm:w-48 sm:p-3 md:w-60 md:p-5 lg:w-80 lg:p-6 ">
                  <div className="sm:text-sm md:text-xl lg:text-2xl font-semibold">
                    Consultation and event planning
                  </div>
                  <div className="sm:text-xs sm:mt-2 md:text-xs md:mt-5 lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, suscipit.
                  </div>
                </div>
                <Image src={img1} alt="image" />
              </div>
              {/* grid vendor selection & coordination */}
              <div className="col-span-2">
                <div className="flex justify-end">
                  <div className="absolute mt-4 sm:w-48 sm:p-3 md:w-72 md:p-5 lg:w-[26rem] lg:p-6 ">
                    <div className="sm:text-sm md:text-xl lg:text-2xl font-semibold">
                      Vendor selection and coordination
                    </div>
                    <div className="sm:text-sm sm:mt-2 md:w-90 md:text-xs md:mt-5 lg:w-96 lg:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, quisquam!
                    </div>
                  </div>
                </div>
                <Image src={img2} alt="image" className="bg-cover" />
              </div>
              {/* grid guest & Invitation management */}
              <div>
                <div className="absolute sm:w-48 sm:p-3 md:w-60 md:p-5 md:-mt-2 lg:w-80 lg:p-6 lg:mt-2">
                  <div className="sm:text-sm md:text-lg lg:text-2xl font-semibold">
                    Guest and invitation management
                  </div>
                </div>
                <Image src={img3} alt="image" />
              </div>
              <div>
                <div className="absolute sm:w-48 sm:p-3 md:w-60 md:p-5 md:-mt-2 lg:w-80 lg:p-6 lg:mt-2">
                  <div className="sm:text-sm md:text-lg lg:text-2xl font-semibold">
                    Day-of event coordination
                  </div>
                </div>
                <Image src={img4} alt="image" />
              </div>
              {/* grid Budget Management */}
              <div className="col-span-2">
                <div className="absolute mt-4 sm:w-48 sm:p-3 md:w-72 md:p-5 md:-mt-2 lg:w-[26rem] lg:p-6 lg:ml-3 lg:mt-3 ">
                  <div className="sm:text-sm md:text-lg lg:text-2xl font-semibold">
                    Budget management
                  </div>
                  <div className=" sm:text-sm sm:mt-2 md:w-36 md:text-xs md:mt-3 lg:mt-5 lg:w-72 lg:text-base">
                    lorem ipsum sit dolor amet lorem ipsum
                  </div>
                </div>
                <Image src={img5} alt="image" />
              </div>
              {/* grid erdding document & decoration */}
              <div>
                <div className="absolute sm:w-48 sm:p-3 md:w-60 md:p-5 md:-mt-2 lg:w-80 lg:p-6 lg:mt-2">
                  <div className="sm:text-sm md:text-lg lg:text-2xl font-semibold">
                    Wedding document & decoration
                  </div>
                </div>
                <Image src={img6} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
