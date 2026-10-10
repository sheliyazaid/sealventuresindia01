import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import EnquiryStrip from "../components/EnquiryStrip";
import Testimonials from "../components/Testimonials";
import { enc } from "../data/site";

export default function Management() {
  return (
    <>
      <PageHero title="About Us" crumb="Management Team" variant="management" />
      <section className="management-section">
        <div className="management-heading">
          <span className="manage-tag">Sealventures – The Best Have Arrived</span>
        </div>
        <div className="manager-row white-bg">
          <div className="manager-img">
            <img src={enc("/img/overview/Sahud Kadiwala.png")} alt="Sahud Imtiyaz Kadiwala" />
          </div>
          <div className="manager-content">
            <div className="feature-head">
              <span className="feature-numm">01</span>
              <h2>SAHUD IMTIYAZ KADIWALA</h2>
            </div>
            <p className="meta">
              <strong>[DIN-09136283]</strong>
              <br />
              Issued by Central Registration Centre, New Delhi
              <br />
              Managing Director <strong>[ADMINISTRATION & DEVELOPMENT CELL]</strong>
            </p>
            <p>
              Experienced and effective Business Development Manager bringing forth valuable industry experience and a
              passion for management. Results oriented with a proven track record of improving the market position of a
              company and maximizing opportunities for financial growth. Adept in analytical thinking, strategic
              planning, leadership, and building strong relationships with business partners.
            </p>
          </div>
        </div>
        <div className="manager-row grey-bg reverse">
          <div className="manager-img">
            <img src={enc("/img/overview/Rizwan Kadiwala.png")} alt="Rizwan Imtiyaz Kadiwala" />
          </div>
          <div className="manager-content">
            <div className="feature-head">
              <span className="feature-numm">02</span>
              <h2>RIZWAN IMTIYAZ KADIWALA</h2>
            </div>
            <p className="meta">
              <strong>[DIN-09136284]</strong>
              <br />
              Issued by Central Registration Centre, New Delhi
              <br />
              Managing Director <strong>[QUALITY & PRODUCTION CELL]</strong>
            </p>
            <p>
              A Product Manager is responsible for overseeing and improving a company’s product portfolio by conducting
              market research and analysis to identify opportunities, defining product requirements and specifications,
              guiding development, and shaping pricing and marketing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="reach-what management-what-we-do" style={{ backgroundColor: "transparent", backgroundImage: "none" }}>
        <div className="container">
          <span className="small-title">What We Do</span>
          <h2>Keeping industries running smoothly.</h2>
          <Accordion
            items={[
              { title: "Evolution Of The Mechanical Seal Market", body: "The mechanical seal market has undergone a substantial transformation driven by rapid industrialization, stringent environmental and safety regulations, and the growing emphasis on operational efficiency across critical sectors such as oil & gas, chemical processing, pharmaceuticals, and power generation." },
              { title: "Major Factors Driving Market Growth", body: "The major factors propelling market growth for Sealventures is the steady expansion of the automotive and industrial machinery sectors, rapid industrialization, increasing investments in infrastructure projects, and the rising demand for advanced, high-performance sealing solutions." },
              { title: "Major Expectations of Customers from Sealing Technology Companies", body: "Customers primarily expect highly reliable and customized solutions that precisely address their specific industrial needs, ensuring robust containment, performance optimization, and compliance with stringent safety and environmental regulations." },
              { title: "How Sealventures Meets These Expectations", body: "We consistently meet industry expectations by maintaining a steadfast commitment to quality, innovation, and operational excellence, supported by a skilled workforce and rigorous quality management systems." },
              { title: "A Leading Force in Precision Industrial Sealing Solutions", body: "Sealventures stands as a distinguished leader in the industrial sealing technology sector, leveraging decades of specialized expertise to deliver precision-engineered solutions that redefine operational excellence." },
              { title: "Leading Factors Behind Sealventures India’s Distinction", body: "Sealventures distinguishes itself through a steadfast commitment to innovation, quality, and customer-centric solutions in the sealing and engineering industry." },
            ]}
          />
        </div>
      </section>
      <EnquiryStrip />
      <Testimonials />
    </>
  );
}
