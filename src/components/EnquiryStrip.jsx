import { useEnquiry } from "../context/EnquiryContext";

export default function EnquiryStrip() {
  const { openEnquiry } = useEnquiry();
  return (
    <section className="enquiry-strip">
      <div className="container enquiry-flex">
        <p className="enquiry-text">
          Do you have queries about how <b>Sealventures</b> can help your company stay competitive across the industry?
          <br />
          Get in touch with us !
        </p>
        <div className="enquiry-action">
          <a
            href="#"
            className="enquiry-btn"
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
