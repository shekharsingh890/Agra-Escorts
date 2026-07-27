import { NavLink } from "react-router-dom"
import hero from "../assets/hero.jpg"
import Heading from "../section/Hero";
import * as Icons from '../assets/companions'
import { useState } from "react";

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

const FAQS = [
  { q: "How do I book a companion?", a: "You can book via our contact form, WhatsApp or by calling our 24/7 concierge line." },
  { q: "Is my privacy protected?", a: "Absolute discretion is our cornerstone. All details remain strictly confidential." },
  { q: "Do you serve outside Aerocity?", a: "Yes, we serve all of Delhi NCR including Gurgaon, Noida and 5-star hotels citywide." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI, bank transfer and select international payments." },
];

const Hero = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <>
      <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden">
        <img src={hero} alt="Luxury lobby ambiance" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover"/>

        <div className="absolute inset-0 bg-linear-to-b from-[#1f1d1b]/40 via-[#161513]/70 to-[#0f0f0e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,181,76,0.25),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
          <p className="mb-6 animate-fade-in text-xs uppercase tracking-[0.4em] text-[#d4b54c] font-serif">Elite Luxury Companionship</p>
          <h1 className="animate-fade-in text-5xl leading-[1.05] md:text-7xl lg:text-8xl font-serif">
            Premium{" "}
            <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">Aerocity</span>
            <br />
            Escorts
          </h1>
          <p className="mx-auto mt-8 max-w-2xl animate-fade-in text-lg text-[#f5f3eb]/80 md:text-xl">Luxury Companionship & Elite Escort Services in Aerocity, Delhi. Discreet. Verified. Unforgettable.</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in">
            <NavLink to="/companions" className="rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#1f1d1b] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              View Profiles
            </NavLink>
            <NavLink to="/contact" className="rounded-full border border-[#d4b54c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#d4b54c] transition-all duration-300 hover:bg-[#d4b54c] hover:text-[#1f1d1b]">
              Contact Now
            </NavLink>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Why Choose Us"
          title={
            <>
              The{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                gold standard
              </span>{" "}
              in companionship
            </>
          } subtitle="Six reasons discerning gentlemen choose Aerocity Escorts."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-3xl border border-[#514d45]/30 bg-[#2a2825] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-[#d4b54c]/30 text-xl text-[#d4b54c]">{r.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-[#f5f3eb]">{r.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#b8b2a7]">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* featured companions */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Featured Companions"
          title={
            <>
              Meet our{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                elite
              </span>{" "}
              companions
            </>
          } subtitle="A curated selection of our most sought-after companions."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-3xl border border-[#514d45]/30 bg-[#130e0b] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="relative aspect-4/5 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-serif font-normal text-[#f5f3eb]">{p.name}</h3>
                  <p className="text-sm text-[#d4b54c]">{p.age} yrs · {p.city}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 p-6 text-xs text-[#b8b2a7]">
                <div>
                  Height:{" "}
                  <span className="text-[#f5f3eb]">{p.height}</span>
                </div>
                <div>
                  Languages:{" "}
                  <span className="text-[#f5f3eb]">{p.languages}</span>
                </div>
              </div>

              <div className="p-6 pt-0">
                <NavLink to="/companions" className="block rounded-full border border-[#d4b54c] px-5 py-3 text-center text-xs font-medium uppercase tracking-widest text-[#d4b54c] transition-all duration-300 hover:bg-[#d4b54c] hover:text-[#1f1d1b]">
                  View Profile
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Our Services"
          title={
            <>
              A companion for every{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                occasion
              </span>
            </>
          } subtitle="From intimate dinners to international travel."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s} className="flex items-center justify-between rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)] font-serif">
              <span className="text-xl font-normal text-[#f5f3eb]">{s}</span>
              <span className="text-xl text-[#d4b54c] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <NavLink to="/services" className="inline-block rounded-full border border-[#d4b54c] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#d4b54c] transition-all duration-300 hover:bg-[#d4b54c] hover:text-[#1f1d1b]">
            All Services
          </NavLink>
        </div>
      </section>

      {/* testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Testimonials"
          title={
            <>
              Words from our{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                clients
              </span>
            </>
          } subtitle=""
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="mb-4 text-[#d4b54c]">★★★★★</div>
              <p className="text-lg italic leading-8 text-[#f5f3eb]">"{t.text}"</p>
              <div className="mt-4 text-xs uppercase tracking-widest text-[#b8b2a7]">
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="FAQs"
          title={
            <>
              Frequently asked{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                questions
              </span>
            </>
          } subtitle="" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((f, index) => (
            <div key={f.q} className="overflow-hidden rounded-3xl border border-[#514d45]/30 bg-[#130e0b] transition-all duration-300 hover:border-[#d4b54c]/40">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between p-6 text-left text-lg font-normal text-[#f5f3eb] font-serif">
                <span>{f.q}</span>
                <span className={`text-2xl text-[#d4b54c] transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-7 text-[#b8b2a7]">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#d4b54c]/40 bg-[#191817] px-8 py-20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(180,130,40,0.32),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_35%,rgba(0,0,0,.45)_70%,rgba(0,0,0,.75)_100%)]" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0d0c0b]/10 to-[#0d0c0b]/30" />

          <div className="relative text-center">
            <h2 className=" text-4xl font-normal leading-tight text-[#f5f3eb] md:text-6xl font-serif">
              Book your{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">unforgettable</span>{" "}
              evening
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#b8b2a7]">Our concierge team is available 24/7 for immediate and scheduled bookings.</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink to="/contact" className="rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#1f1d1b] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
                Contact Now
              </NavLink>
              <NavLink to="/rates" className="rounded-full border border-[#d4b54c] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#d4b54c] transition-all duration-300 hover:bg-[#d4b54c] hover:text-[#1f1d1b]">
                View Rates
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero