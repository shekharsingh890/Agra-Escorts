import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";

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
        <title>Agra Escort Service</title>

        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.agraescorts.pro/services" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agra Escort Service" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agra Escort Service" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

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
                name: "Agra Escorts",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Agra",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="flex flex-col items-center gap-3 text-center max-w-5xl mx-auto mt-24 lg:mt-36 px-4 lg:px-16">
        <p className="text-sm font-medium uppercase tracking-widest text-[#f1ba4b]">Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.02] max-w-4xl">Our Premium <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent italic">Escort Services</span> <span>in Agra</span></h1>
        <p className="md:text-lg max-w-2xl font-medium opacity-70">We focus on understanding your preferences to provide a service that feels personal and well organized.</p>
      </div>

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