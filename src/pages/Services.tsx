import { NavLink } from "react-router";
import Heading from "../section/Heading";

const services = [
  { icon: "🍷", t: "Dinner Date", d: "Sophisticated dining companionship at Delhi's finest restaurants and hotel suites." },
  { icon: "💼", t: "Corporate Companion", d: "Poised, articulate partners for board dinners, conferences and business galas." },
  { icon: "✈", t: "Travel Companion", d: "Domestic and international travel companions for weekend getaways and long trips." },
  { icon: "🥂", t: "Party Companion", d: "Charismatic company for private parties, celebrations and social gatherings." },
  { icon: "🎭", t: "Event Escort", d: "Elegant escorts for red-carpet events, weddings and cultural evenings." },
  { icon: "♛", t: "VIP Companion", d: "Bespoke concierge experience for our most distinguished clientele." },
  { icon: "🌙", t: "Weekend Companion", d: "Extended weekend engagements at luxury resorts and city retreats." },
  { icon: "🌍", t: "International Companion", d: "Multilingual companions available for international assignments worldwide." },
];

const Services = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8 pt-38">
        <Heading badge="Services"
          title={
            <>
              Curated{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                experiences
              </span>
            </>
          } subtitle='Bespoke companionship tailored to every occasion, orchestrated with quiet precision.'
        />
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.t} className="rounded-3xl border border-[#514d45]/30 bg-[#130e0b] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
            <div className="mb-5 text-4xl">{s.icon}</div>

            <h3 className="text-xl font-semibold text-[#f5f3eb]">{s.t}</h3>
            <p className="mt-2 text-sm leading-7 text-[#b8b2a7]">{s.d}</p>

            <NavLink to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#d4b54c] transition-all duration-300 hover:gap-3">
              Book Now <span>→</span>
            </NavLink>
          </div>
        ))}
      </section>

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

export default Services