import { lazy } from "react";

const Hero = lazy(()=>import('../section/Hero'))

const terms = [
  { t: "Acceptance", d: "By accessing this website or engaging our services, you confirm you are at least 18 years old and agree to be bound by these terms." },
  { t: "Booking Policy", d: "All bookings are subject to companion availability and concierge confirmation. Times and services agreed at booking are final unless mutually varied." },
  { t: "User Responsibilities", d: "Clients agree to treat all companions with respect and courtesy, to honour confirmed bookings, and to disclose any information necessary for a safe engagement." },
  { t: "Payments", d: "Payment terms are confirmed at booking. Accepted methods include cash, UPI, secure bank transfer and select international options. Deposits may be required for extended engagements." },
  { t: "Cancellations", d: "Cancellations made more than 24 hours in advance incur no fee. Cancellations within 24 hours may forfeit any deposit paid. No-shows are charged in full." },
  { t: "Privacy", d: "We maintain strict confidentiality. Clients are similarly expected to respect the privacy of companions and any information shared during engagements." },
  { t: "Intellectual Property", d: "All content on this website — images, text, design, and marks — is the property of Aerocity Escorts and may not be reproduced without written permission." },
  { t: "Disclaimer", d: "Aerocity Escorts provides companionship services only. Any private arrangement between adults during a booking is entirely their own and outside our involvement or liability." },
  { t: "Contact", d: "For any questions regarding these terms, please contact legal@aerocityescorts.example." },
]

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hero badge="Legal" title1="Terms &" title2="Conditions" title3="" description={`Last updated: 27/07/${currentYear}`} />

      <section className="mx-auto max-w-4xl space-y-6 py-12 lg:py-24 px-4 lg:px-16">
        {terms.map((s, i) => (
          <div key={s.t} className="rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
            <h2 className="text-2xl font-serif font-medium">
              <span className="mr-2 bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}.
              </span>{" "}
              {s.t}
            </h2>
            <p className="pt-3 text-sm leading-7 opacity-70">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default TermsAndConditions