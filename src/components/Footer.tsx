import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Companions", to: "/companions" },
  { label: "Services", to: "/services" },
  { label: "Rates", to: "/rates" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <div className="mt-20 border-t border-[#d4b54c]/15 bg-[#070503] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <NavLink to="/" className="flex items-center gap-2">
              <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text text-2xl font-semibold text-transparent">Aerocity</span>
              <span className="text-2xl font-semibold text-[#f5f3eb]/80">Escorts</span>
            </NavLink>
            <p className="mt-4 text-sm leading-7 text-[#b8b2a7]">Elite, discreet luxury companionship for discerning gentlemen in Aerocity, Delhi.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#d4b54c]">Explore</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              {navItems.map((n) => (
                <NavLink key={n.to} to={n.to} className="text-[#b8b2a7] transition-colors duration-300 hover:text-[#d4b54c]">
                  {n.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#d4b54c]">Legal</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <NavLink to="/privacy-policy" className="text-[#b8b2a7] transition-colors duration-300 hover:text-[#d4b54c]">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms-and-conditions" className="text-[#b8b2a7] transition-colors duration-300 hover:text-[#d4b54c]">
                Terms & Conditions
              </NavLink>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#d4b54c]">Contact</h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[#b8b2a7]">
              <span>Aerocity, New Delhi</span>
              <span>Available 24 / 7</span>
              <span>booking@aerocityescorts.example</span>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-[#d4b54c]/50 to-transparent" />
        <p className="text-center text-xs text-[#b8b2a7]">© {new Date().getFullYear()} Aerocity Escorts. All rights reserved. Adults 18+ only.</p>
      </div>
    </div>
  );
};

export default Footer;