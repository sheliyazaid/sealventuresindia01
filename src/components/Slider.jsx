import { useCallback, useEffect, useRef, useState } from "react";

function getStep(element) {
  const card = element.firstElementChild;
  if (!card) return 300;
  const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
  return card.getBoundingClientRect().width + gap;
}

export default function Slider({ className = "", children }) {
  const ref = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const [dragging, setDragging] = useState(false);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [pagination, setPagination] = useState({ count: 1, index: 0 });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const step = getStep(el);
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const count = maxScroll ? Math.ceil(maxScroll / step) + 1 : 1;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft >= maxScroll - 4,
    });
    setPagination((current) => {
      const index = Math.min(count - 1, Math.round(el.scrollLeft / step));
      return current.count === count && current.index === index ? current : { count, index };
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    if (ref.current) observer.observe(ref.current);
    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [update, children]);

  const scrollByCard = (dir) => {
    const el = ref.current;
    el.scrollBy({ left: dir * getStep(el), behavior: "smooth" });
  };

  const scrollToPage = (index) => {
    const el = ref.current;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: Math.min(index * getStep(el), maxScroll), behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    drag.current = { down: true, x: e.pageX, left: ref.current.scrollLeft, moved: false };
  };
  const onMouseMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.pageX - d.x;
    if (Math.abs(dx) > 5 && !d.moved) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) ref.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    setDragging(false);
  };
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className="slider">
      <div className="slider-controls">
        <button type="button" className="slider-btn prev" aria-label="Previous items" disabled={edge.start} onClick={() => scrollByCard(-1)}>
          <i className="bx bx-chevron-left" aria-hidden="true" />
        </button>
        <button type="button" className="slider-btn next" aria-label="Next items" disabled={edge.end} onClick={() => scrollByCard(1)}>
          <i className="bx bx-chevron-right" aria-hidden="true" />
        </button>
      </div>

      <div
        ref={ref}
        className={`slider-track ${className} ${dragging ? "dragging" : ""}`}
        onScroll={update}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </div>
      <div className="slider-pagination" role="group" aria-label="Choose slider position">
        {Array.from({ length: pagination.count }, (_, index) => (
          <button
            key={index}
            type="button"
            className={`slider-dot ${pagination.index === index ? "active" : ""}`}
            aria-label={`Go to position ${index + 1}`}
            aria-current={pagination.index === index ? "true" : undefined}
            onClick={() => scrollToPage(index)}
          />
        ))}
      </div>
    </div>
  );
}