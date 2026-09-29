import * as Icons from '../assets/companions'
import { lazy, useState } from "react"
import { Helmet } from 'react-helmet-async'

const Hero = lazy(()=>import('../section/Hero'))
const Profile = lazy(()=>import('../section/Profile'))

const AVAILABILITY = ["All", "24/7", "Evenings", "By Appointment"];
const AGE = ["All", "18-21", "22-25", "26-29", "30+"];
const CITY = ["All", "Agra", "Delhi", "Gurgaon", "Noida"];

const profiles = [
  {
    id: 1,
    image: Icons.profile1,
    name: "Ananya",
    age: 24,
    city: "Agra",
    height: "5'4\"",
    languages: "Hindi, English",
    availability: "24/7",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Easygoing and friendly, Ananya enjoys good conversations, relaxed evenings, and meeting new people.",
  },
  {
    id: 2,
    image: Icons.profile2,
    name: "Priya",
    age: 28,
    city: "Delhi",
    height: "5'5\"",
    languages: "Hindi, English",
    availability: "Evenings",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Warm, cheerful, and easy to talk to. Priya loves good company and keeping things comfortable and relaxed.",
  },
  {
    id: 3,
    image: Icons.profile3,
    name: "Riya",
    age: 22,
    city: "Agra",
    height: "5'3\"",
    languages: "Hindi",
    availability: "By Appointment",
    nationality: "Indian",
    tags: [],
    description: "Young, confident, and outgoing, Riya enjoys music, travel, and spending time with interesting people.",
  },
  {
    id: 4,
    image: Icons.profile4,
    name: "Neha",
    age: 30,
    city: "Gurgaon",
    height: "5'6\"",
    languages: "Hindi",
    availability: "24/7",
    nationality: "Indian",
    tags: [],
    description: "Calm and confident with a friendly personality. Neha enjoys relaxed conversations and pleasant company.",
  },
  {
    id: 5,
    image: Icons.profile5,
    name: "Simran",
    age: 26,
    city: "Agra",
    height: "5'4\"",
    languages: "Hindi",
    availability: "Evenings",
    nationality: "Indian",
    tags: [],
    description: "Fun-loving and down to earth, Simran likes good food, movies, and meeting people with a positive vibe.",
  },
  {
    id: 6,
    image: Icons.profile6,
    name: "Kavya",
    age: 32,
    city: "Noida",
    height: "5'5\"",
    languages: "Hindi, English",
    availability: "By Appointment",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Elegant but easygoing, Kavya enjoys meaningful conversations and making every meeting feel comfortable.",
  },
  {
    id: 7,
    image: Icons.profile7,
    name: "Pooja",
    age: 27,
    city: "Agra",
    height: "5'2\"",
    languages: "Hindi",
    availability: "24/7",
    nationality: "Indian",
    tags: [],
    description: "Friendly, cheerful, and approachable. Pooja enjoys casual conversations and spending time in good company.",
  },
  {
    id: 8,
    image: Icons.profile8,
    name: "Ishita",
    age: 25,
    city: "Delhi",
    height: "5'6\"",
    languages: "Hindi",
    availability: "By Appointment",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Confident and positive, Ishita enjoys travelling, trying new places, and having a good time with great company.",
  },
  {
    id: 9,
    image: Icons.profile9,
    name: "Meera",
    age: 21,
    city: "Agra",
    height: "5'3\"",
    languages: "Hindi",
    availability: "24/7",
    nationality: "Indian",
    tags: [],
    description: "Sweet, social, and easygoing, Meera enjoys music, movies, and getting to know new people.",
  },
  {
    id: 10,
    image: Icons.profile10,
    name: "Nisha",
    age: 35,
    city: "Gurgaon",
    height: "5'5\"",
    languages: "Hindi, English",
    availability: "Evenings",
    nationality: "Indian",
    tags: ["VIP"],
    description: "Mature, confident, and friendly. Nisha appreciates good conversations, relaxed settings, and genuine company.",
  },
];

const Companions = () => {
  const [availability, setAvailability] = useState<string>("All");
  const [age, setAge] = useState<string>("All");
  const [city, setCity] = useState<string>("All");
  const [vip, setVip] = useState<boolean>(false);

  const filtered = profiles.filter((p) => {
    const availabilityMatch = availability === "All" || p.availability === availability;

    const ageMatch =
      age === "All" ||
      (age === "18-21" && p.age >= 18 && p.age <= 21) ||
      (age === "22-25" && p.age >= 22 && p.age <= 25) ||
      (age === "26-29" && p.age >= 26 && p.age <= 29) ||
      (age === "30+" && p.age >= 30);

    const cityMatch = city === "All" || p.city === city;

    const vipMatch = !vip || p.tags.includes("VIP");

    return availabilityMatch && ageMatch && cityMatch && vipMatch;
  });

  return (
    <>
      <Helmet>
        <title>Agra Escorts | Agra Escort Service</title>
        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.agraescorts.pro/companions" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agra Companions | Companionship Services in Agra" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/companions" />
        <meta property="og:site_name" content="Agra Escorts" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agra Companions | Companionship Services in Agra" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Agra Companions",
            url: "https://www.agraescorts.pro/companions",
            description: "Explore companions and companionship services available in Agra.",
            isPartOf: {
              "@type": "WebSite",
              name: "Agra Escorts",
              url: "https://www.agraescorts.pro/"
            }
          })}
        </script>
      </Helmet>

      <Hero badge="Our companions" title1="" title2="Elite" title3="profiles" description="Each companion is personally verified and interviewed by our concierge team." />

      <section className="flex flex-wrap items-end gap-4 mx-auto max-w-5xl rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 mt-12 md:mt-24">
        <div className='flex flex-col gap-2'>
          <label htmlFor="age" className='text-xs uppercase tracking-widest text-[#f1ba4b]'>Age</label>
          <select name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)} className="rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
            {AGE.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="age" className='text-xs uppercase tracking-widest text-[#f1ba4b]'>Availability</label>
          <select name="age" id="age" value={availability} onChange={(e)=>setAvailability(e.target.value)} className="rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
            {AVAILABILITY.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="city" className='text-xs uppercase tracking-widest text-[#f1ba4b]'>City</label>
          <select name="city" id="city" value={city} onChange={(e)=>setCity(e.target.value)} className="rounded-xl border border-[#f1ba4b]/30 bg-[#13100d]/80 px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-[#f1ba4b] focus:ring-2 focus:ring-[#13100d]/20">
            {CITY.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <button onClick={() => setVip(!vip)} className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest border ${vip ? "border-none bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-[#13100d]" : "border-[#f1ba4b] text-[#f1ba4b]"}`}>
          VIP
        </button>
      </section>

      <section className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 lg:px-16 py-12 md:py-24">
        {filtered.length === 0 ? (
          <p className="col-span-full text-center">
            No companions match your filters.
          </p>
        ) : 
        filtered.map((profile) => (
          <Profile {...profile} />
        ))}
      </section>
    </>
  )
}

export default Companions