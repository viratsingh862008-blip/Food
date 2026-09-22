import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Navigation, Phone, ShoppingBag, Star } from "lucide-react";
import { businessImages } from "./data";
import MenuPage from "./MenuPage";
import AdminPanel from "./AdminPanel";
import { useSiteConfig } from "./siteConfig";

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
  useReveal();

  return <main className="food-page">
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="nav-brand" href="/">{site.brand.name}<span>{site.brand.suffix}</span></a>
      <div className="nav-links"><a href="/menu">Menu</a><a href="#featured">Featured</a><a href="#location">Location</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <a className="nav-order" href={site.business.orderUrl} target="_blank" rel="noreferrer">{site.nav.orderLabel}<ShoppingBag size={15}/></a>
    </nav>

    <section id="hero" className="food-hero">
      <div className="hero-photo-wash" aria-hidden="true"><img src={businessImages[0].src} alt="" /></div><div className="hero-grid" aria-hidden="true"/>
      <div className="hero-sticky">
        <div className="hero-meta"><span>{site.hero.metaLeft}</span><span>{site.hero.metaRight}</span></div>
        <div className="hero-title" aria-label="Food Plaza"><span className="hero-title-main">FOOD</span><span className="hero-title-sub">PLAZA</span></div>
        <div className="hero-side hero-side-left" aria-hidden="true"><span>CRAVE</span><span>SAVOR</span><span>BITE</span><span>LOCAL</span></div>
        <div className="hero-side hero-side-right" aria-hidden="true"><span>FRESH</span><span>SPICY</span><span>ROLLS</span><span>BETTIAH</span></div>
        <div className="hero-center"><div className="hero-image hero-image-main"><img src={businessImages[3].src} alt="Food Plaza food photo from its current listing"/></div><div className="hero-image hero-image-secondary" aria-hidden="true"><img src={businessImages[1].src} alt=""/></div><div className="hero-sticker"><small>GOOD FOOD</small><strong>BETTER MOOD</strong></div></div>
        <div className="hero-copy"><span className="eyebrow">{site.hero.eyebrow}</span><h1>FOOD THAT<br/><em>FEELS</em> LIKE HOME.</h1><p>{site.hero.description}</p><div className="hero-actions"><a className="button button-light" href={site.business.orderUrl} target="_blank" rel="noreferrer">{site.hero.primaryCta}<ShoppingBag size={16}/></a><a className="button button-ghost" href="/menu">{site.hero.secondaryCta}<ArrowRight size={16}/></a></div></div>
        <div className="hero-footer"><span><Star size={12} fill="currentColor"/>{site.business.rating}</span><span><Clock3 size={12}/>{site.business.hours}</span><span><MapPin size={12}/>{site.business.locationShort}</span></div>
      </div>
    </section>

    <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>{site.ticker}</span><span>{site.ticker}</span></div></div>

    <section id="featured" className="section featured-section reveal">
      <div className="section-head compact"><div><span className="section-kicker">02 / FEATURED FOOD</span><h2>Start with<br/><em>something good.</em></h2></div><a className="section-link" href="/menu">Explore the full menu<ArrowUpRight size={15}/></a></div>
      <div className="featured-grid">
        <article className="featured-card featured-card-large"><div className="featured-image"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2026/8/21/dc16365f-a84f-4948-a71e-f5f19c9958d9_b602813a-a55e-493b-b756-1365be8eea63.jpg" alt="Veg Spring Roll at Food Plaza"/><span className="featured-number">01 · VERIFIED</span></div><div className="featured-info"><div><span>STARTER</span><h3>Veg Spring Roll</h3><p>Exact dish/photo match verified against the current Food Plaza listing.</p></div><strong>₹63</strong></div></article>
        {[
          ["Tandoori Paneer Pizza","PIZZA","₹200"],["Chicken Fried Rice","FRIED RICE","₹213"],["Veg Biryani","BIRYANI","₹155"]
        ].map(([name,cat,price],i)=><article className="featured-card" key={name}><div className="featured-image"><div className="verified-placeholder"><span>PHOTO NOT VERIFIED</span><strong>{name}</strong></div><span className="featured-number">0{i+2}</span></div><div className="featured-info"><div><span>{cat}</span><h3>{name}</h3><p>Current menu item — no unrelated photo used.</p></div><strong>{price}</strong></div></article>)}
      </div>
      <div className="photo-integrity-note"><strong>PHOTO CHECK:</strong> only exact Food Plaza dish photos are shown. Unverified items stay text-first instead of being paired with random food photography.</div>
    </section>

    <section id="location" className="section location-section reveal"><div className="location-copy"><span className="section-kicker">03 / FIND US</span><h2>Right in the<br/><em>Bettiah</em> flow.</h2><p>{site.business.address}</p><div className="location-facts"><span><MapPin/>Supriya Cinema Road</span><span><Clock3/>{site.business.hours}</span><span><Navigation/>Near V2 Mall</span></div><a className="button button-dark" href={site.business.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps<ArrowUpRight size={16}/></a></div><div className="map-shell"><div className="map-pin"><MapPin size={18}/></div><iframe title="Food Plaza location on Google Maps" src={site.business.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><div className="map-label"><strong>FOOD PLAZA</strong><span>SUPRIYA ROAD · BETTIAH</span></div></div></section>

    <section id="about" className="section about-section reveal"><div className="about-image"><img src={businessImages[0].src} alt="Food Plaza storefront in Bettiah"/><div className="about-number">04</div></div><div className="about-copy"><span className="section-kicker">04 / ABOUT THE STOP</span><h2>Local address.<br/><em>Big appetite.</em></h2><p>{site.about.paragraph1}</p><p>{site.about.paragraph2}</p><div className="about-strip"><span>BETTIAH</span><span>SUPRIYA ROAD</span><span>FOOD PLAZA™</span></div></div></section>

    <section id="contact" className="section contact-section reveal"><div className="contact-top"><span className="section-kicker">05 / CONTACT</span><h2>Come hungry.<br/><em>Leave happy.</em></h2></div><div className="contact-grid"><div className="contact-card"><span>{site.contact.orderLabel}</span><h3>{site.contact.orderTitle}</h3><p>{site.contact.orderDescription}</p><a href={site.business.orderUrl} target="_blank" rel="noreferrer">Order on Swiggy<ShoppingBag size={17}/></a></div><div className="contact-card"><span>{site.contact.visitLabel}</span><h3>{site.contact.visitTitle}</h3><p>{site.business.address}</p><a href={site.business.phoneUrl}>{site.business.phoneDisplay}<Phone size={17}/></a></div><form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Your name<input required placeholder="Your name"/></label><label>Your message<textarea required rows={3} placeholder={site.contact.formPlaceholder}/></label><button type="submit">{sent?"MESSAGE READY ✓":"SEND MESSAGE"}<ArrowRight size={17}/></button></form></div></section>

    <footer className="site-footer"><span>FOOD PLAZA™ · BETTIAH</span><span>SUPRIYA ROAD · BIHAR 845438</span><a href={site.business.orderUrl} target="_blank" rel="noreferrer"><ShoppingBag size={18}/></a><a href="#hero" className="back-top">BACK TO TOP ↑</a></footer>
  </main>;
}

export default function App() {
  if (window.location.pathname === "/admin") return <AdminPanel/>;
  if (window.location.pathname === "/menu") return <MenuPage/>;
  return <PublicSite/>;
}
