import React, { useRef, useState } from "react";
import { toast } from "sonner";

const ContactFrom = () => {
  const fromRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    setSending(true);
    let id = setTimeout(() => {
      setSending(false);
      toast.success("Message sent succesfully");
      clearTimeout(id);
    }, 2000);
  };
  return (
    <form
      ref={fromRef}
      action=""
      className="w-full rounded-xl border flex flex-col gap-4 bg-teal-900/90 border-teal-600/40 backdrop-blur-2xl drop-shadow-xl p-4 lg:p-8"
    >
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <label htmlFor="" className="w-full">
          <span className="text-neutral-200">Full Name</span>
          <input
            className="w-full bg-neutral-400/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-50 focus:border-teal-400/40 placeholder:text-neutral-300/40"
            type="text"
            placeholder="Ranto"
          />
        </label>
        <label htmlFor="" className="w-full">
          <span className="text-neutral-200">Work Email</span>
          <input
            className="w-full bg-neutral-400/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-50 focus:border-teal-400/40 placeholder:text-neutral-300/40"
            type="text"
            placeholder="johndoe@gmail.com"
          />
        </label>
      </div>
      <label htmlFor="" className="w-full">
          <textarea
            className="w-full bg-neutral-500/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-700/40 focus:border-teal-400/40 min-h-[200px] placeholder:text-neutral-400/40 "
            placeholder="Anda dapat menghubungi kami untuk pertanyaan yang ingin diketaui oleh anda tentang kami atau perusahan kami ....."
          ></textarea>
        </label>
        <button className="bg-neutral-400/10 hover:bg-neutral-500/10 border border-teal-600/40 text-neutral-50 px-3 rounded-lg py-2  flex items-center gap-2 max-w-max justify-center cursor-pointer hover:border-teal-500/40 duration-200 ease-in-out" >
          {sending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="inline-block "
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M222.3 33.7a13.6 13.6 0 0 0-13.7-3.6L22.3 82.7A13.9 13.9 0 0 0 12.1 95a14.1 14.1 0 0 0 8 13.8l85.6 40.5a2.4 2.4 0 0 1 1 1l40.5 85.6a13.8 13.8 0 0 0 12.6 8h1.2a13.9 13.9 0 0 0 12.3-10.2l52.6-186.3a13.6 13.6 0 0 0-3.6-13.7Zm-8 10.4l-52.5 186.3a1.8 1.8 0 0 1-1.8 1.5a1.8 1.8 0 0 1-1.9-1.1l-40-84.4l42.3-42.3a6 6 0 0 0-8.5-8.5l-42.3 42.3l-84.4-40a1.8 1.8 0 0 1-1.1-1.9a1.8 1.8 0 0 1 1.5-1.8l186.3-52.5h.6a1.6 1.6 0 0 1 1.3.6a1.8 1.8 0 0 1 .5 1.8Z"
              />
            </svg>
          )}
        </button>
    </form>
  );
};

export default ContactFrom;
