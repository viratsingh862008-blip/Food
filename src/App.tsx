import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, MapPin, ShoppingBag } from "lucide-react";
import { business, businessImages } from "./data";
import { getHeroProgress, getHeroWordOffsets } from "./heroAnimation";

const leftWords = ["crave", "savor", "unfold", "bite"];
const rightWords = ["fresh", "spicy", "local", "bettiah"];
const marquee = "CRAVE · SAVOR · FRIED RICE · ROLLS · PIZZA · BURGERS · CHINESE · BETTIAH · ";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const update = () => {
      setViewportWidth(window.innerWidth);
      const section = document.getElementById("hero");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setProgress(getHeroProgress(rect.top, section.offsetHeight, window.innerHeight));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const offsets = useMemo(() => getHeroWordOffsets(progress, viewportWidth), [progress, viewportWidth]);
  const opacity = 0.35 + progress * 0.65;

  return (
    <main className="food-page">
      <section id="hero" className="food-hero">
        <div className="hero-photo-wash" aria-hidden="true">
          <img src={businessImages[0].src} alt="" />
        </div>

        <div className="hero-sticky">
          <div className="hero-topline">
            <span>FOOD PLAZA</span>
            <span>SUPRIYA ROAD · BETTIAH</span>
          </div>

          <div className="title-stack" aria-label="Food Plaza">
            <h1 className="title-layer title-blue">PLAZA</h1>
            <h1 className="title-layer title-orange">PLAZA</h1>
            <h1 className="title-layer title-gold">PLAZA</h1>
            <h1 className="title-layer title-front">FOOD</h1>
          </div>

          <div className="side-words side-left">
            {leftWords.map((word, i) => (
              <span key={word} style={{ transform: `translateX(${offsets.left[i]}px)`, opacity }}>{word}</span>
            ))}
          </div>
          <div className="side-words side-right">
            {rightWords.map((word, i) => (
              <span key={word} style={{ transform: `translateX(${offsets.right[i]}px)`, opacity }}>{word}</span>
            ))}
          </div>

          <div className="food-hero-visual">
            <div className="food-image-frame">
              <img src={businessImages[3].src} alt={businessImages[3].alt} />
            </div>
            <div className="food-image-label">
              <span>GOOD FOOD</span>
              <strong>BETTER MOOD</strong>
            </div>
          </div>

          <div className="hero-copy">
            <p>Chinese · Fast Food · Rolls · Pizza · Burgers</p>
            <h2>YOUR LOCAL<br /><em>CRAVING</em> STOP.</h2>
            <div className="hero-actions">
              <a href={business.orderUrl} target="_blank" rel="noreferrer">
                Order online <ShoppingBag size={17} />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Food%20Plaza%20Supriya%20Cinema%20Road%20Bettiah" target="_blank" rel="noreferrer">
                Visit us <MapPin size={17} />
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <span>4.2 · 3.6K+ SWIGGY RATINGS</span>
            <span>10 AM — 10 PM</span>
            <span>{business.address}</span>
            <ArrowUpRight size={18} />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Food Plaza menu keywords">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((copy) => (
            <span key={copy}>{marquee}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
