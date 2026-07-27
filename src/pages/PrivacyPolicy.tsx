import Heading from "../section/Hero";

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
      <section className="mx-auto max-w-7xl px-6 pt-38">
        <Heading badge="Legal"
          title={
            <>
              Privacy{" "}
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                Policy
              </span>
            </>
          } 
          subtitle={`Last updated: 27/07/${currentYear}`}
        />
      </section>

      <section className="mx-auto my-16 max-w-4xl space-y-6 px-6 pb-24">
        {policy.map((s, i) => (
          <div key={s.t} className="rounded-3xl border border-[#514d45]/30 bg-[#2a2825] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#d4b54c]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]" >
            <h2 className="text-2xl font-semibold text-[#f5f3eb]">
              <span className="mr-2 bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text text-transparent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {s.t}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#b8b2a7]">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default PrivacyPolicy