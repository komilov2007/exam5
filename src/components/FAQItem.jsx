import { useState } from 'react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border w-full max-w-7xl mx-auto rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{question}</h3>
        <span className="text-blue-600 text-xl">{open ? '−' : '+'}</span>
      </div>

      {open && <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
}
