import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About" },
  { path: "/companions", label: "Companions" },
  { path: "/services", label: "Services" },
  { path: "/rates", label: "Rates" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navClass = ({ isActive }: { isActive: boolean }) => isActive ? "w-full lg:w-fit font-medium hover:text-[#D9C27B]" : "w-full lg:w-fit hover:text-[#D9C27B]";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 md:px-8 flex items-center justify-between gap-4 border-b border-transparent transition duration-300 ${scrolled ? "bg-black/50 backdrop-blur-xl border-[#D9C27B]/30!" : "bg-transparent"}`}>
      <NavLink to="/" className="flex items-center gap-2 font-serif">
        <span className="bg-[linear-gradient(135deg,#E9D7A6,#C79A43,#8D6A3A)] bg-clip-text text-transparent text-2xl font-medium">Aerocity</span>
        <span className="text-2xl font-medium text-white/80">Escorts</span>
      </NavLink>

      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={navClass}>
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="rounded-full bg-[linear-gradient(135deg,#E9D7A6,#C79A43,#8D6A3A)] px-6 py-3 text-sm text-black font-semibold transition-all duration-300 hover:scale-105">
          Book Now
        </NavLink>
      </div>

      <button onClick={()=>setMenuOpen(!menuOpen)} className="lg:hidden text-[#D9C27B]" aria-label="Open navigation menu">
        {menuOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-[#D9C27B]/30 p-6 flex flex-col gap-8"
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="flex justify-between gap-4">
              <NavLink to="/" className="flex items-center gap-2 font-serif">
                <span className="bg-[linear-gradient(135deg,#E9D7A6,#C79A43,#8D6A3A)] bg-clip-text text-transparent text-2xl font-medium">Aerocity</span>
                <span className="text-2xl font-medium text-white/80">Escorts</span>
              </NavLink>
              <X className="cursor-pointer" onClick={()=>setMenuOpen(false)}/>
            </div>

            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} onClick={()=>setMenuOpen(false)} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
              <NavLink to="/contact" className="w-full rounded-full bg-[linear-gradient(135deg,#E9D7A6,#C79A43,#8D6A3A)] px-6 py-3 text-sm text-center text-black font-semibold transition-all duration-300 hover:scale-105">
                Book Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header