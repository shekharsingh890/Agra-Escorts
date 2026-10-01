import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { NavLink } from "react-router-dom";
import type { ContactDetails } from "./SocialLinks";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Companions", to: "/companions" },
  { label: "Services", to: "/services" },
  { label: "Rates", to: "/rates" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
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

  return (
    <footer className="border-t border-[#f1ba4b]/30 bg-[#090707]">
      <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <NavLink to="/" className="flex items-center gap-2 font-serif text-2xl font-medium">
            <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent">Agra</span>
            <span className="text-white/80">Escorts</span>
          </NavLink>
          <p className="leading-relaxed opacity-80">Elite, discreet luxury companionship for discerning gentlemen in Agra.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif uppercase text-[#f1ba4b]">Explore</h3>
          <div className="flex flex-col gap-2 opacity-70">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className="w-fit transition-colors duration-300 hover:text-[#f1ba4b]">
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif uppercase text-[#f1ba4b]">Legal</h3>
          <div className="flex flex-col gap-2 opacity-70">
            <NavLink to="/privacy-policy" className="w-fit transition-colors duration-300 hover:text-[#f1ba4b]">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-and-conditions" className="w-fit transition-colors duration-300 hover:text-[#f1ba4b]">
              Terms & Conditions
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif uppercase text-[#f1ba4b]">Contact</h3>
          <div className="flex flex-col gap-2 opacity-70 break-all">
            <span>Agra, Uttar Pradesh</span>
            <span>Available 24 / 7</span>
            <a href={`tel:+${91}${contacts.Phone1}`}>+91 {contacts.Phone1}</a>
            <a href={`tel:+${91}${contacts.Phone2}`}>+91 {contacts.Phone2}</a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-[#f1ba4b]/50 to-transparent" />

      <p className="text-center text-xs text-white/80 px-4 md:px-20 py-6">© {new Date().getFullYear()} Agra Escorts. All rights reserved. Adults 18+ only.</p>
    </footer>
  );
};

export default Footer;