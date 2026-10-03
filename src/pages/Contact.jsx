import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" variant="contact" />
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form">
              <h2>Get In Touch.</h2>
              <p className="sub-heading">
                At <strong>Sealventures</strong>, we partner with you to pinpoint the perfect sealing components for any
                application. Connect with us to share your project goals and request a comprehensive quote.
              </p>
              <ContactForm />
            </div>
            <div className="contact-info">
              <span className="section-label">Contact</span>
              <h2>We Are Always Ready For All Your Needs.</h2>
              <p>
                Delivering high-performance mechanical sealing solutions through precision engineering, advanced
                materials, and industry expertise.
              </p>
              <div className="info-grid">
                <div className="info-item">
                  <h4>Office</h4>
                  <p>B1, Ruheena Apartment, Near Western Park, Kashimira, Mira Road, Thane 401107, Maharashtra, India</p>
                </div>
                <div className="info-item">
                  <h4>Number</h4>
                  <p>+91 98217 86861 / 98205 88276</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>info@sealventuresindia.com</p>
                </div>
                <div className="info-item">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/Sealventuresindia">Facebook</a>
                    {" · "}
                    <a href="https://www.instagram.com/sealventuresindia/?hl=en">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="full-map">
        <iframe
          title="Sealventures location"
          src="https://www.google.com/maps?q=Western+Park%2C+Kashimira%2C+Mira+Road%2C+Maharashtra%2C+India&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
