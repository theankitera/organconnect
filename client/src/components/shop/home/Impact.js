import React from "react";
import TiltCard from "../../three/TiltCard";

const voices = [
  {
    quote:
      "We used to lose hours on calls between centres. With OrganConnect, a compatible request reaches every viable transplant team in seconds.",
    name: "Dr. Ananya Rao",
    role: "Transplant Coordinator, Metro Care Hospital",
    initials: "AR",
  },
  {
    quote:
      "The audit trail alone transformed our compliance reviews. Every approval, every handover — timestamped and impossible to lose.",
    name: "Ravi Menon",
    role: "Procurement Centre Head, LifeFirst",
    initials: "RM",
  },
  {
    quote:
      "During a multi-organ case, the live tracking view kept the entire OR team calm. That's the difference between chaos and choreography.",
    name: "Sister Kavita Nair",
    role: "OT In-charge, Sunrise Transplant Institute",
    initials: "KN",
  },
];

const Impact = (props) => {
  return (
    <section id="impact" className="oc-section">
      <div className="oc-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="oc-section-tag">On the ground</span>
        <h2 className="oc-section-title">
          Trusted by the people who <em>run the clock</em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {voices.map((v, i) => (
          <div key={i} className={`oc-reveal oc-reveal-delay-${i + 1}`}>
            <TiltCard maxTilt={6}>
              <div style={{ padding: "2rem 1.7rem", display: "flex", flexDirection: "column", gap: "1.4rem", height: "100%" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(13,148,136,0.25)">
                  <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-7H5.5c0-2 1-3.5 3.17-4.17L7.17 6zm10 0A5.17 5.17 0 0012 11.17V18h7v-7h-3.5c0-2 1-3.5 3.17-4.17L17.17 6z" />
                </svg>
                <p style={{ color: "#374151", lineHeight: 1.8, fontSize: "0.95rem", flex: 1 }}>
                  {v.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#fff",
                      background: "linear-gradient(135deg, #0d9488, #fb7185)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {v.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#134e4a", fontSize: "0.95rem" }}>{v.name}</div>
                    <div style={{ color: "#6b7280", fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
