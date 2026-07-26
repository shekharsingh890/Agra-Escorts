import { lazy } from "react"
import { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react"
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Firebase";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

const Heading = lazy(()=>import("../section/Heading"));

type FormData = {
  name: string;
  phone: string;
  service: string | "";
  date: Date | "";
  message: string | "";
}

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat instantly",
    link: "https://wa.me/919999999999",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 99999999999",
    link: "tel:+919999999999"
  },
  {
    icon: Mail,
    title: "Email",
    value: "booking@aerocity.com",
    link: "mailto:booking@aerocity.com"
  }
]

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          email: user.email,
          name: data.name,
          phone: data.phone,
          service: data.service || "Not provided",
          date : data.date || "Not provided",
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Inquiry sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8 pt-38">
        <Heading badge="Contact"
          title={
            <>
              Reserve your{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                evening
              </span>
            </>
          } subtitle="Our concierge team responds within minutes, 24 hours a day."
        />
      </section>

      <section className="flex flex-col lg:flex-row gap-8 px-4 lg:px-16">
        <form  onSubmit={handleSubmit(onSubmit)} className="self-start w-full lg:w-3/5 flex flex-col gap-6 rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div>
            <h2 className="text-2xl font-semibold text-[#f5f3eb]">Book Your Enquiry</h2>
            <p className="mt-2 text-sm text-[#b8b2a7]">Fill in the form and our concierge team will contact you shortly.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#d4b54c]">Full Name *</label>
              <input type="text" placeholder="Enter your full name" className="rounded-xl border border-[#514d45]/40 bg-[#0f0d0c] px-4 py-3 text-[#f5f3eb] outline-none transition focus:border-[#d4b54c]"
                {...register("name", {
                  required: "Full name is required",
                })}
              />
              {errors.name && (<p className="text-xs text-red-400">{errors.name.message}</p>)}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#d4b54c]">Phone Number *</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl border border-[#514d45]/40 bg-[#0f0d0c] px-4 py-3 text-[#f5f3eb] outline-none transition focus:border-[#d4b54c]"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+91[-\s]?)?[6-9]\d{9}$/,
                    message: "Enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (<p className="text-xs text-red-400">{errors.phone.message}</p>)}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#d4b54c]">Service</label>
              <input type="text" placeholder="e.g. Dinner Date" className="rounded-xl border border-[#514d45]/40 bg-[#0f0d0c] px-4 py-3 text-[#f5f3eb] outline-none transition focus:border-[#d4b54c]"
                {...register("service")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#d4b54c]">Preferred Date</label>
              <input
                type="date"
                className="rounded-xl border border-[#514d45]/40 bg-[#0f0d0c] px-4 py-3 text-[#f5f3eb] outline-none transition focus:border-[#d4b54c]"
                {...register("date")}
              />
            </div>

            <div className="flex flex-col gap-2 lg:col-span-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#d4b54c]">Message *</label>
              <textarea rows={5} placeholder="Tell us your requirements..." className="rounded-xl border border-[#514d45]/40 bg-[#0f0d0c] px-4 py-3 text-[#f5f3eb] outline-none transition focus:border-[#d4b54c]"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (<p className="text-xs text-red-400">{errors.message.message}</p>)}
            </div>

            <button type="submit" className="lg:col-span-2 rounded-xl bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] py-4 text-sm font-semibold uppercase tracking-widest text-[#1f1d1b] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              {loading ? (
                <ClipLoader size={18} color="#1f1d1b" />
              ) : (
                "Send Enquiry"
              )}
            </button>
          </div>
        </form>

        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[#514d45]/30 bg-[#130e0b] p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#d4b54c]/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,181,76,0.15)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23]">
                  <item.icon className="h-5 w-5 text-[#1f1d1b]" />
                </div>
                <div>
                  <p className="text-xs font-serif font-medium uppercase tracking-widest text-[#d4b54c]">{item.title}</p>
                  <p className="mt-2 break-all text-sm text-[#f5f3eb]">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <iframe
            src="https://www.google.com/maps?q=28.550421,77.121765&z=14&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />

          <div className="rounded-2xl border border-[#514d45]/30 bg-[#130e0b] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <div>
              <p className="text-md font-semibold uppercase tracking-[0.3em] text-[#d4b54c]">Service Area</p>
              <h3 className="mt-2 text-sm text-[#f5f3eb]">Aerocity · Delhi NCR · Gurgaon · Noida</h3>
            </div>

            <div className="mt-4">
              <p className="text-md font-semibold uppercase tracking-[0.3em] text-[#d4b54c]">Business Hours</p>
              <p className="mt-2 text-sm text-[#f5f3eb]">24 hours · 7 days</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact