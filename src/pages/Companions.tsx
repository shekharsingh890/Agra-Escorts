import * as Icons from '../assets/companions'
import { lazy, useState } from "react"
import { NavLink } from "react-router-dom"

const Hero = lazy(()=>import('../section/Hero'))

const AVAILABILITY = ["All", "24/7", "Evenings", "By Appointment"];
const NATIONALITY = ["All", "Indian", "Russian", "French", "American"];
const AGE = ["All", "22-25", "26-29"];
const LOCATION = ["All", "Aerocity", "Delhi", "Gurgaon", "New Delhi"];

const profiles = [
  {
    id: 1,
    image: Icons.profile1,
    name: "Sophia",
    age: 25,
    city: "Delhi",
    height: "5'7\"",
    languages: "English, Hindi",
    availability: "24/7",
    nationality: "Indian",
    tags: ["VIP", "Independent"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 2,
    image: Icons.profile2,
    name: "Isabella",
    age: 27,
    city: "Gurgaon",
    height: "5'6\"",
    languages: "English, French",
    availability: "Evenings",
    nationality: "French",
    tags: ["VIP"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 3,
    image: Icons.profile3,
    name: "Olivia",
    age: 24,
    city: "Delhi",
    height: "5'8\"",
    languages: "English, Spanish",
    availability: "By Appointment",
    nationality: "Russian",
    tags: ["Independent"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 4,
    image: Icons.profile1,
    name: "Ava",
    age: 26,
    city: "Noida",
    height: "5'5\"",
    languages: "English, Italian",
    availability: "24/7",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 5,
    image: Icons.profile3,
    name: "Mia",
    age: 23,
    city: "Noida",
    height: "5'4\"",
    languages: "English, German",
    availability: "Evenings",
    nationality: "French",
    tags: ["Independent"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 6,
    image: Icons.profile2,
    name: "Amelia",
    age: 28,
    city: "Gurgaon",
    height: "5'9\"",
    languages: "English, Portuguese",
    availability: "By Appointment",
    nationality: "French",
    tags: ["VIP", "Independent"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 7,
    image: Icons.profile1,
    name: "Elisha",
    age: 27,
    city: "Aerocity",
    height: "5'6\"",
    languages: "English, French",
    availability: "24/7",
    nationality: "American",
    tags: ["VIP"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 8,
    image: Icons.profile3,
    name: "Alexandra",
    age: 27,
    city: "Delhi",
    height: "5'6\"",
    languages: "English, French",
    availability: "By Appointment",
    nationality: "Russian",
    tags: ["VIP","Independent"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 9,
    image: Icons.profile1,
    name: "Ava Adams",
    age: 27,
    city: "Aerocity",
    height: "5'9\"",
    languages: "English, French",
    availability: "24/7",
    nationality: "American",
    tags: ["VIP"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
  {
    id: 10,
    image: Icons.profile2,
    name: "Natasha",
    age: 27,
    city: "Gurgaon",
    height: "5'8\"",
    languages: "English, French",
    availability: "Evenings",
    nationality: "American",
    tags: ["VIP"],
    description: "Sophisticated, well-travelled and impeccably mannered companion for the discerning gentleman.",
  },
]

const Companions = () => {
  const [avail, setAvail] = useState("All");
  const [nat, setNat] = useState("All");
  const [age, setAge] = useState("All");
  const [loc, setLoc] = useState("All");
  const [vip, setVip] = useState(false);
  const [indep, setIndep] = useState(false);

  const filtered = profiles.filter(
  (p) =>
    (avail === "All" || p.availability === avail) &&
    (nat === "All" || p.nationality === nat) &&
    (loc === "All" || p.city === loc) &&
    (age === "All" || (age === "22-25" ? p.age <= 25 : p.age >= 26)) &&
    (!vip || p.tags.includes("VIP")) &&
    (!indep || p.tags.includes("Independent"))
  );

  return (
    <>
      <Hero badge="Our companions" title1="" title2="Elite" title3="profiles" description="Each companion is personally verified and interviewed by our concierge team." />

      <section className="mx-auto max-w-7xl px-4 pt-12 lg:pt-24">
        <div className="rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-[#f1ba4b]">Age</span>

              <select value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
                {AGE.map((item) => (
                  <option key={item} value={item} className="bg-[#13100d]">
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-[#f1ba4b]">Location</span>
              <select value={loc} onChange={(e) => setLoc(e.target.value)} className="w-full rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2.5 text-sm text-[#f5f3eb] outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
                {LOCATION.map((item) => (
                  <option key={item} value={item} className="bg-[#13100d]">
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-[#f1ba4b]">Availability</span>
              <select value={avail} onChange={(e) => setAvail(e.target.value)} className="w-full rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
                {AVAILABILITY.map((item) => (
                  <option key={item} value={item} className="bg-[#13100d]">
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-widest text-[#f1ba4b]">Nationality</span>
              <select value={nat} onChange={(e) => setNat(e.target.value)} className="w-full rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2.5 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
                {NATIONALITY.map((item) => (
                  <option key={item} value={item} className="bg-[#13100d]">
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={() => setIndep(!indep)} className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 ${indep ? "bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-[#13100d]" : "border border-[#f1ba4b] text-[#f1ba4b] hover:bg-[#f1ba4b] hover:text-[#13100d]"}`}>
              Independent
            </button>
            <button onClick={() => setVip(!vip)} className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 ${vip ? "bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-[#13100d]" : "border border-[#f1ba4b] text-[#f1ba4b] hover:bg-[#f1ba4b] hover:text-[#13100d]"}`}>
              VIP
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-12 lg:py-24">
        {filtered.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
            <div className="relative aspect-4/5 overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              {p.tags.length > 0 ? (
                <div className="absolute left-3 top-3 flex gap-2">
                  {p.tags.map((t) => (<span key={t} className="rounded-full border border-[#f1ba4b]/30 bg-[#13100d]/70 px-3 py-1 text-[10px] uppercase tracking-widest text-[#f1ba4b] backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="absolute bottom-0 w-full p-5">
                <h3 className="text-2xl font-serif font-normal">{p.name}</h3>
                <p className="text-xs text-[#f1ba4b]">
                  {p.age} yrs · {p.height} · {p.city}
                </p>
              </div>
            </div>

            <div className="space-y-2 p-5 text-xs text-[#b8b2a7]">
              <div>
                Languages:{" "}
                <span className="text-[#f5f3eb]">{p.languages}</span>
              </div>
              <div>
                Availability:{" "}
                <span className="text-[#f5f3eb]">{p.availability}</span>
              </div>
              <p className="line-clamp-2 leading-6">{p.description}</p>

              <NavLink to="/contact" className="mt-3 block rounded-full border border-[#f1ba4b] px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
                View Details
              </NavLink>
            </div>
          </div>
        ))}

        {filtered.length === 0 ? (
          <p className="col-span-full text-center">
            No companions match your filters.
          </p>
        ) : null}
      </section>
    </>
  )
}

export default Companions