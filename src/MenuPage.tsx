import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Search, ShoppingBag } from "lucide-react";
import { filterMenu, menuCategories } from "./data";
import { useSiteConfig } from "./siteConfig";

export default function MenuPage() {
  const site = useSiteConfig();
  const [category, setCategory] = useState<(typeof menuCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const filtered = filterMenu(site.menuItems, category);
    if (!query.trim()) return filtered;
    const q = query.trim().toLowerCase();
    return filtered.filter(item => `${item.name} ${item.category}`.toLowerCase().includes(q));
  }, [site.menuItems, category, query]);

  return (
    <main className="menu-page">
      <nav className="menu-page-nav">
        <a href="/" className="nav-brand">{site.brand.name}<span>{site.brand.suffix}</span></a>
        <div className="menu-page-nav-links">
          <a href="/">Home</a>
          <a href="#menu-list">Menu</a>
          <a href="#menu-info">Info</a>
        </div>
        <a className="nav-order" href={site.business.orderUrl} target="_blank" rel="noreferrer">
          Order <ShoppingBag size={15} />
        </a>
      </nav>

      <header className="menu-page-hero">
        <div>
          <span className="section-kicker">FOOD PLAZA · BETTIAH</span>
          <h1>The complete<br /><em>menu.</em></h1>
        </div>
        <div className="menu-page-hero-copy">
          <p>Every current menu listing in one dedicated place. The homepage stays focused; this page is where the full food catalogue lives.</p>
          <div className="menu-source-badge">SWIGGY + ZOMATO LISTING DATA</div>
        </div>
      </header>

      <section className="menu-visual-strip" aria-label="Dish visual references">
        <div className="menu-visual-card">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2026/8/21/dc16365f-a84f-4948-a71e-f5f19c9958d9_b602813a-a55e-493b-b756-1365be8eea63.jpg" alt="Veg Spring Roll" />
          <span>VERIFIED LISTING PHOTO</span><strong>Veg Spring Roll</strong>
        </div>
        <div className="menu-visual-copy">
          <span>PHOTO RULE</span>
          <h2>No random dish photos.</h2>
          <p>We removed the old category-image approach that could put a spring roll beside a burger, rice or pizza. The full menu intentionally stays typographic unless a dish/image pairing is verified.</p>
        </div>
      </section>

      <section id="menu-list" className="menu-list-section">
        <div className="menu-list-toolbar">
          <div>
            <span className="section-kicker">01 / BROWSE</span>
            <h2>{items.length} <em>items</em></h2>
          </div>
          <label className="menu-search"><Search size={15} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search dishes…" /></label>
        </div>

        <div className="menu-category-bar" role="tablist" aria-label="Menu categories">
          {menuCategories.map(item => (
            <button key={item} className={category === item ? "source-chip active" : "source-chip"} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>

        <div className="menu-list-grid">
          {items.map((item, index) => (
            <article className="menu-list-card" key={`${item.name}-${item.category}-${index}`}>
              <div className="menu-list-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="menu-list-main">
                <span>{item.category} · {item.source}</span>
                <h3>{item.name}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
              <strong>{item.price ? `₹${item.price}` : "Price on listing"}</strong>
            </article>
          ))}
        </div>

        {!items.length && <div className="menu-empty">No dishes matched “{query}”.</div>}
      </section>

      <section id="menu-info" className="menu-info-band">
        <div><span>OPENING HOURS</span><strong>{site.business.hours}</strong></div>
        <div><span>ADDRESS</span><strong>{site.business.address}</strong></div>
        <a href={site.business.orderUrl} target="_blank" rel="noreferrer">Order from Food Plaza <ArrowUpRight size={15} /></a>
      </section>

      <footer className="site-footer menu-footer">
        <a href="/"><ArrowLeft size={14} /> Back to home</a>
        <span>FOOD PLAZA · BETTIAH</span>
        <a href={site.business.mapsUrl} target="_blank" rel="noreferrer">Find us <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
