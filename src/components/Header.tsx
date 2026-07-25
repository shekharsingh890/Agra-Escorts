import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/companions", label: "Companions" },
  { to: "/services", label: "Services" },
  { to: "/rates", label: "Rates" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 text-black/10 ${scrolled ? "bg-[#1f1d1b]/80 backdrop-blur-xl border-b border-[#514d45]/30 py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] bg-clip-text text-2xl font-semibold text-transparent">Aerocity</span>
          <span className="text-2xl font-semibold text-[#f5f3eb]/80">Escorts</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) => `text-sm tracking-wide transition-colors hover:text-[#d4b54c] ${isActive ? "text-[#d4b54c]" : "text-[#f5f3eb]/80"}`}>
              {n.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-5 py-2.5 text-sm font-medium text-[#1f1d1b] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
            Book Now
          </NavLink>
        </div>

        <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className="text-[#d4b54c] md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-6 mt-3 animate-fade-in rounded-2xl border border-[#514d45]/30 bg-[#1f1d1b]/90 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-3 text-sm text-[#f5f3eb] transition-colors hover:bg-[#d4b54c]/10">
                {n.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-linear-to-r from-[#f2e0a6] via-[#d4b54c] to-[#9e7b23] px-5 py-3 text-center text-sm font-medium text-[#1f1d1b] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,181,76,0.35)]">
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header