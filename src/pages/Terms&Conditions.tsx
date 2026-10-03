import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { Helmet } from "react-helmet-async";
import type { ContactDetails } from "../components/SocialLinks";

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();

  const [contacts, setContacts] = useState<ContactDetails | null>(null);
        
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact"));

        if (!snapshot.empty) {
          const data = snapshot.docs[0].data() as ContactDetails;
          setContacts(data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContacts();
  }, []);

  if (!contacts) return null;

  const terms = [
    { title: "Acceptance", desc: "By accessing this website or engaging our services, you confirm you are at least 18 years old and agree to be bound by these terms." },
    { title: "Booking Policy", desc: "All bookings are subject to companion availability and concierge confirmation. Times and services agreed at booking are final unless mutually varied." },
    { title: "User Responsibilities", desc: "Clients agree to treat all companions with respect and courtesy, to honour confirmed bookings, and to disclose any information necessary for a safe engagement." },
    { title: "Payments", desc: "Payment terms are confirmed at booking. Accepted methods include cash, UPI, secure bank transfer and select international options. Deposits may be required for extended engagements." },
    { title: "Cancellations", desc: "Cancellations made more than 24 hours in advance incur no fee. Cancellations within 24 hours may forfeit any deposit paid. No-shows are charged in full." },
    { title: "Privacy", desc: "We maintain strict confidentiality. Clients are similarly expected to respect the privacy of companions and any information shared during engagements." },
    { title: "Intellectual Property", desc: "All content on this website — images, text, design, and marks — is the property of Agra Escorts and may not be reproduced without written permission." },
    { title: "Contact", desc: `For any questions regarding these terms, please contact +91 ${contacts.Phone1}.` },
  ]

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Agra Escort Service</title>

        <meta name="description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.agraescorts.pro/terms-and-conditions" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | Agra Escort Service" />
        <meta property="og:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />
        <meta property="og:url" content="https://www.agraescorts.pro/terms-and-conditions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | Agra Escort Service" />
        <meta name="twitter:description" content="Agra escort service, Call girl in agra, Call girl in fatehabad road agra, Escorts service in Agra, Escorts service in fatehabad road Agra" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EntertainmentBusiness",
            name: "Agra Escort Service",
            url: "https://www.agraescorts.pro",
            telephone: `+91 ${contacts.Phone1}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Agra",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            }
          })}
        </script>
      </Helmet>

      <div className="flex flex-col items-center gap-3 text-center max-w-5xl mx-auto mt-24 lg:mt-36 px-4 lg:px-16">
        <p className="text-sm font-medium uppercase tracking-widest text-[#f1ba4b]">Legal</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.02] max-w-4xl">Terms & <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent italic">Conditions</span></h1>
        <p className="md:text-lg max-w-2xl font-medium opacity-70">{`Last updated: 27/07/${currentYear}`}</p>
      </div>

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