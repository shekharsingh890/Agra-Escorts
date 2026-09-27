import { NavLink } from "react-router-dom"
import hero from "../assets/hero.jpg"
import * as Icons from '../assets/companions'
import { Helmet } from "react-helmet-async"
import { lazy } from "react"

const Hero = lazy(()=>import('../section/Hero'))
const Profile = lazy(()=>import('../section/Profile'))
const Faqs = lazy(()=>import('../section/Faqs'))

const reasons = [
  { icon: "★", title: "Great Companions", text: "Handpicked companions who are friendly, polished, and easy to be around." },
  { icon: "✓", title: "Verified Profiles", text: "Every profile is checked so you know you're dealing with real people." },
  { icon: "◈", title: "Total Privacy", text: "Your privacy comes first, with discreet and confidential service throughout." },
  { icon: "◐", title: "Available 24/7", text: "Need a booking now or later? Our concierge team is available around the clock." },
  { icon: "♛", title: "VIP Treatment", text: "Enjoy a smooth, personal service designed around what you need." },
  { icon: "→", title: "Quick & Easy Booking", text: "Book in just a few minutes through WhatsApp, phone, or email." },
];

const profiles = [
  {
    id: 1,
    image: Icons.profile1,
    name: "Ananya",
    age: 24,
    city: "Agra",
    height: "5'4\"",
    languages: "Hindi, English"
  },
  {
    id: 2,
    image: Icons.profile2,
    name: "Priya",
    age: 28,
    city: "Agra",
    height: "5'5\"",
    languages: "Hindi, English"
  },
  {
    id: 3,
    image: Icons.profile3,
    name: "Riya",
    age: 22,
    city: "Agra",
    height: "5'3\"",
    languages: "Hindi"
  },
  {
    id: 4,
    image: Icons.profile4,
    name: "Neha",
    age: 30,
    city: "Agra",
    height: "5'6\"",
    languages: "Hindi"
  },
  {
    id: 5,
    image: Icons.profile5,
    name: "Simran",
    age: 26,
    city: "Agra",
    height: "5'4\"",
    languages: "Hindi"
  },
  {
    id: 6,
    image: Icons.profile6,
    name: "Kavya",
    age: 32,
    city: "Agra",
    height: "5'5\"",
    languages: "Hindi, English"
  },
];

const services = ["Russian Escorts", "College Girls", "Model Escorts", "VIP Outcall", "Incall Service", "Dinner Date"];

const testimonials = [
  { text: "Had an amazing experience. Ananya was incredibly warm, professional and made everything feel comfortable. The booking process was smooth and discreet.", duration: "- 2 days ago" },
  { text: "Sofia was charming, friendly and wonderful to talk to. Everything was handled professionally and the service was exactly as described. Would definitely return.", duration: "- 1 week ago" },
  { text: "Meera was beautiful, polite and very professional. One of the best experiences I've had with an escort service in Agra. Booking was quick and hassle-free.", duration: "- 4 days ago" },
];

const faqs = [
  { q: "How can I book Agra Escorts?", a: "You can book by calling or WhatsApp on +91 9762933940. Just tell us your preferred time, hotel name, and girl choice. Booking confirmed within 5-10 minutes." },
  { q: "Is my privacy protected?", a: "100% Privacy Guaranteed. We maintain full confidentiality. No details are shared with anyone. Your identity is completely safe." },
  { q: "Do you provide real photos and verified girls?", a: "Yes, all our girls are 100% verified with recent genuine photos. We never use fake or stolen images." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI, bank transfer and international payments." },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Agra Escorts | Verified Escort Services in Agra</title>

        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.agraescorts.pro/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agra Escorts | Verified Escort Services in Agra" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/" />
        <meta property="og:site_name" content="Agra Escorts" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agra Escorts | Verified Escort Services in Agra" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Agra Escorts",
            url: "https://www.agraescorts.pro/",
            description: "Escort and companionship services in Agra.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agra",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            },
            telephone: "+91 9762933940"
          })}
        </script>
      </Helmet>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={hero} alt="Luxury lobby ambiance" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover"/>

        <div className="absolute inset-0 bg-linear-to-b from-[#1f1d1b]/40 via-[#161513]/70 to-[#0f0f0e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,181,76,0.25),transparent_40%)]" />

        <div className="flex flex-col gap-8 p-4 mx-auto max-w-5xl text-center z-1">
          <p className="text-xs uppercase tracking-[0.4em] text-[#f1ba4b] font-serif">Elite Luxury Companionship</p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] font-serif">
            Premium{" "}
            <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text italic text-transparent">Agra</span>
            <br />
            Escorts
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl opacity-80">Luxury Companionship & Elite Escort Services in Fatehabad Road, Agra. Discreet. Verified. Unforgettable.</p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <NavLink to="/companions" className="rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#13100d] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              View Profiles
            </NavLink>
            <NavLink to="/contact" className="rounded-full border border-[#d4b54c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
              Contact Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <Hero badge="Why Choose Us" title1="Our" title2="premium" title3="services" description="A Prosperous Side of Agra Escort Service for Prestigious Customers." />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
              <div className="h-14 w-14 flex items-center justify-center rounded-xl border border-[#f1ba4b]/30 text-xl text-[#f1ba4b]">{r.icon}</div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-serif font-medium">{r.title}</h3>
                <p className="self-end text-sm leading-6 opacity-70">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companions */}
      <Hero badge="profiles Companions" title1="Meet our" title2="elite" title3="companions" description="Meet some of our most popular companions, handpicked for memorable experiences." />

      <section className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 lg:px-16 pt-12 md:pt-24">
        {profiles.map((profile) => (
          <Profile {...profile} />
        ))}
      </section>

      {/* Services */}
      <Hero badge="Our Services" title1="A companion for every" title2="occasion" title3="" description="From intimate dinners to international travel." />

      <section className="flex flex-col items-center gap-8 mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s} className="flex items-center justify-between gap-4 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80 font-serif">
              <span className="text-lg font-serif font-medium">{s}</span>
              <span className="text-[#f1ba4b] transition duration-300 group-hover:translate-x-1">→</span>
            </div>
          ))}
        </div>

        <NavLink to="/services" className="rounded-full border border-[#d4b54c] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
          All Services
        </NavLink>
      </section>

      {/* Testimonials */}
      <Hero badge="Testimonials" title1="Words from our" title2="clients" title3="" description="" />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.text} className="flex flex-col gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
              <div className="text-[#f1ba4b]">★★★★★</div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-serif font-medium">{t.text}</h3>
                <p className="self-end text-sm leading-6 opacity-70">{t.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <Faqs faqs={faqs} />

      {/* CTA */}
      <section className="mx-auto max-w-7xl pb-16 lg:pb-32 px-4 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 px-8 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.14_82/0.25),transparent_60%)]" />

          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight">
              Book your{" "}
              <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text italic text-transparent">unforgettable</span>
              {" "}evening
            </h2>
            <p className="md:text-lg max-w-2xl font-medium opacity-70">Our team is available 24/7 and usually replies within a few minutes.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink to="/contact" className="rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#13100d] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              Contact Now
            </NavLink>
            <NavLink to="/rates" className="rounded-full border border-[#d4b54c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
              View Rates
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home