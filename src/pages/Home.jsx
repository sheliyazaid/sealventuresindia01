import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS, HERO_SLIDES, INDUSTRIES, REVIEWS, WHY_ITEMS, enc } from "../data/site";
import EnquiryStrip from "../components/EnquiryStrip";
import Accordion from "../components/Accordion";
import StarRating from "../components/StarRating";
import Slider from "../components/Slider";

const VIDEOS = ["\\videos\\Video 1.mp4", "/videos/Video 2.mp4", "/videos/Video 3.mp4", "/videos/Video 4.mp4"];
const videos = ["C:\\Users\\Saalim\\Downloads\\Sealventures\\videos\\Video 1.mp4"];
const WHY_ICONS = ["bx-cog", "bx-wrench", "bx-check-shield", "bx-customize", "bx-trending-up", "bx-world", "bx-medal", "bx-group"];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [openIndustry, setOpenIndustry] = useState(null);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
<section className="landing">
        <div className="landing-bg-container">
          {videoOk ? (
            <video
              className="landing-video"
              key={slide}
              playsInline
              muted
              autoPlay
              preload="auto"
              src={VIDEOS[slide % VIDEOS.length]}
              onEnded={() => setSlide((s) => (s + 1) % HERO_SLIDES.length)}
              onError={() => setVideoOk(false)}
            />
          ) : (
            <img className="landing-video" src={enc("/img/products/ALL SEALS - 2.png")} alt="" />
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
          <div className="welcome-box">
            <h4>Welcome To Sealventures India</h4>
            <p>
              Matter of accuracy is the root concern for SealVentures India Private Limited in designing and
              manufacturing seals and associated precision products.
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <img src="/img/png/Quality Assurance.png" alt="Quality Assurance" />
              <h5>Quality Assurance</h5>
              <p>Strict quality control at every stage of production and service to ensure reliable and durable performance.</p>
            </div>
            <div className="feature">
              <img src="/img/png/Certified Products.png" alt="Certified Products" />
              <h5>Certified Products</h5>
              <p>All products comply with international standards (ISO, ASME, CE, etc.), ensuring safety and performance.</p>
            </div>
            <div className="feature">
              <img src="/img/png/Global Reach.png" alt="Global Reach" />
              <h5>Global Reach</h5>
              <p>Serving clients across national and international markets with trusted mechanical products and services.</p>
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
                  <Link to={`/about/overview#${item.id}`}>Read More...</Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="product-slider-section">
        <div className="product-head">
          <span className="small-title">Our Features Product</span>
          <h2>Distinguished as a premier Indian manufacturer</h2>
          <p>
            Sealventures India leverages superior-grade substrates and advanced components to deliver uncompromising
            quality in every sealing solution.
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
            <h2>We Provide The Best Service For Our Client.</h2>
            <p>
              <strong>Sealventures India</strong> delivers reliable mechanical sealing solutions engineered for demanding
              operating conditions. Our seals ensure leak-free performance, reduced downtime, and extended service life
              in critical process applications.
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
            <img src="/img/world.png" className="world-map" alt="" />
          </div>
          <div className="reach-right">
            <span className="small-title">What We Do</span>
            <h2>Keeping industries running smoothly.</h2>
            <Accordion
              items={[
                { title: "Workplace Health, Safety & Environmental Protection", body: "We prioritize workplace safety, employee health, and environmental stewardship. All mechanical seal production processes are managed with rigorous safety and environmental controls. Our goal is a sustainable, safe, and responsible manufacturing environment." },
                { title: "Comprehensive Refurbishment & Support", body: "Beyond manufacturing, we offer expert repair and reconditioning services for all types of mechanical seals. Our goal is to extend the lifecycle of your equipment, reduce downtime, and provide cost-effective maintenance that restores your components to as-new performance levels." },
                { title: "Supply Precision Seal Components", body: "We provide a broad range of precision sealing solutions, seals, and metal hardware, which also comprise next-generation seal faces made of Silicon Carbide (SiC), Tungsten Carbide, and Carbon-Graphite materials." },
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
