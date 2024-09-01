import Button from "@/components/button/button";
import { IconMinus, IconMinusVertical } from "@tabler/icons-react";
import React, { useState } from "react";

const FaqData = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Simpan indeks accordion yang terbuka

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index); // Tutup jika sudah terbuka, atau buka yang baru
  };

  return (
    <>
      <div className="py-5 p-5 sm:py-12 sm:px-40 lg:px-64">
        <div className="grid place-items-center gap-4 py-10">
          <div className="text-4xl font-semibold">FAQ</div>
          <div className="text-lg md:px-36 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
       
          </div>
        </div>
        {FaqData.map(({ title, content }, index) => (
          <div key={index}>
            <Button
              onClick={() => handleToggle(index)}
              className="flex justify-between w-full bg-transparent"
            >
              <span className="font-semibold text-lg">{title}</span>
              <span className="grid">
                <IconMinus
                  className={`transform origin-center transition duration-200 ease-out ${
                    openIndex === index ? "!rotate-160 opacity-0" : ""
                  }`}
                />
                <IconMinusVertical
                  className={`absolute transform origin-center rotate-90 transition duration-200 ease-out ${
                    openIndex !== index ? "!rotate-0" : ""
                  }`}
                />
              </span>
            </Button>
            <div
              className={`py-3 grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden py-5 px-3">{content}</div>
            </div>
            <div className="border-t border-gray-200 py-7"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
