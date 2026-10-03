import { useState } from "react";

export default function ContactForm({ onSuccess }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    setLoading(true);
    setStatus("Sending...");
    try {
      const api = import.meta.env.VITE_CONTACT_API || "http://localhost:5000/contact";
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully.");
        form.reset();
        onSuccess?.();
      } else {
        setStatus("Could not send message. Please try again.");
      }
    } catch {
      setStatus("Could not reach the server. Email us at info@sealventuresindia.com.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Full Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="subject" type="text" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send A Message →"}
      </button>
      <p id="statusMsg">{status}</p>
    </form>
  );
}
