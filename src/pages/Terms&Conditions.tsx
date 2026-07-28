import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import('../section/Hero'))

const terms = [
  { title: "Acceptance", desc: "By accessing this website or engaging our services, you confirm you are at least 18 years old and agree to be bound by these terms." },
  { title: "Booking Policy", desc: "All bookings are subject to companion availability and concierge confirmation. Times and services agreed at booking are final unless mutually varied." },
  { title: "User Responsibilities", desc: "Clients agree to treat all companions with respect and courtesy, to honour confirmed bookings, and to disclose any information necessary for a safe engagement." },
  { title: "Payments", desc: "Payment terms are confirmed at booking. Accepted methods include cash, UPI, secure bank transfer and select international options. Deposits may be required for extended engagements." },
  { title: "Cancellations", desc: "Cancellations made more than 24 hours in advance incur no fee. Cancellations within 24 hours may forfeit any deposit paid. No-shows are charged in full." },
  { title: "Privacy", desc: "We maintain strict confidentiality. Clients are similarly expected to respect the privacy of companions and any information shared during engagements." },
  { title: "Intellectual Property", desc: "All content on this website — images, text, design, and marks — is the property of Aerocity Escorts and may not be reproduced without written permission." },
  { title: "Contact", desc: "For any questions regarding these terms, please contact legal@aerocity.com." },
]

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Aerocity Escorts</title>
        <meta name="description" content="Read our Terms & Conditions to understand the rules, responsibilities, and legal terms governing the use of our website and services." />
        <meta name="keywords" content="Call girls in delhi, Escorts service in delhi, Call girls in aerocity delhi, Escorts service in aerocity Delhi" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* <link rel="canonical" href="https://yourdomain.com/terms-and-conditions" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | Aerocity Escorts" />
        <meta property="og:description" content="Review the Terms & Conditions that govern the use of our website and services." />
        {/* <meta property="og:url" content="https://yourdomain.com/terms-and-conditions" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | Aerocity Escorts" />
        <meta name="twitter:description" content="Read our Terms & Conditions to understand the rules and policies for using our website." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Aerocity Escorts",
            // url: "https://yourdomain.com",
            // telephone: "+91 9999999999",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Aerocity",
              addressRegion: "Delhi",
              addressCountry: "IN"
            }
          })}
        </script>
      </Helmet>

      <Hero badge="Legal" title1="Terms &" title2="Conditions" title3="" description={`Last updated: 27/07/${currentYear}`} />

      <section className="mx-auto max-w-7xl space-y-6 py-12 lg:py-24 px-4 lg:px-16">
        {terms.map((term, i) => (
          <div key={term.title} className="flex flex-col gap-3 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
            <h2 className="flex items-baseline gap-3 text-2xl font-serif font-medium">
              <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}.
              </span>{" "}
              {term.title}
            </h2>
            <p className="text-sm leading-6 opacity-70">{term.desc}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default TermsAndConditions