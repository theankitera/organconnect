import React, { useState } from "react";

const faqs = [
  {
    q: "Who can raise an organ request on OrganConnect?",
    a: "Only verified transplant centres with an active transplantation licence. Procurement centres can respond to and fulfil requests raised by partner hospitals.",
  },
  {
    q: "How does the compatibility match work?",
    a: "The engine scores blood group, tissue type, donor-recipient distance, cold-ischaemia window and urgency flag, then ranks candidates for the requesting team to review.",
  },
  {
    q: "Is patient data stored on the platform?",
    a: "OrganConnect stores only the minimum necessary for matching — de-identified codes, blood/tissue metadata and centre contacts. Clinical records stay inside hospital systems.",
  },
  {
    q: "What happens after a procurement centre approves?",
    a: "A live handover timeline opens with transport ETA, custody checkpoints and temperature logs. Both centres see the same status until the transfer completes.",
  },
  {
    q: "How fast can a new centre go live?",
    a: "Credential verification typically takes 24–48 hours. Once approved, coordinators can raise and accept requests the same day.",
  },
];

const FAQ = (props) => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="oc-section">
      <div className="oc-reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span className="oc-section-tag">FAQ</span>
        <h2 className="oc-section-title">
          Questions, <em>answered</em>
        </h2>
      </div>

      <div style={{ maxWidth: "46rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {faqs.map((f, i) => (
          <div key={i} className={`oc-faq-item oc-reveal ${open === i ? "open" : ""}`}>
            <div
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 1.4rem",
                cursor: "pointer",
                fontWeight: 600,
                color: "#134e4a",
              }}
            >
              <span>{f.q}</span>
              <svg
                className="oc-faq-chevron"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2"
                style={{ flexShrink: 0, transform: open === i ? "rotate(180deg)" : "none" }}
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="oc-faq-body" style={{ padding: open === i ? "0 1.4rem" : "0 1.4rem" }}>
              <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "0.93rem" }}>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
