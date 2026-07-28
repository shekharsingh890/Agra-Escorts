import { WhatsApp } from "@mui/icons-material";
import { Phone } from "lucide-react";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919999999999?text=Hello!%20I%20would%20like%20to%20know%20about%20escort%20services.",
    icon: WhatsApp,
  },
  {
    label: "Phone",
    href: "tel:+919999999999",
    icon: Phone
  }
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-18 right-2 flex flex-col gap-2 z-50">
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] text-white shadow-md hover:scale-110 transition duration-300" aria-label={s.label}>
          <s.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks