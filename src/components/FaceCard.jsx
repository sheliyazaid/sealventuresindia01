import { enc } from "../data/site";
import { useEnquiry } from "../context/EnquiryContext";

export default function FaceCard({ item, reverse }) {
  const { openEnquiry } = useEnquiry();
  return (
    <div className={`seal-row ${reverse ? "reverse" : ""}`}>
      <div className="seal-img">
        <img src={enc(item.img)} alt={item.title} />
      </div>
      <div className="seal-content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a className="btn" onClick={openEnquiry}>
          ENQUIRY NOW
        </a>
      </div>
    </div>
  );
}
