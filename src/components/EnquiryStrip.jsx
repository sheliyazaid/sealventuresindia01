import { useEnquiry } from "../context/EnquiryContext";

export default function EnquiryStrip() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="enquiry-strip">
      <div className="container enquiry-flex">
        <p className="enquiry-text">
        Secure a professional evaluation of your needs. <br />
        <span> Achieve peak performance with <b>Sealventures</b> commitment
        to rigorous quality control and tight tolerance manufacturing.
        Let’s build something great - Connect with us now.</span>
        </p>
        <div className="enquiry-action">
          <a
            href="#"
            className="enquiry-btn site-cta"
            onClick={(e) => {
              e.preventDefault();
              openEnquiry();
            }}
          >
            ENQUIRY NOW
          </a>
          <div className="or-box">OR</div>
          <div className="call-box">
            <span>Call Us Now</span>
            <a href="tel:+919833254562">+91 98332 54562</a>
          </div>
        </div>
      </div>
    </section>
  );
}
