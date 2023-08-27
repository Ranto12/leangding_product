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
    <form ref={fromRef} action="" className='w-full rounded-xl border flex flex-col gap-4 bg-teal-900/90 border-teal-600/40 backdrop-blur-2xl drop-shadow-xl p-4 lg:p-8'>
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <label htmlFor="" className="w-full">
                <span className="text-neutral-200">Full Name</span>
                <input className="w-full bg-neutral-400/10 focus:bg-neutral-500/10 p-2 mt-2 rounded-lg text-neutral-50 focus:outline-none border border-teal-50 focus:border-teal-400/40 placeholder:text-neutral-300/40" type="text" placeholder="Ranto"/>
            </label>
        </div>
    </form>
  );
};

export default ContactFrom;
