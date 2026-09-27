import { WhatsApp } from "@mui/icons-material";
import { Phone } from "lucide-react";

const socials = [
  {
    label: "WhatsApp",
    number: "1",
    href: "https://wa.me/919762933940?text=Hello!%20I%20would%20like%20to%20know%20about%20escort%20services.",
    icon: WhatsApp,
  },
  {
    label: "WhatsApp",
    number: "2",
    href: "https://wa.me/916387201873?text=Hello!%20I%20would%20like%20to%20know%20about%20escort%20services.",
    icon: WhatsApp,
  },
  {
    label: "Phone",
    number: "1",
    href: "tel:+919762933940",
    icon: Phone
  },
  {
    label: "Phone",
    number: "2",
    href: "tel:+916387201873",
    icon: Phone
  }
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-18 right-4 flex flex-col gap-2 z-50">
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-white shadow-md hover:scale-110 transition duration-300" aria-label={s.label}>
          <s.icon className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold border border-white">
            {s.number}
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks