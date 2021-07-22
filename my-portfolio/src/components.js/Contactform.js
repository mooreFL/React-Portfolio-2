import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqlbrea");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
      
    <form
      netlify
      name="contact"
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xnqlbrea"
      method="POST"
    >
      <label htmlFor="email" className="leading-7 text-sm text-gray-400">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
