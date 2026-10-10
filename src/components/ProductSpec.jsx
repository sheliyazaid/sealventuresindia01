import { useState } from "react";
import { enc } from "../data/site";
import { useEnquiry } from "../context/EnquiryContext";

export default function ProductSpec({ product, reverse }) {
  const { openEnquiry } = useEnquiry();
  const [imageIndex, setImageIndex] = useState(0);
  const images = product.images?.length ? product.images : [product.img, product.img];

  const moveImage = (direction) => {
    setImageIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <section className={`productt ${reverse ? "dark-bg" : "light-bg"}`} id={product.id}>
      <div className={`product-grid ${reverse ? "reverse" : ""}`}>
        <header className="product-heading">
          <span className="code">{product.code}</span>
          <h2>{product.title}</h2>
        </header>
        <div className="product-details-row">
          <div className="product-img">
            <div className="product-image-slider" role="group" aria-label={`${product.title} images`}>
              <div className="product-image-track" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={enc(image)}
                    alt={`${product.code} view ${index + 1}`}
                    aria-hidden={imageIndex !== index}
                  />
                ))}
              </div>
              {images.length > 1 && (
                <>
                  <button className="product-image-control prev" type="button" aria-label="Previous product image" onClick={() => moveImage(-1)}>
                    <i className="bx bx-chevron-left" aria-hidden="true" />
                  </button>
                  <button className="product-image-control next" type="button" aria-label="Next product image" onClick={() => moveImage(1)}>
                    <i className="bx bx-chevron-right" aria-hidden="true" />
                  </button>
                  <div className="product-image-dots" aria-label="Product image position">
                    {images.map((image, index) => (
                      <button
                        key={`${image}-dot-${index}`}
                        type="button"
                        className={imageIndex === index ? "active" : ""}
                        aria-label={`Show product image ${index + 1}`}
                        aria-current={imageIndex === index ? "true" : undefined}
                        onClick={() => setImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="product-content">
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
          </div>
        </div>
        <div className="btn-group product-actions">
          <button className="btn primary" type="button" onClick={openEnquiry}>
            ENQUIRY NOW
          </button>
          <a className="btn secondary" href={enc(product.pdf)} download>
            DOWNLOAD
          </a>
        </div>
      </div>
    </section>
  );
}
