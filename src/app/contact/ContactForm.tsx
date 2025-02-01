"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CheckSquare } from "lucide-react";
import StyledFonts from "@/components/shared/StyledFonts";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      agreed: agreed,
    };

    // Form validation
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      event.currentTarget.reset();
      setAgreed(false);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-0 md:px-4 py-12 md:py-16">
      <div className="space-y-4 mb-8">
        <h2 className="text-lg uppercase font-light tracking-[5px] text-[#C4A484]">
          LEAVE US A MESSAGE
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
          <StyledFonts
            fontFamily="Playfair Display"
            text="How Can We Help You?"
            color="inherit"
          />
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 block mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A484] transition-colors"
              placeholder="Enter Your Display Name ..."
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A484] transition-colors"
              placeholder="Enter Your Email Address ..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C4A484] transition-colors"
            placeholder="Enter Your Message Here ..."
          />
        </div>

        <div className="flex space-y-10 flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreed"
              checked={agreed}
              onChange={(checked) => setAgreed(checked.target.checked)}
              className="mt-1 p-5 cursor-pointer"
              name=""
            />
            <span className="text-xs text-gray-500">
              By signing this, I agree with Breezie Community Policy and agree
              to receive Breezie new updates and promotions through newsletter.
            </span>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#C4A484] text-white rounded-md hover:bg-[#B39476] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "SUBMIT"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
