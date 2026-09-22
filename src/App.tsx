import { useMemo, useState } from "react";
import { ArrowUpRight, Clock3, MapPin, Menu as MenuIcon, Star, Utensils, X } from "lucide-react";
import { business, filterMenu, menuCategories, menuItems } from "./data";

const heroImage = "https://images.openai.com/static-rsc-1/jcbQRMEWFCdJpXa7TMl5XG2R7ohpOItrOadipvY0Rk4rm3KXSMuy9b-OVYV3nffPGjqUqUTScKXqDuSxLsO7KSlF_0qPr6ov4Ggpy9-SXolEiNPQwbqjIffPsupZp--cODUJvTgEd6MqHFTulN2Ts8RFhfLdMidNAiOy_yPMVlo";

export default function App() {
  const [active, setActive] = useState<typeof menuCategories[number]>("All");
  const [open, setOpen] = useState(false);
  const visibleItems = useMemo(() => filterMenu(menuItems, active), [active]);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Food Plaza home">
          <span className="brand-mark">FP</span>
          <span>FOOD PLAZA<small>BETTIAH</small></span>
        </a>
        <div className={open ? "nav-links open" : "nav-links"}>
          <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
          <a href="#story" onClick={() => setOpen(false)}>Why Food Plaza</a>
          <a href="#visit" onClick={() => setOpen(false)}>Visit</a>
        </div>
        <a className="nav-cta" href={business.orderUrl} target="_blank" rel="noreferrer">Order online <ArrowUpRight size={17}/></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <MenuIcon/>}
        </button>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span/> SUPRIYA ROAD · BETTIAH</p>
          <h1>COME<br/><em>HUNGRY.</em><br/>LEAVE HAPPY.</h1>
          <p className="hero-lede">A neighbourhood food stop for quick bites, comfort plates and the kind of Indo-Chinese cravings that deserve a second order.</p>
          <div className="hero-actions">
            <a className="button primary" href="#menu">Explore menu <ArrowUpRight size={18}/></a>
            <a className="button secondary" href={business.orderUrl} target="_blank" rel="noreferrer">Order on Swiggy</a>
          </div>
          <div className="hero-meta">
            <span><Clock3 size={16}/> {business.hours}</span>
            <span><Star size={16} fill="currentColor"/> 4.2 on Swiggy</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-card">
            <img src={heroImage} alt="Food Plaza listing photo" />
            <div className="image-tag">BETTIAH<br/><b>FOOD / FAST / FRESH</b></div>
          </div>
          <div className="stamp">FOOD<br/><span>PLAZA</span><small>since 2018*</small></div>
        </div>
      </section>

      <section className="ticker"><div>FAST BITES <i>✦</i> LOCAL FAVOURITES <i>✦</i> BETTIAH'S SUPRIYA ROAD <i>✦</i> ORDER ONLINE <i>✦</i></div></section>

      <section id="story" className="intro shell">
        <div className="section-kicker">01 / THE PLACE</div>
        <div>
          <h2>Made for <span>cravings.</span><br/>Built for Bettiah.</h2>
          <p>Food Plaza sits on Supriya Road near the Old LIC Building and V2 Mall. Public listings describe it as a casual fast-food restaurant with dine-in, takeaway and delivery options.</p>
          <div className="proof-row">
            <div><strong>₹200–₹400</strong><small>typical price range</small></div>
            <div><strong>10AM–10PM</strong><small>listed daily hours</small></div>
            <div><strong>SUPrIYA</strong><small>roadside location</small></div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section">
        <div className="shell">
          <div className="menu-head">
            <div><div className="section-kicker">02 / WHAT TO EAT</div><h2>Pick your<br/><em>mood.</em></h2></div>
            <p>Explore the categories listed for the outlet. Items shown here are a small set of publicly listed favourites; availability can change.</p>
          </div>
          <div className="chips" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <button key={category} className={active === category ? "chip active" : "chip"} onClick={() => setActive(category)} role="tab" aria-selected={active === category}>{category}</button>
            ))}
          </div>
          <div className="food-grid">
            {visibleItems.map((item) => (
              <article className="food-card" key={item.name}>
                <div className="food-number">{String(visibleItems.indexOf(item)+1).padStart(2,"0")}</div>
                <div><p className="food-category">{item.category}</p><h3>{item.name}</h3><p>{item.description}</p></div>
                {item.price ? <strong className="food-price">₹{item.price}</strong> : <span className="listed">Listed favourite</span>}
              </article>
            ))}
            {visibleItems.length === 0 && <div className="empty">This category is listed publicly, but no individual item is currently shown in our verified menu set. <a href={business.orderUrl} target="_blank" rel="noreferrer">See the live menu →</a></div>}
          </div>
          <a className="menu-link" href={business.orderUrl} target="_blank" rel="noreferrer">See live ordering menu <ArrowUpRight size={18}/></a>
        </div>
      </section>

      <section className="feature shell">
        <div className="feature-image"><img src={heroImage} alt="Food Plaza in Bettiah" /></div>
        <div className="feature-copy"><div className="section-kicker">03 / LOCAL ENERGY</div><h2>One stop.<br/><em>Many cravings.</em></h2><p>Quick snack? Group order? Something spicy after a long day? The menu spans breakfast, starters, rice and biryani, noodles, pasta, burgers, rolls, drinks and pizza.</p><a href="#visit" className="text-link">Plan your visit <ArrowUpRight size={17}/></a></div>
      </section>

      <section id="visit" className="visit">
        <div className="shell visit-inner">
          <div><div className="section-kicker light">04 / FIND US</div><h2>See you<br/><em>at Supriya.</em></h2></div>
          <div className="visit-card">
            <div className="visit-line"><MapPin/><div><b>Food Plaza</b><span>{business.address}</span></div></div>
            <div className="visit-line"><Clock3/><div><b>Open daily</b><span>{business.hours}</span></div></div>
            <a className="button light-button" href="https://www.google.com/maps/search/?api=1&query=Food%20Plaza%20Supriya%20Cinema%20Road%20Bettiah" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand"><span className="brand-mark">FP</span><span>FOOD PLAZA<small>BETTIAH</small></span></div>
        <p>Designed for a local favourite. Built around verified public listing information.</p>
        <span>© {new Date().getFullYear()} Food Plaza</span>
      </footer>
    </main>
  );
}
