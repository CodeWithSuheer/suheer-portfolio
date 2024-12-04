import React, { useState } from "react";

export default function FreelancerContact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#f8fafc] rounded-lg">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Want to hire me as a freelancer? Let&apos;s discuss.
          </h2>
          <p className="text-gray-600 mb-4">
            Drop your message and let&apos;s discuss about your project.
          </p>
          <button
            type="button"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded"
            onClick={() => window.open("https://wa.me/03324700802", "_blank")}
          >
            Chat on WhatsApp
          </button>
        </div>

        <div>
          <p className="text-gray-600 mb-4">
            Drop in your email ID and I will get back to you.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
