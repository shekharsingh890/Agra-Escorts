import { lazy } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Hero = lazy(()=>import("../section/Hero"));

const packages = [
  { name: "Basic", duration: "2 Hours", features: ["Single Shot", "Sexy Talk", "Blowjob & Handjob"], popular: false },
  { name: "Premium", duration: "4 Hours", features: ["Double Shot", "Sexy Talk", "Blowjob & Handjob", "Lip Kiss", "Girlfriend Experience"], popular: false },
  { name: "VIP", duration: "Full Evening", features: ["Double Shot", "Sexy Talk", "Blowjob & Handjob", "Lip Kiss", "Girlfriend Experience", "Cum in Mouth"], popular: true },
  { name: "Elite", duration: "Overnight / 24h", features: ["Multiple Shot", "Sexy Talk", "Blowjob & Handjob", "Lip Kiss", "Girlfriend Experience", "Cum in Mouth", "Anal Play"], popular: false },
];

const process = [
  { n: "01", title: "Enquire", desc: "Contact us via form, phone or WhatsApp." },
  { n: "02", title: "Curate", desc: "We propose companions matched to your preferences." },
  { n: "03", title: "Confirm", desc: "Confirm date, venue and package details." },
  { n: "04", title: "Enjoy", desc: "Meet your companion at the agreed location." },
];

const Rates = () => {
  return (
    <>
      <Helmet>
        <title>Rates | Agra Escort Service</title>

        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.agraescorts.pro/rates" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rates | Agra Escorts" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/rates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rates | Agra Escorts" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Agra Escorts",
            url: "https://www.agraescorts.pro",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agra",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            }
          })}
        </script>
      </Helmet>

      <Hero badge="Investment" title1="Transparent" title2="packages" title3="" description="Every package reflects our commitment to five-star service. Custom arrangements available on request." />

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 lg:pt-24 px-4 lg:px-16">
        {packages.map((p) => (
          <div key={p.name} className={`relative flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80 ${p.popular ? "ring-2 ring-[#f1ba4b]" : "" }`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-4 py-1 text-[10px] font-medium uppercase tracking-widest text-black">Most Popular</span>
            )}

            <div className="space-y-2">
              <h2 className="text-3xl font-normal font-serif">{p.name}</h2>
              <p className="text-sm text-[#f1ba4b]">{p.duration}</p>
            </div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-[#f1ba4b]/50 to-transparent" />

            <ul className="space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[#f1ba4b]">✓</span>
                  <span className="opacity-70">{f}</span>
                </li>
              ))}
            </ul>

            <NavLink to="/contact" className={`mt-4 rounded-full px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${p.popular ? "bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-black hover:scale-105" : "border border-[#f1ba4b] text-[#f1ba4b] hover:bg-[#f1ba4b] hover:text-black"}`}>
              Book {p.name}
            </NavLink>

            <p className="text-center text-xs opacity-70">Pricing on enquiry</p>
          </div>
        ))}
      </section>

      <Hero badge="Booking process" title1="Simple. Discreet." title2="Elegant." title3="" description="" />

      <section className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 pt-12 lg:pt-24 px-4 lg:px-16">
        {process.map((s) => (
          <div key={s.n} className="flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
            <h2 className="text-3xl font-normal font-serif bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">{s.n}</h2>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-lg">{s.title}</h3>
              <p className="text-sm leading-6 opacity-70">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 py-12 lg:py-24 px-4 lg:px-16">
        <div className="flex flex-col gap-3 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
          <h3 className="text-2xl font-normal font-serif">Payment Methods</h3>
          <p className="text-sm leading-6 opacity-70">We accept cash, UPI, secure bank transfers and select international payment options. Payment terms are confirmed at booking.</p>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
          <h3 className="text-2xl font-normal font-serif">Privacy Notice</h3>
          <p className="text-sm leading-6 opacity-70">All bookings are protected by strict confidentiality. No personal details are ever shared, stored longer than necessary, or used for marketing.</p>
        </div>
      </section>
    </>
  )
}

export default Rates