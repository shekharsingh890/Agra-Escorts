import Heading from '../section/Heading'
import About from '../assets/about.jpg'
import { NavLink } from 'react-router-dom';

const pillars = [
  { t: "Confidentiality", d: "Every booking is protected by strict NDA-grade discretion." },
  { t: "Safety", d: "Verified companions, secure locations, and a dedicated safety desk." },
  { t: "Professional Experience", d: "A team with over a decade of hospitality and concierge expertise." },
  { t: "Luxury Standards", d: "Five-star service delivered with quiet precision and grace." },
];

const AboutUs = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8 pt-38">
        <Heading badge="About"
          title={
            <>
              The{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                Aerocity Escorts
              </span>{" "}
              story
            </>
          } subtitle="A discreet luxury companionship house serving Aerocity and greater Delhi with distinction since inception."
        />
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl border border-[#514d45]/30 bg-[#2a2825] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <img src={About} alt="Luxury ambiance" loading="lazy" width={1400} height={900} className="h-full w-full object-cover"/>
        </div>

        <div>
          <p className="text-xs font-serif uppercase tracking-[0.4em] text-[#d4b54c]">Our Mission</p>
          <h2 className="mt-3 text-3xl font-serif font-normal leading-tight text-[#f5f3eb] md:text-5xl">
            To redefine{" "}
            <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
              premium companionship
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[#b8b2a7]">We curate a world-class roster of intelligent, elegant companions and pair them with clients who value discretion, refinement and effortless conversation. Every engagement is orchestrated with the care of a five-star concierge.</p>
          <p className="mt-4 leading-8 text-[#b8b2a7]">Whether you require a partner for a corporate gala at The Leela, a quiet dinner at Roseate House, or a weekend in Goa — our team ensures every detail is impeccable.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Heading badge="Why Clients Choose Us"
          title={
            <>
              Standards that{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                set us apart
              </span>{" "}
            </>
          }
          subtitle=''/>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-3xl border border-[#514d45]/30 bg-[#2a2825] p-8 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-[#d4b54c]/40 text-xl text-[#d4b54c]">
                ◈
              </div>
              <h3 className="text-xl font-semibold text-[#f5f3eb]">{p.t}</h3>
              <p className="mt-2 text-sm leading-7 text-[#b8b2a7]">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#d4b54c]/40 bg-[#191817] px-8 py-20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(180,130,40,0.32),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_35%,rgba(0,0,0,.45)_70%,rgba(0,0,0,.75)_100%)]" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0d0c0b]/10 to-[#0d0c0b]/30" />

          <div className="relative text-center">
            <h2 className="font-serif text-4xl font-normal leading-tight text-[#f5f3eb] md:text-6xl">
              Experience the{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">difference</span>{" "}
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NavLink to="/companions" className="rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-8 py-4 text-sm font-medium uppercase tracking-widest text-[#1f1d1b] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
                Meet Our Companion
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs