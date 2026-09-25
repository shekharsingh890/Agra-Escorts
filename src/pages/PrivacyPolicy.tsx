import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(()=>import('../section/Hero'))

const policies = [
  { title: "Information Collection", desc: "We collect only the information you voluntarily provide through our contact forms, phone calls or messaging channels — typically name, phone number, email, preferred date and service enquiry details. We do not collect sensitive personal data beyond what is necessary to arrange your booking." },
  { title: "Cookies", desc: "Our website uses minimal, non-tracking cookies solely to remember basic preferences and to ensure the site functions correctly. We do not use advertising or third-party tracking cookies." },
  { title: "Contact Forms", desc: "Information submitted via contact forms is transmitted securely and stored only for the duration required to fulfil your enquiry. Details are never sold, shared or used for marketing communications." },
  { title: "Data Usage", desc: "Personal information is used exclusively to respond to your enquiry, arrange bookings, and provide the requested companionship service. We do not use your data for any secondary purpose." },
  { title: "Security", desc: "We employ industry-standard security practices, including encrypted communications and restricted internal access, to protect any information shared with us." },
  { title: "Third Parties", desc: "We do not share client information with third parties except where strictly required by law. Payment providers process transactions under their own privacy terms." },
  { title: "User Rights", desc: "You may at any time request access to, correction of, or deletion of your personal information by contacting our concierge team. Requests are processed within 30 days." },
  { title: "Contact Information", desc: "For any privacy-related questions or requests, please email singhvikash7805@gmail.com." },
];

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Aerocity Escorts</title>
        <meta name="description" content="Read our Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our website." />
        <meta name="keywords" content="Call girls in delhi, Escorts service in delhi, Call girls in aerocity delhi, Escorts service in aerocity Delhi" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        {/* <link rel="canonical" href="https://yourdomain.com/privacy-policy" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Aerocity Escorts" />
        <meta property="og:description" content="Learn how we collect, use, and protect your personal information through our Privacy Policy." />
        {/* <meta property="og:url" content="https://yourdomain.com/privacy-policy" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Aerocity Escorts" />
        <meta name="twitter:description" content="Read our Privacy Policy to learn how your information is handled and protected." />

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

      <Hero badge="Legal" title1="Privacy" title2="Policy" title3="" description={`Last updated: 27/07/${currentYear}`} />

      <section className="mx-auto max-w-7xl space-y-6 py-12 lg:py-24 px-4 lg:px-16">
        {policies.map((policy, i) => (
          <div key={policy.title} className="flex flex-col gap-3 rounded-3xl bg-[#13100d] border border-[#f1ba4b]/30 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#f1ba4b]/80">
            <h2 className="flex items-baseline gap-3 text-2xl font-serif font-medium">
              <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {policy.title}
            </h2>
            <p className="text-sm leading-6 opacity-70">{policy.desc}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default PrivacyPolicy