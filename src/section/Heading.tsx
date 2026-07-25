import React from "react";

interface HeadingProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="mb-14 text-center font-serif">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#d4b54c]">{badge}</p>
      <h2 className="text-4xl! font-normal leading-tight text-[#f5f3eb] md:text-5xl! lg:text-6xl!">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#b8b2a7]">{subtitle}</p>
    </div>
  )
}

export default Heading;