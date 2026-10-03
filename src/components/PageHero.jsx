export default function PageHero({ title, crumb, variant = "product" }) {
  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>
          Home / <span>{crumb || title}</span>
        </p>
      </div>
    </section>
  );
}
