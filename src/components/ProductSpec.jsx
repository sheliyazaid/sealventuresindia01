import { enc } from "../data/site";
import { useEnquiry } from "../context/EnquiryContext";

export default function ProductSpec({ product, reverse }) {
  const { openEnquiry } = useEnquiry();
  return (
    <section className={`productt ${reverse ? "dark-bg" : "light-bg"}`} id={product.id}>
      <div className={`product-grid ${reverse ? "reverse" : ""}`}>
        {!reverse ? (
          <div className="product-img">
            <img src={enc(product.img)} alt={product.code} />
          </div>
        ) : null}
        <div className="product-content">
          <span className="code">{product.code}</span>
          <h2>{product.title}</h2>
          {product.materials ? (
            <>
              <h4>Materials</h4>
              <p>
                {Object.entries(product.materials).map(([k, v]) => (
                  <span key={k}>
                    <strong>{k} :</strong> {v}
                    <br />
                  </span>
                ))}
              </p>
            </>
          ) : null}
          {product.range ? (
            <>
              <h4>Operating Range</h4>
              <p>
                {Object.entries(product.range).map(([k, v]) => (
                  <span key={k}>
                    <strong>{k}:</strong> {v}
                    <br />
                  </span>
                ))}
              </p>
            </>
          ) : null}
          {product.features?.length ? (
            <>
              <h4>Features</h4>
              <ul>
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          ) : null}
          {product.application?.length ? (
            <>
              <h4>Application</h4>
              <ul>
                {product.application.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          ) : null}
          <div className="btn-group">
            <a className="btn primary" onClick={openEnquiry}>
              ENQUIRY NOW
            </a>
            <a className="btn secondary" href={enc(product.pdf)} download>
              DOWNLOAD
            </a>
          </div>
        </div>
        {reverse ? (
          <div className="product-img">
            <img src={enc(product.img)} alt={product.code} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
