import { useEffect, useState } from "react";
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
  Star
} from "lucide-react";
import { business, businessImages, filterMenu, menuCategories, menuItems } from "./data";

const gallery = businessImages;

const menuSlides = [
  {
    name: "Pizza",
    role: "Tandoori Paneer Pizza",
    description: "Oven-baked comfort with tandoori paneer, mozzarella, onion, capsicum and paprika — a full-flavour pick when the table wants pizza.",
    image: businessImages[3].src,
    meta: "TANDOORI · MOZZARELLA · CAPSICUM",
    price: "₹200"
  },
  {
    name: "Burgers",
    role: "Grilled Tikki Burger",
    description: "A familiar street-food favourite with a grilled veg tikki, built for a quick bite between everything else on the menu.",
    image: businessImages[1].src,
    meta: "GRILLED · TIKKI · QUICK BITE",
    price: "₹75"
  },
  {
    name: "Chinese",
    role: "Veg Manchurian",
    description: "The Chinese side of Food Plaza brings bold, savoury flavours to the table — from manchurian to stir-fried favourites.",
    image: businessImages[2].src,
    meta: "SAVOURY · SPICY · INDO-CHINESE",
    price: "₹190"
  },
  {
    name: "Rolls",
    role: "Chicken 2 Egg Roll With Mayo",
    description: "Chicken, egg and mayo wrapped into a proper handheld craving for when you want something fast, filling and messy in the best way.",
    image: businessImages[3].src,
    meta: "CHICKEN · EGG · MAYO",
    price: "₹88"
  },
  {
    name: "Rice & Biryani",
    role: "Veg Biryani",
    description: "Aromatic rice, vegetables and warming spices — the slower, fuller plate in a menu otherwise made for quick cravings.",
    image: businessImages[2].src,
    meta: "AROMATIC · SPICED · FULL PLATE",
    price: "₹155"
  },
  {
    name: "Snacks",
    role: "French Fries",
    description: "Golden, crisp and easy to share. The kind of side that disappears before anyone remembers who ordered it.",
    image: businessImages[1].src,
    meta: "CRISP · GOLDEN · SHAREABLE",
    price: "₹70"
  },
  {
    name: "Pasta",
    role: "Pasta",
    description: "A comforting pasta option for the days when noodles, rice and rolls are not quite the answer.",
    image: businessImages[3].src,
    meta: "COMFORT · SAUCY · EASY",
    price: "₹150"
  },
  {
    name: "Breakfast",
    role: "Chole Bhature",
    description: "Start the day with a proper North Indian favourite — hearty, familiar and made for a satisfying first plate.",
    image: businessImages[0].src,
    meta: "BREAKFAST · HEARTY · LOCAL",
    price: "₹140"
  }
];

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
  const [activeMenu, setActiveMenu] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [sent, setSent] = useState(false);\n  const [menuCategory, setMenuCategory] = useState<(typeof menuCategories)[number]>("All");

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

      <section id="menu" className="menu-experience reveal">
        <div className="menu-backgrounds" aria-hidden="true">
          {menuSlides.map((slide, index) => (
            <div
              key={slide.name}
              className={index === activeMenu ? "menu-background is-active" : "menu-background"}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>
        <div className="menu-overlay" aria-hidden="true" />

        <div className="menu-content">
          <div className="menu-top">
            <div className="menu-headline">
              <span className="menu-kicker">02 / THE MENU · FOOD PLAZA BETTIAH</span>
              <h2>Food Plaza is the<br />craving you build<br /><em>your day around.</em></h2>
            </div>

            <div className="menu-description" key={menuSlides[activeMenu].name}>
              <p>{menuSlides[activeMenu].description}</p>
            </div>
          </div>

          <div className="menu-bottom">
            <div className="menu-picker" role="tablist" aria-label="Food Plaza menu categories">
              {menuSlides.map((slide, index) => (
                <button
                  key={slide.name}
                  type="button"
                  className="menu-picker-item"
                  role="tab"
                  aria-selected={index === activeMenu}
                  aria-label={`Show ${slide.name} menu`}
                  onClick={() => setActiveMenu(index)}
                >
                  <span className={index === activeMenu ? "menu-active-dot is-active" : "menu-active-dot"} />
                  <span className="menu-thumb">
                    <img src={slide.image} alt="" />
                  </span>
                  <span className={index === activeMenu ? "menu-thumb-label is-active" : "menu-thumb-label"}>
                    {slide.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="menu-meta">
              <span className="menu-meta-name" key={menuSlides[activeMenu].role}>
                {menuSlides[activeMenu].role}
              </span>
              <span className="menu-meta-role" key={menuSlides[activeMenu].name}>
                {menuSlides[activeMenu].name} · {menuSlides[activeMenu].meta}
              </span>
              <span className="menu-meta-time">10 AM — 10 PM</span>
              <a className="menu-order-link" href={business.orderUrl} target="_blank" rel="noreferrer">
                Order online · {menuSlides[activeMenu].price} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="full-menu" className="section full-menu-section reveal">
        <div className="section-head compact">
          <div>
            <span className="section-kicker">03 / THE COMPLETE MENU</span>
            <h2>Every craving.<br /><em>One plaza.</em></h2>
          </div>
          <div className="full-menu-note">
            <strong>{filterMenu(menuItems, menuCategory).length} items</strong>
            <span>Live listing data · Swiggy + Zomato</span>
          </div>
        </div>

        <div className="menu-source-strip" role="tablist" aria-label="Menu categories">
          {menuCategories.map(category => (
            <button
              key={category}
              type="button"
              className={menuCategory === category ? "source-chip active" : "source-chip"}
              role="tab"
              aria-selected={menuCategory === category}
              onClick={() => setMenuCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="complete-menu-grid">
          {filterMenu(menuItems, menuCategory).map((item, index) => (
            <article className="complete-menu-card" key={`${item.name}-${item.category}-${index}`}>
              <div className="complete-menu-image">
                <img src={item.image || businessImages[3].src} alt={`${item.name} at Food Plaza Bettiah`} loading="lazy" />
                <span>{item.source}</span>
              </div>
              <div className="complete-menu-info">
                <div>
                  <span className="complete-menu-category">{item.category}</span>
                  <h3>{item.name}</h3>
                </div>
                <strong>{item.price ? `₹${item.price}` : "Price on listing"}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="menu-source-note">
          <span>PRICES SHOWN WHERE SWIGGY CURRENTLY EXPOSES THEM.</span>
          <span>ZOMATO ITEMS WITHOUT A PUBLICLY EXPOSED PRICE ARE MARKED “PRICE ON LISTING”.</span>
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
