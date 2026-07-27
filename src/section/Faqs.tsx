import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { lazy, useState } from "react";

const Hero = lazy(()=>import("../section/Hero"));

interface FaqsItem {
  q: string;
  a: string;
}

interface FaqsProps {
  faqs: FaqsItem[];
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero badge="Faqs" title1="Frequently asked questions" title2="" description="" />

      <section className="flex flex-col gap-3 py-12 lg:py-24 px-4 lg:px-16">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full bg-[#13100d] border border-[#f1ba4b]/30 p-6 rounded-2xl max-w-5xl mx-auto cursor-pointer transition duration-300 hover:border-[#f1ba4b]/80" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="font-medium font-serif">{faq.q}</h3>
              <Plus size={14} className={`text-[#f1ba4b] ${openIndex===index ? 'rotate-45' : ''}`} />
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-y-auto"
                >
                  <span className="text-sm opacity-70">{faq.a}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </>
  )
}

export default Faqs