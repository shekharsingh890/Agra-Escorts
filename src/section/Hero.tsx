interface HeroProps {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ badge, title1, title2, title3, description }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center max-w-5xl mx-auto mt-24 lg:mt-36 px-4 lg:px-16">
      <p className="text-sm font-medium uppercase tracking-widest text-[#f1ba4b]">{badge}</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.02] max-w-4xl">{title1} <span className="bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] bg-clip-text text-transparent italic">{title2}</span> <span>{title3}</span></h2>
      {description &&
        <p className="md:text-lg max-w-2xl font-medium opacity-70">{description}</p>
      }
    </div>
  )
}

export default Hero;