import PageHero from "../components/PageHero";
import EnquiryStrip from "../components/EnquiryStrip";
import Slider from "../components/Slider";
import StarRating from "../components/StarRating";
import { OVERVIEW_FEATURES, REVIEWS, enc } from "../data/site";

const NUM_CLASS = ["blue", "lightBlue", "red", "green"];

export default function Overview() {
  return (
    <>
      <PageHero title="About Us" crumb="About Us" variant="about" />
      <section className="about-sectionn">
        <div className="about-containerr">
          <div className="about-imagee">
            <img src={enc("/img/overview/About Us Pictures.png")} alt="Sealventures About" />
          </div>
          <div className="about-contentt">
            <span className="about-tagg">About Sealventures</span>
            <h2>Matter of Accuracy is the root concern for Sealventures India Private Limited.</h2>
            <p>
              In designing and manufacturing seals and associated precision products, we are a leading manufacturer,
              supplier, and exporter of high-performance mechanical seals, sealing components, and seal support systems,
              delivering customized sealing solutions for a wide range of rotating equipment such as{" "}
              <strong>pumps, mixers, reactors, agitators, blenders, and blowers.</strong>
            </p>
            <p>
              Our products are trusted across diverse industries because of our proven ability to engineer and
              manufacture seals that precisely match customer specifications, drawings, or samples, ensuring a perfect
              fit and reliable performance.
            </p>
            <p>
              Designed to withstand demanding process conditions—including adverse environments, high rotational speeds,
              and extreme pressure levels—our robust sealing technologies support critical sectors such as{" "}
              <strong>oil & gas, petrochemicals, chemicals, pharmaceuticals, fertilizers, power generation, mining,
              pulp & paper, aerospace, and marine.</strong>
            </p>
          </div>
        </div>
        <div className="para">
          <p>
            Our extensive portfolio of mechanical seals includes specialized products designed for diverse applications,
            such as <strong>Conical Spring, Single Spring, Multi Spring, and Wave Spring Seals</strong>. We also offer
            robust <strong>Rubber Bellow, PTFE Bellow, Cartridge, Metal Bellow, Agitator, Reactor, and Dry Running Seals,
            along with Split</strong> and other custom-engineered solutions.
          </p>
          <p>
            We pride ourselves on the quality of our sealing faces and components, which are meticulously crafted from
            premium materials like <strong>Tungsten Carbide, Silicon Carbide, Ceramic, Carbon, Segmented Carbon Rings,
            O-Rings, and PTFE</strong>.
          </p>
        </div>
      </section>

      <section className="feature-detail">
        {OVERVIEW_FEATURES.map((item, i) => (
          <div className="feature-row" id={item.id} key={item.id}>
            <div className="feature-text">
              <div className="feature-head">
                <span className={`feature-num ${NUM_CLASS[i % 4]}`}>{item.num}</span>
                <h3>{item.title}</h3>
              </div>
              {item.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="feature-image">
              <img src={enc(item.img)} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
      <EnquiryStrip />
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
