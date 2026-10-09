import { useState } from "react";

export default function Accordion({ items, variant = "home" }) {
  const [open, setOpen] = useState(0);

  if (variant === "management") {
    return (
      <div>
        {items.map((item, i) => (
          <div className={`accordion-item ${open === i ? "active" : ""}`} key={item.title}>
            <button className="accordion-header" type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {item.title}
              <span className="icon">↓</span>
            </button>
            <div className="accordion-content">
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className={`acc-item ${open === i ? "active" : ""}`} key={item.title}>
            <button className="acc-head" type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {item.title}
            <span className="arrow">↓</span>
            </button>
            <div className="acc-body"><p>{item.body}</p></div>
        </div>
      ))}
    </div>
  );
}
