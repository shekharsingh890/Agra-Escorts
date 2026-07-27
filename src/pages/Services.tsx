import { lazy } from "react";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));

const services = [
  {
    icon: "🇷🇺",
    title: "Russian Escorts",
    desc: "Elegant international companions available for social events, dinner dates, travel, and premium companionship."
  },
  {
    icon: "🎓",
    title: "College Girls",
    desc: "Young, confident companions for casual outings, coffee dates, shopping, and entertainment events."
  },
  {
    icon: "✨",
    title: "Model Escorts",
    desc: "Fashionable and sophisticated companions ideal for luxury events, parties, corporate gatherings, and exclusive occasions."
  },
  {
    icon: "💎",
    title: "Housewife Escorts",
    desc: "Mature, graceful companions offering refined company for dinners, social engagements, and relaxed evenings."
  },
  {
    icon: "🚗",
    title: "VIP Outcall",
    desc: "Premium companion visits to your hotel, residence, or preferred location with professionalism and discretion."
  },
  {
    icon: "🏨",
    title: "Incall Service",
    desc: "Private appointments hosted at a comfortable and discreet location for a premium companionship experience."
  },
  {
    icon: "🍷",
    title: "Dinner Date",
    desc: "Enjoy refined company at fine-dining restaurants, luxury hotels, and memorable evening outings."
  },
  {
    icon: "🌙",
    title: "Weekend Companion",
    desc: "Extended companionship for weekend getaways, staycations, city escapes, and leisure travel."
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Areocity Delhi</title>

        <meta name="description" content="Discover services, local information, and premium experiences in Aerocity, New Delhi. Explore dining, hotels, travel resources, and visitor guides." />
        <meta name="keywords" content="Call girls in delhi, Escorts service in delhi, Call girls in aerocity delhi, Escorts service in aerocity Delhi" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* <link rel="canonical" href="https://yourdomain.com/services" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services | Areocity Delhi" />
        <meta property="og:description" content="Explore services and visitor information for Aerocity, New Delhi." />
        {/* <meta property="og:url" content="https://yourdomain.com/services" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Areocity Delhi" />
        <meta name="twitter:description" content="Discover services and local information for Aerocity, New Delhi." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.desc,
              provider: {
                "@type": "EntertainmentBusiness",
                name: "Aerocity Escorts",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Aerocity",
                  addressRegion: "Delhi",
                  addressCountry: "IN"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Hero badge="Services" title1="Curated" title2="experiences" description="Bespoke companionship tailored to every occasion, orchestrated with quiet precision." />

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-24 px-4 lg:px-16">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
            <div className="text-4xl">{s.icon}</div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-serif font-medium">{s.title}</h3>
              <p className="text-sm leading-6 opacity-70">{s.desc}</p>
            </div>

            <NavLink to="/contact" className="text-xs font-semibold uppercase tracking-wide text-[#f1ba4b]">
              Book Now <span>→</span>
            </NavLink>
          </div>
        ))}
      </section>
    </>
  )
}

export default Services