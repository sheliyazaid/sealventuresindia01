import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS, HERO_SLIDES, INDUSTRIES, REVIEWS, WHY_ITEMS, enc } from "../data/site";
import EnquiryStrip from "../components/EnquiryStrip";
import Accordion from "../components/Accordion";
import StarRating from "../components/StarRating";
import Slider from "../components/Slider";

const IMGSLIDES = ["/img/homepage/slider1.png", "/img/homepage/slider2.png", "/img/homepage/slider3.png", "/img/homepage/slider4.png"];
const WHY_ICONS = ["bx-cog", "bx-wrench", "bx-check-shield", "bx-customize", "bx-trending-up", "bx-world", "bx-medal", "bx-group"];

const STATES = [
  { name: "Gujarat",       top: "49%", left: "12%" },
  { name: "Maharashtra",   top: "60%", left: "26%" },
  { name: "Delhi",         top: "29%", left: "31%" },
  { name: "Uttar Pradesh", top: "35%", left: "44%" },
  { name: "Tamil Nadu",    top: "89%", left: "36%" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [openIndustry, setOpenIndustry] = useState(null);
  const [videoOk, setVideoOk] = useState(true);
  const heroPointer = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const onHeroPointerDown = (event) => {
    if (event.target.closest(".hero-dot")) return;
    heroPointer.current = { x: event.clientX, y: event.clientY };
  };

  const onHeroPointerUp = (event) => {
    const start = heroPointer.current;
    heroPointer.current = null;
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    setSlide((current) => (current + (deltaX < 0 ? 1 : -1) + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <>
<section className="landing">
        <div
          className="landing-bg-container"
          onPointerDown={onHeroPointerDown}
          onPointerUp={onHeroPointerUp}
          onPointerCancel={() => {
            heroPointer.current = null;
          }}
        >
          {videoOk ? (
            <img
              className="landing-video"
              key={slide}
              draggable={false}
              playsInline
              muted
              autoPlay
              preload="auto"
              src={IMGSLIDES[slide % IMGSLIDES.length]}
              onEnded={() => setSlide((s) => (s + 1) % HERO_SLIDES.length)}
              onError={() => setVideoOk(false)}
            />
          ) : (
            <img className="landing-video" src={enc("/img/products/ALL SEALS - 2.png")} alt="" draggable={false} />
          )}

          <div className="landing-text">
            <div className="text-slides">
              {HERO_SLIDES.map((item, i) => (
                <div className={`text-slide ${i === slide ? "active" : ""}`} key={item.title} aria-hidden={i !== slide}>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            {/* slide indicators */}
            <div className="hero-dots" role="tablist" aria-label="Hero slides">
              {HERO_SLIDES.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={`Show slide ${i + 1}`}
                  className={`hero-dot ${i === slide ? "active" : ""}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="landing-bottom">
          {/* <div className="welcome-box">
            <h4>Welcome To Sealventures India</h4>
            <p>
              Matter of accuracy is the root concern for SealVentures India Private Limited in designing and
              manufacturing seals and associated precision products.
            </p>
          </div> */}
          <div className="features">
            <div className="feature">
              <img src="/img/png/Quality Assurance.png" alt="Quality Assurance" />
              <h5>Quality Assurance</h5>
              <p>Strict quality control at every stage of production and service to ensure reliable and durable performance.</p>
            </div>
            <div className="feature">
              <img src="/img/png/Certified Products.png" alt="Certified Products" />
              <h5>Certified Products</h5>
              <p>Products manufactured to meet relevant international standards, ensuring safety, quality, and performance.</p>
            </div>
            <div className="feature">
              <img src="/img/png/Global Reach.png" alt="Global Reach" />
              <h5>Global Reach</h5>
              <p>Serving clients across national and international markets with trusted mechanical products and services.</p>
            </div>
            <div className="feature">
              <img src="/img/png/precission.png" alt="Quality Assurance" />
              <h5>Precision Engineering</h5>
              <p>Delivering precision-engineered solutions designed to meet demanding industrial requirements with accuracy and consistency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={enc("/img/About Sealventures.png")} alt="About Sealventures" />
          </div>
          <div className="about-content">
            <span className="about-tag">About Sealventures</span>
            <h2>Matter of Accuracy is the root concern for Sealventures India Private Limited.</h2>
            <p>
              We design and manufacture precision mechanical seals, components, and support systems tailored to
              customer specifications. Our portfolio includes cartridge, bellows, agitator, split, and custom seals,
              backed by dependable engineering and quality control.
            </p>
            <Link to="/about/overview" className="about-btn site-cta">
              Read More...
            </Link>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-head">
          <span className="why-tag">Why Choose Us !</span>
          <h2>
            We are a rising national player in
            <br />
            precision engineering industry
          </h2>
          <p>
            Engaged in the manufacturing of mission critical precision components with close tolerances (2-10 microns)
            in critical assemblies, serving projects of high national importance through precision machining, assembly,
            testing and quality control.
          </p>
        </div>
        <div className="why-slider">
          <Slider className="why-track">
            {WHY_ITEMS.map((item, i) => (
              <div className="why-card" key={item.num}>
                <span className="num">{item.num}</span>
                <i className={`why-icon bx ${WHY_ICONS[i % WHY_ICONS.length]}`} aria-hidden="true" />
                <div className="why-card-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  {/* <Link to={`/about/overview#${item.id}`}>Read More...</Link> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="product-slider-section">
        <div className="product-head">
          <span className="small-title">Our Features Product</span>
          <h2>Sealing Innovation That Lasts</h2>
          <p>
            From standard solutions to custom-engineered designs, we help
            you find the perfect seal for every industrial application.
          </p>
        </div>
        <div className="product-slider">
          <Slider className="product-track">
            {FEATURED_PRODUCTS.map((p) => (
              <Link className="product-card" to={p.to} key={p.name}>
                <img src={enc(p.img)} alt={p.name} />
              </Link>
            ))}
          </Slider>
        </div>
      </section>

      <EnquiryStrip />

      <section className="industries">
        <div className="container">
          <div className="industries-head">
            <span className="small-title">Industries We Serve</span>
            <h2>Reliable Sealing Solutions for Every Industry</h2>
            <p>
              Our engineered solutions are trusted across a wide range of industries, delivering dependable performance
through Mechanical Seals, Sealing Components, Seal Support Systems, Bearing Isolator, Rotary union and
Precision-Machined Components for the most demanding operating conditions.
            </p>
          </div>
          <div className="industries-slider">
            <Slider className="industries-track">
              {INDUSTRIES.map((item, i) => (
                <div className={`industry-card ${openIndustry === i ? "active" : ""}`} key={item.title}>
                  <img className="industry-image" src={enc(item.image)} alt={`${item.title} industry`} />
                  <div className="industry-overlay">
                    <div className="overlay-content">
                      <span>{item.title}</span>
                      <button
                        className={`expand-btn ${openIndustry === i ? "active" : ""}`}
                        type="button"
                        aria-label={`${openIndustry === i ? "Hide" : "Show"} ${item.title} details`}
                        aria-expanded={openIndustry === i}
                        onClick={() => setOpenIndustry(openIndustry === i ? null : i)}
                      >
                        <i className="bx bx-right-arrow-alt" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className={`industry-content ${openIndustry === i ? "active" : ""}`}>
                    <button
                      className="industry-close"
                      type="button"
                      aria-label={`Close ${item.title} details`}
                      onClick={() => setOpenIndustry(null)}
                    >
                      <i className="bx bx-x" aria-hidden="true" />
                    </button>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="reach-what">
        <div className="container reach-flex">
          
<div className="reach-left">
  <span className="small-title">Our Reach</span>

  <div className="map-wrap">
    <img
      src="/img/homepage/indianMap.svg"
      className="world-map"
      alt="Map of India highlighting Gujarat, Maharashtra, Delhi, Uttar Pradesh, and Tamil Nadu"
    />
    {STATES.map((s, i) => (
      <span
        key={s.name}
        className="map-dot"
        style={{ top: s.top, left: s.left, animationDelay: `${i * 0.3}s` }}
        title={s.name}
      >
        <span className="map-dot-label">{s.name}</span>
      </span>
    ))}
  </div>
</div>
          <div className="reach-right">
            <span className="small-title">What We Do</span>
            <h2>Keeping industries running smoothly.</h2>
            <Accordion
              items={[
                { title: "Workplace Health, Safety & Environmental Protection", body: "We maintain rigorous workplace safety, employee health, and environmental practices to ensure responsible, sustainable, and compliant manufacturing operations." },
                { title: "Mechanical Seal Manufacturing.", body: "We manufacture OEM-quality and replacement mechanical seals engineered for precise fitment, reliable performance, and extended service life across diverse industrial applications." },
                { title: "Precision Machining & Engineering.", body: "Our CNC Turning, VMC Milling, and conventional machining capabilities deliver high-precision components with tight tolerances, consistent quality, and application-specific engineering." },
                { title: "Refurbishment & Technical Support.", body: "We repair and recondition mechanical seals to restore performance, extend equipment life, reduce downtime, and provide a cost-effective alternative to replacement." },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header">
          <h2 className="section-title">What our clients say about us</h2>
          <p className="section-description">
            Trusted by process-industry teams for dependable sealing solutions, responsive support, and consistent product quality.
          </p>
        </div>
        <div className="reviews-slider">
          <Slider className="reviews-track">
            {REVIEWS.map((r) => (
              <div className="review-card" key={r.name}>
                <div className="star-rating">
                  <StarRating />
                </div>
                <p className="review-text">“{r.text}”</p>
                <div className="reviewer-info">
                  <div>
                    <p className="reviewer-name">{r.name}</p>
                    <p className="reviewer-role">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
