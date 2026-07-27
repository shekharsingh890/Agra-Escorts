import { lazy } from "react";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import("../section/Hero"));

const services = [
  { icon: "🍷", title: "Dinner Date", desc: "Sophisticated dining companionship at Delhi's finest restaurants and hotel suites." },
  { icon: "💼", title: "Corporate Companion", desc: "Poised, articulate partners for board dinners, conferences and business galas." },
  { icon: "✈", title: "Travel Companion", desc: "Domestic and international travel companions for weekend getaways and long trips." },
  { icon: "🥂", title: "Party Companion", desc: "Charismatic company for private parties, celebrations and social gatherings." },
  { icon: "🎭", title: "Event Escort", desc: "Elegant escorts for red-carpet events, weddings and cultural evenings." },
  { icon: "♛", title: "VIP Companion", desc: "Bespoke concierge experience for our most distinguished clientele." },
  { icon: "🌙", title: "Weekend Companion", desc: "Extended weekend engagements at luxury resorts and city retreats." },
  { icon: "🌍", title: "International Companion", desc: "Multilingual companions available for international assignments worldwide." },
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