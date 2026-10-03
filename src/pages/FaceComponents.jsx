import PageHero from "../components/PageHero";
import FaceCard from "../components/FaceCard";
import EnquiryStrip from "../components/EnquiryStrip";
import { FACE_ITEMS, SPARE_ITEMS } from "../data/products";

export default function FaceComponents() {
  return (
    <>
      <PageHero title="Mechanical Seal Face Components" variant="product" />
      <section className="aboutt">
        <div className="pusher-container">
          <div className="top-line">
            <span className="topLine">Premier provider of Mechanical Seal Faces & Components in India</span>
          </div>
          <h1>Sealventures India is a premier provider of high-performance</h1>
          <p className="intro">
            We specialize in <strong>mechanical seal faces and pump replacement components</strong>, providing{" "}
            <strong>precision-engineered solutions</strong> that enhance the reliability, longevity, and efficiency of
            rotating equipment across diverse industrial applications.
          </p>
          <h3>Our Specialized Material Range</h3>
          <p>
            We provide rotary and stationary (seat/mating) faces, rings, and bushes in Carbon graphite, Silicon carbide
            (SiC), Tungsten carbide (TC), and Ceramic 99.5% purity.
          </p>
          <h3>Premium Pump Spares & Components</h3>
          <p>
            We are a trusted supplier of replacement parts for Kirloskar, KSB, Beacon, Johnson, and Mather & Platt,
            including shafts, sleeves, impellers, casings, stuffing boxes, wear rings, bearing housings and covers.
          </p>
        </div>
      </section>
      <section className="seal-section">
        <div className="container">
          <div className="section-head">
            <h2>Mechanical Seal Faces</h2>
            <p>
              Sealventures India offers precision-engineered mechanical seal faces in materials like Carbon Graphite,
              Tungsten Carbide, Silicon Carbide, and Ceramic for reliable sealing in diverse rotating equipment.
            </p>
          </div>
          {FACE_ITEMS.map((item, i) => (
            <FaceCard key={item.title} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
      <section className="seal-section" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="section-head">
            <h2>Spares</h2>
            <p>
              We are suppliers of replacement parts for pumps from several manufacturers. Our inventory includes spares
              for pumps made by Kirloskar, KSB, Beacon, Johnson, and Mather & Platt.
            </p>
          </div>
          {SPARE_ITEMS.map((item, i) => (
            <FaceCard key={item.title} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
      <EnquiryStrip />
    </>
  );
}
