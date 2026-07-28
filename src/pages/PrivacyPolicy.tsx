import { lazy } from "react";

const Hero = lazy(()=>import('../section/Hero'))

const policy = [
  { t: "Information Collection", d: "We collect only the information you voluntarily provide through our contact forms, phone calls or messaging channels — typically name, phone number, email, preferred date and service enquiry details. We do not collect sensitive personal data beyond what is necessary to arrange your booking." },
  { t: "Cookies", d: "Our website uses minimal, non-tracking cookies solely to remember basic preferences and to ensure the site functions correctly. We do not use advertising or third-party tracking cookies." },
  { t: "Contact Forms", d: "Information submitted via contact forms is transmitted securely and stored only for the duration required to fulfil your enquiry. Details are never sold, shared or used for marketing communications." },
  { t: "Data Usage", d: "Personal information is used exclusively to respond to your enquiry, arrange bookings, and provide the requested companionship service. We do not use your data for any secondary purpose." },
  { t: "Security", d: "We employ industry-standard security practices, including encrypted communications and restricted internal access, to protect any information shared with us." },
  { t: "Third Parties", d: "We do not share client information with third parties except where strictly required by law. Payment providers process transactions under their own privacy terms." },
  { t: "User Rights", d: "You may at any time request access to, correction of, or deletion of your personal information by contacting our concierge team. Requests are processed within 30 days." },
  { t: "Contact Information", d: "For any privacy-related questions or requests, please email privacy@aerocityescorts.example." },
];

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hero badge="Legal" title1="Privacy" title2="Policy" title3="" description={`Last updated: 27/07/${currentYear}`} />

      <section className="mx-auto max-w-4xl space-y-6 py-12 lg:py-24 px-4 lg:px-16">
        {policy.map((s, i) => (
          <div key={s.t} className="rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]" >
            <h2 className="text-2xl font-serif font-medium">
              <span className="mr-2 bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {s.t}
            </h2>
            <p className="pt-3 text-sm leading-7 opacity-70">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default PrivacyPolicy