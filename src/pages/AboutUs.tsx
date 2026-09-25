import { lazy } from "react";
import About from '../assets/about-us.jpg'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import('../section/Hero'))

const pillars = [
  { title: "100% Verified Girls", desc: "Real Photos & Real Service" },
  { title: "24×7 Availability", desc: "Instant Booking" },
  { title: "Safe & Secure", desc: "Complete Privacy Guaranteed" },
  { title: "5-Star Hotel Service", desc: "Incall & Outcall" },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Areocity Escorts</title>

        <meta name="description" content="Learn more about our company, our mission, our values, and our commitment to delivering quality services to our clients." />
        <meta name="keywords" content="Call girls in delhi, Escorts service in delhi, Call girls in aerocity delhi, Escorts service in aerocity Delhi" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* <link rel="canonical" href="https://yourdomain.com/about-us" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Areocity Escorts" />
        <meta property="og:description" content="Learn more about our company, our team, and the services we provide." />
        {/* <meta property="og:url" content="https://yourdomain.com/about-us" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Areocity Escorts" />
        <meta name="twitter:description" content="Discover our story, mission, and commitment to serving our clients." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Aerocity Escorts",
            // url: "https://yourdomain.com",
            description: "Learn more about our company, our mission, our values, and our commitment to delivering quality services to our clients.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Aerocity",
              addressRegion: "Delhi",
              addressCountry: "IN"
            },
            telephone: "+91 9999999999"
          })}
        </script>
      </Helmet>

      <Hero badge="About" title1="The" title2="Aerocity Escorts" title3="story" description="Discover our journey, our commitment to quality, and our focus on delivering a trusted and professional experience for every customer." />

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 pt-12 lg:pt-24 px-4 lg:px-16">
        <div className="overflow-hidden rounded-3xl border border-[#f1ba4b]/30 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
          <img src={About} alt="Escorts service in Agra" loading="lazy" className="h-full w-full object-cover"/>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-widest text-[#f1ba4b]">Our Mission</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.02]">
            A single stop for the{" "}
            <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent italic">Best Escorts</span>
            {" "}possible
          </h2>

          <p className="opacity-70">At our company, we believe that exceptional service begins with understanding people. Since our inception, we have been committed to delivering professional, reliable, and personalized experiences that reflect quality, trust, and attention to detail.</p>
          <p className="opacity-70">Every client has unique expectations, which is why we take the time to understand individual preferences before offering tailored solutions. Our experienced team works closely with clients to ensure every interaction is smooth, efficient, and handled with professionalism from start to finish.</p>
          <p className="opacity-70">We focus on creating experiences that are both seamless and memorable. Whether you're planning an important business engagement, organizing a special occasion, or seeking premium concierge support, our goal is to make the entire process simple, stress-free, and enjoyable.</p>
          <p className="opacity-70">As we continue to grow, our mission remains the same—to provide exceptional customer experiences while constantly improving our services through innovation, attention to detail, and a customer-first approach. We are proud to serve our clients with integrity and dedication, ensuring every experience reflects the quality and professionalism that define our brand.</p>
        </div>
      </section>

      <Hero badge="About" title1="Standards that" title2="set us apart" title3="" description="" />

      <section className="max-w-7xl mx-auto pt-12 lg:pt-24 px-4 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-6 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
              <div className="h-14 w-14 flex items-center justify-center rounded-full border border-[#f1ba4b]/30 text-xl text-[#f1ba4b]">
                ◈
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-lg font-serif font-medium">{p.title}</h3>
                <p className="text-sm leading-6 opacity-70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-16 lg:py-32 px-4 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 px-8 py-16">
          <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight">
            Experience the{" "}
            <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text italic text-transparent">difference</span>{" "}
          </h2>

          <NavLink to="/companions" className="rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] px-8 py-4 text-sm md:text-md tracking-widest uppercase text-black font-semibold transition-all duration-300 hover:scale-105">
            Meet Our Companions
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default AboutUs