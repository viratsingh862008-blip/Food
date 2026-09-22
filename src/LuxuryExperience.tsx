import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ShoppingBag, Sparkles, X } from "lucide-react";
import { businessImages, menuItems } from "./data";
import { SiteConfig } from "./siteConfig";

gsap.registerPlugin(ScrollTrigger);

const editorialDishes = [
  { name: "Veg Spring Roll", category: "Starter", price: "₹63", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2026/8/21/dc16365f-a84f-4948-a71e-f5f19c9958d9_b602813a-a55e-493b-b756-1365be8eea63.jpg", description: "Crisp, golden and made for the table." },
  { name: "Tandoori Paneer Pizza", category: "Pizza", price: "₹200", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop", description: "A bold, comfort-first pizza pick." },
  { name: "Chicken Fried Rice", category: "Wok", price: "₹213", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop", description: "Wok-tossed comfort with savoury depth." },
  { name: "Veg Biryani", category: "Rice", price: "₹155", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop", description: "Aromatic rice for a fuller plate." },
];

const testimonials = [
  "A neighbourhood food stop with a surprisingly wide menu.",
  "The kind of place you return to when the table wants something for everyone.",
  "Fast-food comfort, Indo-Chinese favourites and plenty to share.",
];

const galleryEditorial = [
  ...businessImages.map((x) => x.src),
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
];

function useLuxuryMotion() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-luxury-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 70, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.25, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true }
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-luxury-stagger]").forEach((group) => {
        gsap.fromTo(group.children, { y: 45, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.05, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 78%", once: true }
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, { yPercent: -12, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
    });
    return () => { cancelAnimationFrame(rafId); ctx.revert(); lenis.destroy(); };
  }, []);
}

function LuxuryCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => setActive(Boolean((e.target as HTMLElement).closest("a,button")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, [x, y]);
  return <motion.div className="luxury-cursor" style={{ x: sx, y: sy, scale: active ? 1.65 : 1 }} aria-hidden="true"><span /></motion.div>;
}

export default function LuxuryExperience({ site }: { site: SiteConfig }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [sent, setSent] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useLuxuryMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { if (menuOpen) modalRef.current?.focus(); }, [menuOpen]);

  const menuGroups = useMemo(() => ["Starters", "Mains", "Desserts"].map(category => ({
    category,
    items: menuItems.filter(item => {
      if (category === "Starters") return ["Starters", "Snacks/Rolls", "Rolls"].includes(item.category);
      if (category === "Desserts") return ["Desserts", "Drinks"].includes(item.category);
      return !["Starters", "Snacks/Rolls", "Rolls", "Desserts", "Drinks"].includes(item.category);
    }).slice(0, 7)
  })), []);

  return <>
    <LuxuryCursor />
    <section className="luxury-intro" data-luxury-reveal>
      <div className="luxury-intro-copy">
        <span className="luxury-kicker"><Sparkles size={13}/> A MORE CINEMATIC FOOD PLAZA</span>
        <h2>Made for<br/><em>big cravings.</em></h2>
        <p>We borrowed the restraint, pacing and editorial confidence of fine-dining digital experiences — then kept the personality unmistakably Bettiah.</p>
        <button className="luxury-outline-button" onClick={() => setMenuOpen(true)}>Open the full menu <ArrowRight size={15}/></button>
      </div>
      <div className="luxury-intro-orbit"><div className="orbit-ring"/><span>SUPRIYA ROAD · BETTIAH</span></div>
    </section>

    <section id="luxury-menu" className="luxury-section luxury-dishes" data-luxury-reveal>
      <div className="luxury-section-head">
        <div><span className="luxury-kicker">01 / EDITORIAL MENU</span><h2>Start with<br/><em>something memorable.</em></h2></div>
        <button className="luxury-text-link" onClick={() => setMenuOpen(true)}>View full menu <ArrowUpRight size={15}/></button>
      </div>
      <div className="luxury-dish-grid" data-luxury-stagger>
        {editorialDishes.map((dish, i) => <article className="luxury-dish-card" key={dish.name}>
          <div className="luxury-dish-media"><img src={dish.image} alt={dish.name} loading={i < 2 ? "eager" : "lazy"}/><span>{String(i + 1).padStart(2, "0")} / {dish.category}</span></div>
          <div className="luxury-dish-info"><div><h3>{dish.name}</h3><p>{dish.description}</p></div><strong>{dish.price}</strong></div>
        </article>)}
      </div>
    </section>

    <section id="luxury-about" className="luxury-section luxury-about" data-luxury-reveal>
      <div className="luxury-about-image"><img src={businessImages[0].src} alt="Food Plaza exterior" loading="lazy"/><div className="luxury-image-caption">BETTIAH / 845438</div></div>
      <div className="luxury-about-copy"><span className="luxury-kicker">02 / THE PLACE</span><h2>Local energy.<br/><em>Editorial soul.</em></h2><p>{site.about.paragraph1}</p><p>{site.about.paragraph2}</p><div className="luxury-signature">Food Plaza</div></div>
    </section>

    <section className="luxury-section tasting-section" data-luxury-reveal>
      <div className="luxury-section-head"><div><span className="luxury-kicker">03 / THE TABLE</span><h2>A table<br/><em>for every mood.</em></h2></div><p className="luxury-head-note">A seven-course idea translated into the Food Plaza language: something to begin, something substantial, something sweet — with room for the table to decide.</p></div>
      <div className="tasting-grid" data-luxury-stagger>
        {[
          ["01", "OPEN", "Spring rolls · chilli starters · shareable bites"],
          ["02", "WOK", "Fried rice · chowmein · Indo-Chinese favourites"],
          ["03", "COMFORT", "Pizza · burgers · rolls · biryani"],
        ].map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><i /></article>)}
      </div>
    </section>

    <section className="luxury-immersive" data-luxury-reveal>
      <div className="luxury-immersive-image" data-parallax><img src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/restaurant_bg.png" alt="" loading="lazy"/></div>
      <div className="luxury-immersive-overlay"><span className="luxury-kicker">04 / AFTER DARK</span><h2>Come for the craving.<br/><em>Stay for the mood.</em></h2><p>Warm light, bold food, quick conversation and the feeling of a proper local stop.</p></div>
    </section>

    <section className="luxury-section luxury-testimonials" data-luxury-reveal>
      <div><span className="luxury-kicker">05 / LOCAL VOICES</span><h2>Worth<br/><em>coming back to.</em></h2></div>
      <div className="testimonial-stage"><blockquote>“{testimonials[testimonial]}”</blockquote><div className="testimonial-meta"><span>FOOD PLAZA / BETTIAH</span><div><button aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)}><ChevronLeft size={17}/></button><span>0{testimonial + 1} / 0{testimonials.length}</span><button aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ChevronRight size={17}/></button></div></div></div>
    </section>

    <section id="reservations" className="luxury-section luxury-reservations" data-luxury-reveal>
      <div className="reservation-glow"/>
      <div className="reservation-copy"><span className="luxury-kicker">06 / RESERVATIONS</span><h2>Make a<br/><em>table happen.</em></h2><p>Planning a family meal, small celebration or simply want a table ready when you arrive?</p></div>
      <form className="reservation-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <label>Date<input required type="date"/></label><label>Time<select defaultValue="19:30"><option>18:30</option><option>19:30</option><option>20:30</option><option>21:30</option></select></label>
        <label>Guests<select defaultValue="2"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6+ guests</option></select></label>
        <label className="reservation-wide">Special requests<textarea rows={3} placeholder="Birthday, family table, dietary note…"/></label>
        <button type="submit" className="reservation-submit">{sent ? "REQUEST READY ✓" : "REQUEST A TABLE"}<ArrowRight size={16}/></button>
      </form>
    </section>

    <section className="luxury-section luxury-gallery" data-luxury-reveal>
      <div className="luxury-section-head"><div><span className="luxury-kicker">07 / VISUAL STORY</span><h2>Around<br/><em>the plaza.</em></h2></div><p className="luxury-head-note">A dense, editorial image rhythm keeps the page tactile without pretending every image is a verified menu item.</p></div>
      <div className="luxury-gallery-grid" data-luxury-stagger>{galleryEditorial.map((src, i) => <figure key={src + i} className={"gallery-tile gallery-tile-" + (i % 5)}><img src={src} alt={i < businessImages.length ? businessImages[i]?.alt || "Food Plaza" : "Editorial food photography"} loading="lazy"/><figcaption>{String(i + 1).padStart(2, "0")} / FOOD PLAZA</figcaption></figure>)}</div>
    </section>

    <footer className="luxury-footer">
      <div><span className="luxury-kicker">FOOD PLAZA™</span><h2>Good food.<br/><em>Better mood.</em></h2><p>{site.business.address}</p></div>
      <div className="luxury-footer-links"><a href="/menu">Menu <ArrowUpRight size={14}/></a><a href={site.business.mapsUrl} target="_blank" rel="noreferrer">Location <ArrowUpRight size={14}/></a><a href={site.business.orderUrl} target="_blank" rel="noreferrer">Order online <ShoppingBag size={14}/></a></div>
      <div className="luxury-footer-bottom"><span>SUPRIYA ROAD · BETTIAH · BIHAR 845438</span><a href="#hero">BACK TO TOP ↑</a></div>
    </footer>

    {menuOpen && <div className="menu-modal-backdrop" role="presentation" onMouseDown={e => { if (e.currentTarget === e.target) setMenuOpen(false); }}>
      <div className="menu-modal" ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Food Plaza full menu">
        <header><div><span className="luxury-kicker">FOOD PLAZA / FULL MENU</span><h2>Take your<br/><em>pick.</em></h2></div><button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={20}/></button></header>
        <div className="modal-menu-grid">{menuGroups.map(group => <section key={group.category}><h3>{group.category}</h3>{group.items.map(item => <div className="modal-menu-item" key={item.name + item.category}><span>{item.name}</span><i/><strong>{item.price ? "₹" + item.price : "Price on listing"}</strong></div>)}</section>)}</div>
      </div>
    </div>}
  </>;
}
