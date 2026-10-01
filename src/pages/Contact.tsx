import { lazy, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { Phone, MessageCircle } from "lucide-react"
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Firebase";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
import type { ContactDetails } from "../components/SocialLinks";

const Hero = lazy(()=>import("../section/Hero"));
const Faqs = lazy(()=>import("../section/Faqs"));

type FormData = {
  name: string;
  phone: string;
  service?: string;
  date?: Date;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const [contacts, setContacts] = useState<ContactDetails | null>(null);
    
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data() as ContactDetails;
          setContacts(data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContacts();
  }, []);

  if (!contacts) return null;

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat instantly",
      link: `https://wa.me/${91}${contacts.Whatsapp1}`,
    },
    {
      icon: Phone,
      title: "Call Us",
      value: `+91 ${contacts.Phone1}`,
      link: `tel:+${91}${contacts.Phone1}`
    },
    {
      icon: Phone,
      title: "Call Us",
      value: `+91 ${contacts.Phone2}`,
      link: `tel:+${91}${contacts.Phone2}`
    }
  ]

  const faqs = [
    {
      q: "How can I book Agra Escorts?",
      a: `You can book by calling or WhatsApp on +91 ${contacts.Whatsapp1}. Just tell us your preferred time, hotel name, and girl choice. Booking confirmed within 5-10 minutes.`
    },
    {
      q: "How quickly can you arrange a booking?",
      a: "Same-hour bookings are usually possible for our regular clientele. Standard notice is 2 hours."
    },
    {
      q: "Do you provide real photos and verified girls?",
      a: "Yes, all our girls are 100% verified with recent genuine photos. We never use fake or stolen images."
    },
    {
      q: "What areas do you cover?",
      a: "All of Agra and travel worldwide on request."
    },
    {
      q: "Is complete privacy guaranteed?",
      a: "100% Privacy Guaranteed. We maintain full confidentiality. No details are shared with anyone. Your identity is completely safe."
    },
    {
      q: "What is the difference between Incall and Outcall?",
      a: "Incall: You visit our girl's place (mostly 5-star hotels in Agra). Outcall: Girl comes to your hotel or residence."
    },
    {
      q: "Do you have Russian and Foreign Escorts?",
      a: "Yes, we have beautiful Russian, Ukrainian, and other foreign escorts available regularly in Agra."
    },
    {
      q: "What if I want to cancel the booking?",
      a: "You can cancel 2 hours before the meeting without any charge. Last minute cancellation may have 50% charge."
    },
  ];

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

      toast.success("Inquiry sent successfully.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Agra Escort Service</title>

        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <link rel="canonical" href="https://www.agraescorts.pro/contact" />

        <meta property="og:title" content="Contact Us | Agra" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Agra" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Agra Escorts",
            url: "https://www.agraescorts.pro",
            telephone: `+91 ${contacts.Phone1}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agra",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            },
            openingHours: "Mo-Su 00:00-23:59"
          })}
        </script>
      </Helmet>

      <Hero badge="Contact" title1="Reserve your" title2="evening" title3="" description="Our team is available 24/7 and usually replies within a few minutes." />

      <section className="flex flex-col gap-16 pt-12 lg:pt-24 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <form  onSubmit={handleSubmit(onSubmit)} className="self-start w-full lg:w-3/5 flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
            <h2 className="text-2xl font-medium font-serif">Booking enquiry</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="w-fit text-xs font-medium uppercase tracking-widest text-[#f1ba4b]">Full Name *</label>
                <input type="text" id="name" className="rounded-xl border border-[#f1ba4b]/30 bg-[#080705] px-4 py-3 outline-none transition focus:border-[#f1ba4b]/80"
                  {...register("name", {
                    required: "Full name is required",
                  })}
                />
                {errors.name && (<p className="text-xs text-red-500">{errors.name.message}</p>)}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="w-fit text-xs font-medium uppercase tracking-widest text-[#f1ba4b]">Phone Number *</label>
                <input type="tel" id="phone" className="rounded-xl border border-[#f1ba4b]/30 bg-[#080705] px-4 py-3 outline-none transition focus:border-[#f1ba4b]/80"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^(\+91[-\s]?)?[6-9]\d{9}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (<p className="text-xs text-red-500">{errors.phone.message}</p>)}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="service" className="w-fit text-xs font-medium uppercase tracking-widest text-[#f1ba4b]">Service</label>
                <input type="text" id="service" className="rounded-xl border border-[#f1ba4b]/30 bg-[#080705] px-4 py-3 outline-none transition focus:border-[#f1ba4b]/80"
                  {...register("service")}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="date" className="w-fit text-xs font-medium uppercase tracking-widest text-[#f1ba4b]">Preferred Date</label>
                <input type="date" id="date" className="rounded-xl border border-[#f1ba4b]/30 bg-[#080705] px-4 py-3 outline-none transition focus:border-[#f1ba4b]/80"
                  {...register("date")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="w-fit text-xs font-medium uppercase tracking-widest text-[#f1ba4b]">Message *</label>
              <textarea id="message" rows={3} className="rounded-xl border border-[#f1ba4b]/30 bg-[#080705] px-4 py-3 outline-none transition focus:border-[#f1ba4b]/80"
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (<p className="text-xs text-red-500">{errors.message.message}</p>)}
            </div>

            <button type="submit" className="self-start rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-6 py-3 text-sm text-black font-semibold transition-all duration-300 hover:scale-105">
              {loading ? (<ClipLoader size={18} color="#1f1d1b" />) : ("Send Enquiry")}
            </button>
          </form>

          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
                <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)]">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#f1ba4b]">{item.title}</p>
                  <p className="font-serif">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex flex-col gap-4 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#f1ba4b]">Service Area</p>
              <p className="font-serif">Agra · Fatehbad Road</p>

              <p className="text-sm font-semibold uppercase tracking-wide text-[#f1ba4b]">Business Hours</p>
              <p className="font-serif">24 hours · 7 days</p>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4357.521872021677!2d78.17074251949784!3d27.09358611886542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747117d77d6e05%3A0xc8c200580433baa4!2sFatehabad%20Rd%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1790328376294!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        />
      </section>

      <Faqs faqs={faqs} />
    </>
  )
}

export default Contact