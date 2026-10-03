import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ProductSpec from "../components/ProductSpec";
import EnquiryStrip from "../components/EnquiryStrip";
import { PRODUCT_PAGES } from "../data/products";

export default function ProductCategory() {
  const { slug } = useParams();
  const page = PRODUCT_PAGES[slug];
  if (!page) {
    return (
      <section className="aboutt">
        <div className="pusher-container">
          <h1>Product not found</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero title={page.title} variant="product" />
      <section className="aboutt">
        <div className="pusher-container">
          <div className="top-line">
            <span className="topLine">{page.tag}</span>
          </div>
          <h1>{page.heading}</h1>
          {page.intro.map((p, i) => (
            <p className={i === 0 ? "intro" : undefined} key={p}>
              {p}
            </p>
          ))}
        </div>
      </section>
      {page.products.map((product, i) => (
        <ProductSpec key={product.id} product={product} reverse={i % 2 === 1} />
      ))}
      <EnquiryStrip />
    </>
  );
}
