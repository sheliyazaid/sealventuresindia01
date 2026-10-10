import Slider from "./Slider";
import StarRating from "./StarRating";
import { REVIEWS } from "../data/site";

export default function Testimonials({
  title = "What our clients say about us",
  description = "Trusted by process-industry teams for dependable sealing solutions, responsive support, and consistent product quality.",
}) {
  return (
    <section className="reviews-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      <div className="reviews-slider">
        <Slider className="reviews-track">
          {REVIEWS.map((review) => (
            <div className="review-card" key={review.name}>
              <div className="star-rating">
                <StarRating />
              </div>
              <p className="review-text">“{review.text}”</p>
              <div className="reviewer-info">
                <div>
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}