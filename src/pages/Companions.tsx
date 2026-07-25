import Heading from "../section/Heading"

const Companions = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-8 pt-38">
        <Heading badge="Our companions"
          title={
            <>
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text italic text-transparent">
                Elite
              </span>{" "}
              profiles
            </>
          } subtitle="Each companion is personally verified and interviewed by our concierge team."
        />
      </section>
    </>
  )
}

export default Companions