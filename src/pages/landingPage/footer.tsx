import React from "react";

const Footer = () => {
  return (
    <div className="px-2 py-2">
      <div className="py-10 rounded-3xl bg-slate-950 text-slate-100">
        <div className="w-full p-10 min-h-96">
          <div className="flex pb-10 flex-wrap justify-center">
            <div className="text-2xl md:text-8xl lg:text-[10rem] lg:mt-14 font-medium">
              Wedding Platinum
            </div>
          </div>
          <div className="flex rounded-xl">
            <iframe
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75480.99045542945!2d106.15306296522232!3d-6.133269235814072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418b0dbb534a61%3A0x301e8f1fc28b8d0!2sSerang%2C%20Serang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1725203918505!5m2!1sen!2sid"
              width="400"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
