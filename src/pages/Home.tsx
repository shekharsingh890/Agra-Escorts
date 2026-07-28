import { NavLink } from "react-router-dom"
import hero from "../assets/hero.jpg"
import * as Icons from '../assets/companions'
import Faqs from "../section/Faqs";
import Hero from "../section/Hero";

const reasons = [
  { icon: "★", title: "Professional Companions", text: "Carefully selected, sophisticated companions with impeccable etiquette." },
  { icon: "✓", title: "Verified Profiles", text: "Every companion is personally verified for authenticity and quality." },
  { icon: "◈", title: "Complete Privacy", text: "Absolute discretion and confidentiality at every stage of your booking." },
  { icon: "◐", title: "24/7 Availability", text: "Round-the-clock concierge service for immediate and scheduled bookings." },
  { icon: "♛", title: "VIP Service", text: "White-glove treatment tailored to the most discerning gentlemen." },
  { icon: "→", title: "Fast Booking", text: "Streamlined booking within minutes via WhatsApp, phone or email." },
];

const featured = [
  { id: 1, image:Icons.profile1, name: "Sophia", age: 25, city: "Delhi", height: "5'7\"", languages: "English, Hindi" },
  { id: 2, image:Icons.profile2, name: "Isabella", age: 27, city: "Gurgaon", height: "5'6\"", languages: "English, French"},
  { id: 3, image:Icons.profile3, name: "Olivia", age: 24, city: "Delhi", height: "5'8\"", languages: "English, Spanish" },
  { id: 4, image:Icons.profile1, name: "Ava", age: 26, city: "Noida", height: "5'5\"", languages: "English, Italian" },
  { id: 5, image:Icons.profile3, name: "Mia", age: 23, city: "Noida", height: "5'4\"", languages: "English, German" },
  { id: 6, image:Icons.profile2, name: "Amelia", age: 28, city: "Gurgaon", height: "5'9\"", languages: "English, Portuguese" },
];

const services = ["Dinner Date", "Corporate Companion", "Travel Companion", "Party Companion", "Event Escort", "VIP Companion"];

const testimonials = [
  { name: "R.K.", text: "Impeccable service from booking to farewell. Truly a class above." },
  { name: "A.S.", text: "Discreet, elegant, and unforgettable. Aerocity Escorts sets the standard." },
  { name: "M.V.", text: "The companion was cultured and charming — perfect for my business dinner." },
];

const faqs = [
  { q: "How can I book Aerocity Escorts?", a: "You can book by calling or WhatsApp on +91 9999999999. Just tell us your preferred time, hotel name, and girl choice. Booking confirmed within 5-10 minutes." },
  { q: "Is my privacy protected?", a: "100% Privacy Guaranteed. We maintain full confidentiality. No details are shared with anyone. Your identity is completely safe." },
  { q: "Do you provide real photos and verified girls?", a: "Yes, all our girls are 100% verified with recent genuine photos. We never use fake or stolen images." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI, bank transfer and international payments." },
];

const Home = () => {
  return (
    <>
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        <img src={hero} alt="Luxury lobby ambiance" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover"/>

        <div className="absolute inset-0 bg-linear-to-b from-[#1f1d1b]/40 via-[#161513]/70 to-[#0f0f0e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,181,76,0.25),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
          <p className="mb-6 animate-fade-in text-xs uppercase tracking-[0.4em] text-[#f1ba4b] font-serif">Elite Luxury Companionship</p>
          <h1 className="animate-fade-in text-5xl leading-[1.05] md:text-7xl lg:text-8xl font-serif">
            Premium{" "}
            <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text italic text-transparent">Aerocity</span>
            <br />
            Escorts
          </h1>
          <p className="mx-auto pt-8 max-w-2xl animate-fade-in text-lg opacity-80 md:text-xl">Luxury Companionship & Elite Escort Services in Aerocity, Delhi. Discreet. Verified. Unforgettable.</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in">
            <NavLink to="/companions" className="rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#13100d] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              View Profiles
            </NavLink>
            <NavLink to="/contact" className="rounded-full border border-[#d4b54c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
              Contact Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <Hero badge="Why Choose Us" title1="The" title2="gold standard" title3="in companionship" description="Six reasons discerning gentlemen choose Aerocity Escorts." />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="space-y-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#f1ba4b]/30 text-xl text-[#f1ba4b]">{r.icon}</div>
                <h3 className="text-lg font-serif font-semibold opacity-80">{r.title}</h3>
                <p className="text-sm leading-7 opacity-80">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* featured companions */}
      <Hero badge="Featured Companions" title1="Meet our" title2="elite" title3="companions" description="A curated selection of our most sought-after companions." />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="relative aspect-4/5 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-serif font-normal opacity-80">{p.name}</h3>
                  <p className="text-sm text-[#f1ba4b]">{p.age} yrs · {p.city}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-6 text-xs">
                <div>
                  Height:{" "}
                  <span className="opacity-80">{p.height}</span>
                </div>
                <div>
                  Languages:{" "}
                  <span className="opacity-80">{p.languages}</span>
                </div>
              </div>

              <div className="p-6 pt-0">
                <NavLink to="/companions" className="block rounded-full border border-[#f1ba4b] px-5 py-3 text-center text-xs font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
                  View Profile
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <Hero badge="Our Services" title1="A companion for every" title2="occasion" title3="" description="From intimate dinners to international travel." />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="flex items-center justify-between rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)] font-serif">
              <span className="text-xl font-normal opacity-80">{s}</span>
              <span className="text-xl text-[#f1ba4b] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <NavLink to="/services" className="inline-block rounded-full border border-[#f1ba4b] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
            All Services
          </NavLink>
        </div>
      </section>

      {/* testimonials */}
      <Hero badge="Testimonials" title1="Words from our" title2="clients" title3="" description="" />

      <section className="mx-auto max-w-7xl px-4 lg:px-16 pt-12 md:pt-24">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="mb-4 text-[#f1ba4b]">★★★★★</div>
              <p className="text-lg italic leading-8 opacity-80">"{t.text}"</p>
              <div className="mt-4 text-xs uppercase tracking-widest opacity-80">
                — {t.name}
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