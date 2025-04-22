import { useState } from "react";
import toast from "react-hot-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import BlurFade from "@/components/ui/blur-fade";

export default function FreelancerContact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email Address");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "service_6xm8ezx",
        "template_yj3mw4n",
        {
          email: email,
        },
        {
          publicKey: "71BqWuSx0QJ07BuCf",
        }
      );

      reset();
      setLoading(false);
      toast.success("Got it! I'll get back to you.");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }
      setLoading(false);
      console.log("ERROR", err);
    }
  };

  const reset = () => {
    setEmail("");
  };

  return (
    <main className="max-w-2xl mx-auto">
      <BlurFade delay={0.35} inView>
        <div className="max-w-2xl mx-auto py-6 px-4 sm:px-4 bg-[#f8fafc] rounded-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Want to hire me? Let&apos;s discuss.
              </h2>
              <p className="text-gray-600 mb-4 text-[16px]">
                Drop your message and let&apos;s discuss about your project.
              </p>
              <button
                type="button"
                className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded"
                onClick={() =>
                  window.open("https://wa.me/03324700802", "_blank")
                }
              >
                Chat on WhatsApp
              </button>
            </div>

            <div>
              <p className="text-gray-600 mb-4 text-[16px]">
                Drop in your email ID and I will get back to you.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  disabled={loading}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-gray-200 focus:bg-gray-200 text-gray-800 font-semibold w-full sm:w-28 py-2 px-4 rounded 
                  `}
                >
                  {loading ? <>Sending...</> : <>Send</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}
