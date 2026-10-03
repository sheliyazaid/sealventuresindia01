import { useEnquiry } from "../context/EnquiryContext";
import ContactForm from "./ContactForm";

export default function EnquiryPopup() {
  const { open, closeEnquiry } = useEnquiry();
  return (
    <div className={`popup-overlay ${open ? "show" : ""}`} onClick={closeEnquiry}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeEnquiry}>
          &times;
        </span>
        <h2>Get In Touch</h2>
        <ContactForm onSuccess={closeEnquiry} />
      </div>
    </div>
  );
}
