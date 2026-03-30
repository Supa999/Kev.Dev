"use client";
import React from "react";

export default function ContactForm() {
  return (
    <form className="bg-neutral-900 rounded-xl p-4 flex flex-col items-start gap-5">
        
        <label htmlFor="name" className="text-stone-500 text-lg tracking-tight w-full">
        Name
        <input type="text" name="name" id="name" placeholder="Full Name" className="bg-neutral-950 w-full placeholder-stone-500 p-2.5 rounded-sm text-lg focus:outline-none focus:shadow-[0_0_5px_0_white] mt-2" />
        </label>
        
        <label htmlFor="email" className="text-stone-500 text-lg tracking-tight w-full">
        Email
        <input type="email" name="email" id="email" placeholder="Email Address" className="bg-neutral-950 w-full placeholder-stone-500 p-2.5 rounded-sm text-lg focus:outline-none focus:shadow-[0_0_5px_0_white] mt-2"/>
        </label>

      <label htmlFor="objective" className="text-stone-500 text-lg tracking-tight">
      Objective
      <select name="objective" id="objective" className="text-stone-500 bg-black w-full rounded-sm p-2.5 focus:outline-none focus:shadow-[0_0_5px_0_white] mt-2">
        <option value="web-dev">Website Development</option>
        <option value="automation">Python Automation</option>
        <option value="backend">Python or Java Backend</option>
      </select>
      </label>
      
      <label htmlFor="details" className="text-stone-500 text-lg tracking-tight w-full">Details
      <textarea name="details" id="details" placeholder="Briefly describe your requirements..." className='w-full h-50 text-white placeholder-stone-500 bg-black p-2.5 rounded-sm focus:outline-none focus:shadow-[0_0_5px_0_white] mt-2'/>
      </label>
    </form>
  );
}
