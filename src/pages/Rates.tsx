import Heading from "../section/Heading";
import { NavLink } from "react-router-dom";

const packages = [
  { name: "Basic", duration: "2 Hours", features: ["Verified companion", "Dinner or drinks", "In-city meet", "Complete privacy"], featured: false },
  { name: "Premium", duration: "4 Hours", features: ["Curated selection", "Fine dining", "Personal concierge", "Priority booking"], featured: false },
  { name: "VIP", duration: "Full Evening", features: ["Top-tier companion", "5-star venue", "Champagne service", "Dedicated concierge", "Chauffeured transfers"], featured: true },
  { name: "Elite", duration: "Overnight / 24h", features: ["Model-tier companion", "Suite reservation", "Bespoke itinerary", "Priority everything", "Multi-day extensions"], featured: false },
];

const process = [
  { n: "01", t: "Enquire", d: "Contact us via form, phone or WhatsApp." },
  { n: "02", t: "Curate", d: "We propose companions matched to your preferences." },
  { n: "03", t: "Confirm", d: "Confirm date, venue and package details." },
  { n: "04", t: "Enjoy", d: "Meet your companion at the agreed location." },
];

const Rates = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8 pt-38">
        <Heading badge="Investment"
          title={
            <>
              Transparent{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                packages
              </span>
            </>
          } subtitle="Every package reflects our commitment to five-star service. Custom arrangements available on request."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((p) => (
          <div key={p.name} className={`relative rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)] ${p.featured ? "ring-2 ring-[#d4b54c]" : "" }`}>
            {p.featured ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-4 py-1 text-[10px] font-medium uppercase tracking-widest text-[#1f1d1b]">
                Most Popular
              </span>
            ) : null}

            <h3 className="text-3xl font-serif font-normal text-[#f5f3eb]">{p.name}</h3>
            <p className="mt-1 text-sm text-[#d4b54c]">{p.duration}</p>

            <div className="my-6 h-px w-full bg-linear-to-r from-transparent via-[#d4b54c]/50 to-transparent" />

            <ul className="space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#d4b54c]">✓</span>
                  <span className="leading-6 text-[#b8b2a7]">{f}</span>
                </li>
              ))}
            </ul>

            <NavLink to="/contact" className={`mt-8 block rounded-full px-5 py-3 text-center text-xs font-medium uppercase tracking-widest transition-all duration-300 ${p.featured ? "bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] text-[#1f1d1b] hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]" : "border border-[#d4b54c] text-[#d4b54c] hover:bg-[#d4b54c] hover:text-[#1f1d1b]"}`}>
              Book {p.name}
            </NavLink>

            <p className="mt-4 text-center text-xs text-[#b8b2a7]">Pricing on enquiry</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Booking process"
          title={
            <>
              Simple. Discreet.{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                Elegant.
              </span>
            </>
          } subtitle="" />

        <div className="grid gap-6 md:grid-cols-4">
          {process.map((s) => (
            <div key={s.n} className="rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text text-4xl font-normal text-transparent font-serif">
                {s.n}
              </div>

              <h3 className="mt-4 font-serif text-xl font-normal text-[#f5f3eb]">{s.t}</h3>
              <p className="mt-2 text-sm leading-7 text-[#b8b2a7]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
          <h3 className="text-2xl font-serif font-normal text-[#f5f3eb]">Payment Methods</h3>

          <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">We accept cash, UPI, secure bank transfers and select international payment options. Payment terms are confirmed at booking.</p>
        </div>

        <div className="rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
          <h3 className="text-2xl font-serif font-normal text-[#f5f3eb]">Privacy Notice</h3>
          <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">All bookings are protected by strict confidentiality. No personal details are ever shared, stored longer than necessary, or used for marketing.</p>
        </div>
      </section>
    </>
  )
}

export default Rates