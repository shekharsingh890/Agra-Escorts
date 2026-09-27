import { NavLink } from "react-router-dom"

interface ProfileProps {
  id: number,
  image: string,
  name: string,
  age: number,
  city: string,
  height: string,
  languages: string,
  nationality?: string,
  availability?: string,
  tags?: string[],
  description?: string
}

const Profile: React.FC<ProfileProps> = ({ id, image, name, age, city, height, languages, availability, tags, description }) => {
  return (
    <div key={id} className="group overflow-hidden rounded-3xl border border-[#f1ba4b]/30 bg-[#13100d] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#f1ba4b]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,181,76,0.2)]">
      <div className="relative aspect-4/5 overflow-hidden">
        <img src={image} alt="Call girl in Agra" loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>

        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

        {tags && tags.length > 0 ? (
          <div className="absolute left-3 top-3 flex gap-2">
            {tags.map((t) => (<span key={t} className="rounded-full border border-[#f1ba4b]/30 bg-[#13100d]/70 px-3 py-1 text-[10px] uppercase tracking-widest text-[#f1ba4b] backdrop-blur-md">
                {t}
            </span>
            ))}
          </div>
        ) : null}

        <div className="absolute bottom-0 w-full p-5">
          <h3 className="text-2xl font-serif font-normal">{name}</h3>
          <p className="text-xs text-[#f1ba4b]">
            {age} yrs · {height} · {city}
          </p>
        </div>
      </div>

      <div className="space-y-2 p-5 text-xs text-[#b8b2a7]">
        <div>
          Languages:{" "}
          <span className="text-[#f5f3eb]">{languages}</span>
        </div>
        <div>
          Availability:{" "}
          <span className="text-[#f5f3eb]">{availability}</span>
        </div>
        <p className="line-clamp-2 leading-6">{description}</p>

        <NavLink to="/contact" className="mt-3 block rounded-full border border-[#f1ba4b] px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-widest text-[#f1ba4b] transition-all duration-300 hover:bg-[linear-gradient(135deg,#f7db98,#de9300,#a35e16)] hover:text-[#13100d]">
          View Details
        </NavLink>
      </div>
    </div>
  )
}

export default Profile