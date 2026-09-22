import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  ShoppingBag,
  Star,
  UtensilsCrossed
} from "lucide-react";
import { business, businessImages, filterMenu, menuCategories, menuItems } from "./data";

const gallery = businessImages;
const menuImageFor = (index: number) => gallery[index % gallery.length].src;

const localFeedback = [
  {
    name: "Aarav",
    location: "Supriya Road · Bettiah",
    quote: "A quick-stop kind of place — rolls, chowmein and burgers all in one menu.",
    tag: "ILLUSTRATIVE CARD"
  },
  {
    name: "Riya",
    location: "Bettiah Locality · Bettiah",
    quote: "The menu has enough variety for a group where everyone wants something different.",
    tag: "ILLUSTRATIVE CARD"
  },
  {
    name: "Kabir",
    location: "College Road · Bettiah",
    quote: "Food Plaza feels built for casual evenings when you want a familiar fast-food spread.",
    tag: "ILLUSTRATIVE CARD"
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<typeof menuCategories[number]>("All");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [sent, setSent] = useState(false);

  const visibleMenu = useMemo(
    () => filterMenu(menuItems, activeCategory).slice(0, 8),
    [activeCategory]
  );

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setReviewIndex(index => (index + 1) % localFeedback.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  const nextGallery = () => setGalleryIndex(index => (index + 1) % gallery.length);
  const prevGallery = () => setGalleryIndex(index => (index - 1 + gallery.length) % gallery.length);

  return (
    <main className="food-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="nav-brand" href="#hero">FOOD PLAZA<span>™</span></a>
        <div className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-order" href={business.orderUrl} target="_blank" rel="noreferrer">
          Order <ShoppingBag size={15} />
        </a>
      </nav>

      <section id="hero" className="food-hero">
        <div className="hero-photo-wash" aria-hidden="true">
          <img src={businessImages[0].src} alt="" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-sticky">
          <div className="hero-meta">
            <span>SUPRIYA ROAD · BETTIAH</span>
            <span>CHINESE · FAST FOOD · ROLLS · PIZZA</span>
          </div>

          <div className="hero-title" aria-label="Food Plaza">
            <span className="hero-title-shadow">PLAZA</span>
            <span className="hero-title-mid">PLAZA</span>
            <span className="hero-title-main">FOOD</span>
          </div>

          <div className="hero-side hero-side-left" aria-hidden="true">
            <span>CRAVE</span>
            <span>SAVOR</span>
            <span>UNFOLD</span>
            <span>BITE</span>
          </div>
          <div className="hero-side hero-side-right" aria-hidden="true">
            <span>FRESH</span>
            <span>SPICY</span>
            <span>LOCAL</span>
            <span>BETTIAH</span>
          </div>

          <div className="hero-center">
            <div className="hero-image">
              <img src={businessImages[3].src} alt="Food Plaza dish from the current Swiggy listing" />
            </div>
            <div className="hero-sticker">
              <small>GOOD FOOD</small>
              <strong>BETTER MOOD</strong>
            </div>
          </div>

          <div className="hero-copy">
            <span className="eyebrow">YOUR LOCAL CRAVING STOP.</span>
            <h1>FOOD THAT<br /><em>FEELS</em> LIKE HOME.</h1>
            <p>Big flavours, familiar favourites and a menu made for sharing around Bettiah.</p>
            <div className="hero-actions">
              <a className="button button-light" href={business.orderUrl} target="_blank" rel="noreferrer">
                Order online <ShoppingBag size={16} />
              </a>
              <a className="button button-ghost" href="#menu">
                Explore menu <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <span><Star size={12} fill="currentColor" /> 4.2 · 3.6K+ Swiggy ratings</span>
            <span><Clock3 size={12} /> 10 AM — 10 PM</span>
            <span><MapPin size={12} /> Old LIC Building · near V2 Mall</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>CRAVE · SAVOR · FRIED RICE · ROLLS · PIZZA · BURGERS · CHINESE · BETTIAH · </span>
          <span>CRAVE · SAVOR · FRIED RICE · ROLLS · PIZZA · BURGERS · CHINESE · BETTIAH · </span>
        </div>
      </div>

      <section id="menu" className="section menu-section reveal">
        <div className="section-head">
          <div>
            <span className="section-kicker">02 / THE MENU</span>
            <h2>Pick your<br /><em>craving.</em></h2>
          </div>
          <p>Switch categories. Hover the cards. Tap into a menu built around the favourites already listed for the Supriya Road outlet.</p>
        </div>

        <div className="category-scroller" role="tablist" aria-label="Menu categories">
          {menuCategories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? "category active" : "category"}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {visibleMenu.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-card-image">
                <img src={menuImageFor(index + 1)} alt="" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="menu-card-body">
                <div>
                  <small>{item.category}</small>
                  <h3>{item.name}</h3>
                </div>
                <strong>{item.price ? `₹${item.price}` : "ASK"}</strong>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="menu-cta">
          <span>More categories · more combinations · same local stop</span>
          <a href={business.orderUrl} target="_blank" rel="noreferrer">View full online menu <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section id="gallery" className="section gallery-section reveal">
        <div className="section-head compact">
          <div>
            <span className="section-kicker">03 / THE PLAZA FILES</span>
            <h2>Seen around<br /><em>Food Plaza.</em></h2>
          </div>
          <div className="gallery-controls">
            <button onClick={prevGallery} aria-label="Previous photo"><ChevronLeft /></button>
            <button onClick={nextGallery} aria-label="Next photo"><ChevronRight /></button>
          </div>
        </div>

        <div className="gallery-stage">
          <div className="gallery-main">
            <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} />
            <div className="gallery-caption">
              <span>LIVE BUSINESS MEDIA</span>
              <strong>{String(galleryIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</strong>
            </div>
          </div>
          <div className="gallery-stack">
            {gallery.map((image, index) => (
              <button
                key={image.src}
                className={index === galleryIndex ? "thumb active" : "thumb"}
                onClick={() => setGalleryIndex(index)}
                aria-label={`Show photo ${index + 1}`}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section location-section reveal">
        <div className="location-copy">
          <span className="section-kicker">04 / FIND US</span>
          <h2>Right in the<br /><em>Bettiah</em> flow.</h2>
          <p>{business.address}</p>
          <div className="location-facts">
            <span><MapPin /> Supriya Cinema Road</span>
            <span><Clock3 /> {business.hours}</span>
            <span><Navigation /> Near V2 Mall</span>
          </div>
          <a className="button button-dark" href={business.mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="map-shell">
          <div className="map-pin"><MapPin size={18} /></div>
          <iframe
            title="Food Plaza location on Google Maps"
            src={business.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-label">
            <strong>FOOD PLAZA</strong>
            <span>SUPRIYA ROAD · BETTIAH</span>
          </div>
        </div>
      </section>

      <section id="reviews" className="section reviews-section reveal">
        <div className="reviews-heading">
          <span className="section-kicker">05 / LOCAL VOICES</span>
          <h2>What the<br /><em>city says.</em></h2>
          <p>Public listing data currently shows Food Plaza at 4.2 with 3.6K+ Swiggy ratings. Individual customer names and quotes below are intentionally marked as illustrative until verified testimonials are supplied.</p>
          <a href={business.orderUrl} target="_blank" rel="noreferrer">See the live listing <ArrowUpRight size={15} /></a>
        </div>

        <div className="review-carousel">
          <div className="review-card">
            <div className="review-top">
              <span className="review-mark">“</span>
              <span className="review-tag">{localFeedback[reviewIndex].tag}</span>
            </div>
            <blockquote>{localFeedback[reviewIndex].quote}</blockquote>
            <div className="review-person">
              <div className="avatar">{localFeedback[reviewIndex].name[0]}</div>
              <div>
                <strong>{localFeedback[reviewIndex].name}</strong>
                <span>{localFeedback[reviewIndex].location}</span>
              </div>
            </div>
          </div>
          <div className="review-dots" aria-label="Review carousel">
            {localFeedback.map((review, index) => (
              <button
                key={review.name}
                className={index === reviewIndex ? "dot active" : "dot"}
                onClick={() => setReviewIndex(index)}
                aria-label={`Show feedback card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section reveal">
        <div className="about-image">
          <img src={businessImages[0].src} alt="Food Plaza storefront in Bettiah" />
          <div className="about-number">06</div>
        </div>
        <div className="about-copy">
          <span className="section-kicker">06 / ABOUT THE STOP</span>
          <h2>Local address.<br /><em>Big appetite.</em></h2>
          <p>Food Plaza is a Supriya Road food stop in Bettiah with a broad fast-food and Indo-Chinese menu spanning rolls, fried rice, chowmein, burgers, pizza, snacks, drinks and more.</p>
          <p>The site is designed around the same energy as the place: bold layers, quick movement, food-first imagery and small interactive moments that keep the page feeling alive.</p>
          <div className="about-strip">
            <span>BETTIAH</span>
            <span>EST. LOCAL FAVOURITE</span>
            <span>FOOD PLAZA™</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section reveal">
        <div className="contact-top">
          <span className="section-kicker">07 / CONTACT</span>
          <h2>Come hungry.<br /><em>Leave happy.</em></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <span>ORDER ONLINE</span>
            <h3>Skip the wait.</h3>
            <p>Use the current Swiggy listing for ordering and live delivery availability.</p>
            <a href={business.orderUrl} target="_blank" rel="noreferrer">Order on Swiggy <ShoppingBag size={17} /></a>
          </div>
          <div className="contact-card">
            <span>CALL / VISIT</span>
            <h3>Talk to the plaza.</h3>
            <p>{business.address}</p>
            <a href={business.phoneUrl}>+91 87896 59093 <Phone size={17} /></a>
          </div>
          <form className="contact-form" onSubmit={event => { event.preventDefault(); setSent(true); }}>
            <label>Your name<input required placeholder="Your name" /></label>
            <label>Your message<textarea required rows={3} placeholder="Booking, feedback or a question…" /></label>
            <button type="submit">{sent ? "MESSAGE READY ✓" : "SEND MESSAGE"} <ArrowRight size={17} /></button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <span>FOOD PLAZA™ · BETTIAH</span>
        <span>SUPRIYA ROAD · BIHAR 845438</span>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
        <a href="#hero" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
