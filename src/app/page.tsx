"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { pricings } from "@/data/priceData";
import PricingCard from "@/component/Home/PricingCard";
import ContactFrom from "@/component/Home/ContactFrom";
import { Keunggulan } from "@/data/keunggulan";
import iconsos from '../assets/svg/24jam.svg'

export default function Home() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } },
  };
  const router = useRouter();
  return (
    <main className="flex flex-col min-h-screen min-w-screen font-sans justify-center items-center gap-24">
      {/* home  */}
      <section className="w-full flex flex-col  min-h-screen justify-center items-center px-8">
        <motion.div
          className="md:w-[60%] w-full flex flex-col gap-4 justify-center items-center"
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <a
            href="#"
            className="bg-teal-900/30 border border-teal-600 text-neutral-50 px-2 py-2 rounded-full flex items-center self-start lg:self-center gap-4 justify-center cursor-pointer hover:border-teal-500/40 duration-300 ease-out"
          >
            <p>Halaman Utama, Perusahaan</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="m218.8 130.8l-72 72a3.9 3.9 0 0 1-5.6 0a3.9 3.9 0 0 1 0-5.6l65.1-65.2H40a4 4 0 0 1 0-8h166.3l-65.1-65.2a4 4 0 0 1 5.6-5.6l72 72a3.9 3.9 0 0 1 0 5.6Z"
              />
            </svg>
          </a>
          <motion.h1 className="text-transparent lg:text-center bg-gradient-to-b from-neutral-50 from-10% via-teal-200 via-70% to-95% to-emerald-400 bg-clip-text leading-none"
           variants={FADE_DOWN_ANIMATION_VARIANTS}>
             Internet kencang dan murah hanya ada di netBus
          </motion.h1>
          <motion.p className="text-neutral-200 text-xl lg:text-center font-[450] w-full lg:w-3/4"
           variants={FADE_DOWN_ANIMATION_VARIANTS}>
           Internet dengan kecepatan 1Gbps adalah keunggulan dari kami. Dengan pengawai yang siap 24 jam untuk melayani kendala dari Internet di lampung.
          </motion.p>
          <motion.div className="flex gap-4 mt-4 lg:mt-0 justify-start lg:justify-center lg:items-center w-full"
           variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <button
              className="p-3 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-400 border text-neutral-950 font-[500] border-neutral-50 hover:shadow-lg hover:shadow-emerald-400 duration-300 ease-in-out"
              onClick={() => {
                router.push("/waitlist");
              }}
            >
              Join to waithlist
            </button>
            <a
              className="relative p-3 rounded-lg bg-teal-950/90 text-neutral-50 font-[500] group nimate-rotate-gradient border border-neutral-400"
              href="#features"
            >
              Learn more
              <div className="absolute -inset-[0.05rem] bg-gradient-to-br from-teal-400 via-emerald-100 to-emerald-400 -z-10 rounded-lg group-hover:animate-rotate-gradient"></div>
            </a>
          </motion.div>
        </motion.div>
      </section>
      
      {/* section Product  */}
      <section
        className="w-full flex flex-col justify-center items-center px-8 lg:px-32 min-h-screen gap-16"
        id="product"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="lg:w-1/2 w-full text-center text-neutral-50 leading-none lg:mt-16">
            keunggulan yang tersedia pada perusahaan kami <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 256 256"
              className="inline-block animate-pulse text-rose-500"
            >
              <path
                fill="currentColor"
                d="M128 220a4.9 4.9 0 0 1-2-.5a321.4 321.4 0 0 1-50.7-37C41.3 151.8 24 121.4 24 92a56 56 0 0 1 104-28.9A56 56 0 0 1 232 92c0 29.4-17.3 59.8-51.3 90.5a321.4 321.4 0 0 1-50.7 37a4.9 4.9 0 0 1-2 .5ZM80 44a48 48 0 0 0-48 48c0 59.7 82.2 111.1 96 119.4c13.8-8.3 96-59.7 96-119.4a48 48 0 0 0-92.3-18.5a4 4 0 0 1-7.4 0A48 48 0 0 0 80 44Z"
              />
            </svg>
          </h2>
          <p className="text-neutral-200 font-[450] text-xl w-full lg:w-2/3 text-center">
          kamu bersedia untuk memberikan pelayanan yang maksimal dengan beberapa keunggulan yang bisa kami berikan pada pelanggan.
          </p>
        </div>
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 h-[800px]  gap-8">
            {Keunggulan.map((item : any , i : number)=>(
              <div key={i} className="h-full flex flex-col w-full  border border-teal-600/40 rounded-2xl backdrop-blur-2xl drop-shadow-2xl bg-teal-900/30 relative overflow-hidden p-4 lg:p-8">
              <div className="w-full  flex flex-col justify-center items-center gap-2  self-end">
                <h3 className="text-neutral-50 pb-3 font-semibold text-[1.5rem] lg:text-[2rem] text-center leading-none">
                  {item.title}
                </h3>
                <p className="text-neutral-200 font-[450] text-lg text-center lg:w-2/3 leading-tight">
                  {item.deskripsi}
                </p>
                <Image alt="" src={item.icon} width={300} height={300} />
              </div>
            </div>
            ))}
          </div>

        </div>
      </section>
      {/* pembayaran  */}
      <section
        className="w-full flex flex-col justify-center px-8 lg:px-32 min-h-screen gap-6"
        id="pricing"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="lg:w-1/2 text-center text-neutral-50 leading-none lg:mt-16">
            Harga peningkatan layanan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 256 256"
              className="inline-block text-emerald-400"
            >
              <path
                fill="currentColor"
                d="M216 76H56a12 12 0 0 1 0-24h136a4 4 0 0 0 0-8H56a20.1 20.1 0 0 0-20 20v128a20.1 20.1 0 0 0 20 20h160a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm4 124a4 4 0 0 1-4 4H56a12 12 0 0 1-12-12V80a19.9 19.9 0 0 0 12 4h160a4 4 0 0 1 4 4Zm-32-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8Z"
              />
            </svg>
          </h2>
          <p className="text-neutral-200 font-[450] text-xl lg:w-2/3 text-center">
            berikut untuk peningkatan layanan yang bisa dilakukan oleh anda, silakan pilih layanan yang akan di gunakan
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {pricings.map((item, i) => (
            <PricingCard
              key={i}
              title={item.title}
              price={item.price}
              perks={item.perks}
            />
          ))}
        </div>
      </section>
      {/* contact  */}
      <section
        className="w-full flex flex-col justify-center items-center px-8 lg:px-32 min-h-screen gap-16 mb-24"
        id="contact"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="lg:w-1/2 text-center text-neutral-50 leading-none lg:mt-16">
            {" "}
            Anda kurang yakin ?{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              className="inline-block text-emerald-400"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M228.4 189.5a78 78 0 0 0-60.2-115.1a78 78 0 1 0-140.6 67.1L21.2 164A12 12 0 0 0 36 178.8l22.5-6.4a77.3 77.3 0 0 0 29.3 9.2a78 78 0 0 0 109.7 38.8l22.5 6.4a11.9 11.9 0 0 0 14.8-14.8ZM59.3 159.9a4.7 4.7 0 0 0-1.7.3l-24.9 7.1l7.1-24.9a5.6 5.6 0 0 0-.6-4.7a65.9 65.9 0 1 1 23.1 23.1a5.5 5.5 0 0 0-3-.9Zm156.9 30.5l7.1 24.9l-24.9-7.1a5.6 5.6 0 0 0-4.7.6a66.1 66.1 0 0 1-92.6-27A78.1 78.1 0 0 0 174 104a78.9 78.9 0 0 0-1.9-16.9a66.1 66.1 0 0 1 44.7 98.6a5.6 5.6 0 0 0-.6 4.7Z"
              />
            </svg>
          </h2>
          <p className="text-neutral-200 font-[450] text-xl lg:w-2/3 text-center">
            {" "}
           jika anda merasa kurang yakin dengan pelayanan atau jasa kami. silakan untuk berbincang dengan kami dan kami akan jelaskan kelebihan kami dengan user yang sudah merata khususnya di provinsi lampung
          </p>
        </div>
        <ContactFrom />
      </section>
    </main>
  );
}
