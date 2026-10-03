import { useState } from "react";
import PageHero from "../components/PageHero";
import EnquiryStrip from "../components/EnquiryStrip";
import { CERTIFICATES, enc } from "../data/site";

export default function Certificates() {
  const [active, setActive] = useState(null);
  return (
    <>
      <PageHero title="Certificate" variant="certificate" />
      <section className="certificate-section">
        <div className="certificate-head">
          <span className="small-title">Certificate</span>
        </div>
        <div className="certificate-grid">
          {CERTIFICATES.map((c) => (
            <button className="certificate-card" type="button" key={c.img} onClick={() => setActive(c)}>
              <div className="certificate-img">
                <img src={enc(c.img)} alt={c.title} />
              </div>
              <div className="certificate-title">{c.title}</div>
            </button>
          ))}
        </div>
      </section>
      {active ? (
        <div className="modal show" onClick={() => setActive(null)}>
          <button className="close" type="button" onClick={() => setActive(null)}>
            &times;
          </button>
          <img className="modal-content" src={enc(active.img)} alt={active.title} />
        </div>
      ) : null}
      <EnquiryStrip />
    </>
  );
}
