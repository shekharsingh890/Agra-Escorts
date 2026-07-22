import { useEffect, useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={scrollToTop} className={`fixed bottom-6 right-3 md:right-6 z-50 p-1 rounded-xl shadow-xl text-white bg-[linear-gradient(135deg,oklch(0.74_0.17_55),oklch(0.65_0.2_35))] hover:scale-105 border border-white transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
      <KeyboardArrowUp />
    </button>
  );
};

export default BackToTopButton;