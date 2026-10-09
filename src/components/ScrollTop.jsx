import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      id="scrollTopBtn"
      className={show ? "show" : ""}
      aria-label="Back to top"
      title="Back to top"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp size={20} strokeWidth={2.4} aria-hidden="true" />
    </button>
  );
}
