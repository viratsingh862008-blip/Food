import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Navigation, Phone, ShoppingBag, Star } from "lucide-react";
import { businessImages } from "./data";
import MenuPage from "./MenuPage";
import AdminPanel from "./AdminPanel";
import { useSiteConfig } from "./siteConfig";
import { getHeroProgress, getHeroWordOffsets } from "./heroAnimation";
import LuxuryExperience from "./LuxuryExperience";

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.12 });
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}

function PublicSite() {
  const site = useSiteConfig();
  const [sent, setSent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
  useReveal();

  useEffect(() => {
    const updateHeroProgress = () => {
      setViewportWidth(window.innerWidth);
      const section = document.getElementById("hero");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setProgress(getHeroProgress(rect.top, section.offsetHeight, window.innerHeight));
    };
    updateHeroProgress();
    window.addEventListener("scroll", updateHeroProgress, { passive: true });
    window.addEventListener("resize", updateHeroProgress);
    return () => {
      window.removeEventListener("scroll", updateHeroProgress);
      window.removeEventListener("resize", updateHeroProgress);
    };
  }, []);

  const offsets = useMemo(() => getHeroWordOffsets(progress, viewportWidth), [progress, viewportWidth]);
  const opacity = 0.35 + progress * 0.65;

  return <main className="food-page">
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="nav-brand" href="/">{site.brand.name}<span>{site.brand.suffix}</span></a>
      <div className="nav-links"><a href="/menu">Menu</a><a href="#featured">Featured</a><a href="#location">Location</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <a className="nav-order" href={site.business.orderUrl} target="_blank" rel="noreferrer">{site.nav.orderLabel}<ShoppingBag size={15}/></a>
    </nav>

    <section id="hero" className="food-hero">
      <div className="hero-photo-wash" aria-hidden="true"><img src={businessImages[0].src} alt="" /></div>
      <div className="hero-sticky">
        <div className="hero-topline"><span>{site.brand.name} {site.brand.suffix}</span><span>{site.business.address.split(",")[0]} · BETTIAH</span></div>

        <div className="title-stack" aria-label="Food Plaza">
          <div className="hero-word hero-food-word" style={{transform:`translate(-50%, ${-progress * 22}px)`,opacity:0.96 + progress * 0.04}}>
            <span className="hero-word-shadow hero-food-blue">FOOD</span>
            <span className="hero-word-shadow hero-food-gold">FOOD</span>
            <span className="hero-word-front">FOOD</span>
          </div>
          <div className="hero-word hero-plaza-word" style={{transform:`translate(-50%, ${progress * 46}px)`,opacity:0.96 + progress * 0.04}}>
            <span className="hero-word-shadow hero-plaza-blue">PLAZA</span>
            <span className="hero-word-shadow hero-plaza-gold">PLAZA</span>
            <span className="hero-word-front">PLAZA</span>
          </div>
        </div>

        <div className="side-words side-left">
          {["crave","savor","unfold","bite"].map((word,i)=><span key={word} style={{transform:`translate3d(${offsets.left[i]}px,0,0)`,opacity}}>{word}</span>)}
        </div>
        <div className="side-words side-right">
          {["fresh","spicy","local","bettiah"].map((word,i)=><span key={word} style={{transform:`translate3d(${offsets.right[i]}px,0,0)`,opacity}}>{word}</span>)}
        </div>

        <div className="food-hero-visual">
          <div className="food-image-frame"><img src={businessImages[3].src} alt="Food Plaza food photo from its current listing" /></div>
          <div className="food-image-label"><span>GOOD FOOD</span><strong>BETTER MOOD</strong></div>
        </div>

        <div className="hero-copy">
          <span className="eyebrow">{site.hero.eyebrow}</span>
          <h1>FOOD THAT<br/><em>FEELS</em> LIKE HOME.</h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions"><a className="button button-light" href={site.business.orderUrl} target="_blank" rel="noreferrer">{site.hero.primaryCta}<ShoppingBag size={16}/></a><a className="button button-ghost" href="/menu">{site.hero.secondaryCta}<ArrowRight size={16}/></a></div>
        </div>

        <div className="hero-footer"><span>{site.business.rating} SWIGGY RATINGS</span><span>{site.business.hours}</span><span>{site.business.address}</span><ArrowUpRight size={18}/></div>
      </div>
    </section>

    <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>{site.ticker}</span><span>{site.ticker}</span></div></div>

    <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>{site.ticker}</span><span>{site.ticker}</span></div></div>

    <LuxuryExperience site={site} />
  </main>;
}

export default function App() {
  if (window.location.pathname === "/admin") return <AdminPanel/>;
  if (window.location.pathname === "/menu") return <MenuPage/>;
  return <PublicSite/>;
}
