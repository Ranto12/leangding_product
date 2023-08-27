"use client";

import { IconsCar } from "@/assets";
import Mobile from "./Mobile";
import { NavItem } from "./usenav";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className="w-full  px-8 py-4 lg:px-32 border-b border-teal-600/60 flex justify-between sticky top-0 backdrop-blur-md z-[100]">
      <h3 className="text-neutral-100/90 font-bold text-normal flex gap-2 justify-center items-center">
        <Image width={20} className="" alt="iconsMobil" src={IconsCar} />
        Jual Mobil
      </h3>
      <nav className="lg:flex gap-8 justify-center items-center hidden">
        {NavItem.map((item, index) => (
          <a
            key={index}
            className="text-neutral-100/80 hover:text-neutral-100 duration-200 ease-in-out"
            href={item.path}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <Mobile />
    </section>
  );
};

export default Navbar;
