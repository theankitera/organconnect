import React from "react";
import TiltCard from "../../three/TiltCard";

const features = [
  {
    title: "Real-time Match Engine",
    body: "Compatibility scoring across blood type, tissue, proximity and ischaemia windows — refreshed every second.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Verified Centers Only",
    body: "Every procurement and transplant centre is credential-audited before it can send or receive requests.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cold-chain Live Tracking",
    body: "Temperature, transit ETA and custody handoffs stream into one timeline for the receiving team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M12 2v20M4.93 6.93l14.14 10.14M4.93 17.07L19.07 6.93" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Audit-grade Records",
    body: "Immutable logs for every action — consent, approvals, transfers — ready for compliance reviews.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinejoin="round" />
        <path d="M14 2v6h6M9 15h6M9 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "24/7 Transplant Desk",
    body: "Round-the-clock coordinators and escalation paths when a case can't wait until morning.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "PAN-network Coverage",
    body: "From metro transplant hubs to district procurement units — one shared source of truth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" strokeLinecap="round" />
      </svg>
    ),
  },
];

const Features = (props) => {
  return (
    <section
      id="features"
      style={{
        background:
          "linear-gradient(180deg, rgba(204,251,241,0.35) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className="oc-section">
        <div className="oc-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="oc-section-tag">Why OrganConnect</span>
          <h2 className="oc-section-title">
            Built for the minutes that <em>decide everything</em>
          </h2>
          <p className="oc-section-desc" style={{ margin: "1rem auto 0" }}>
            Transplant logistics are brutal on time. Every module here exists to
            shave hours off coordination — and errors out of the process.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((f, i) => (
            <div key={i} className={`oc-reveal oc-reveal-delay-${(i % 3) + 1}`}>
              <TiltCard maxTilt={8}>
                <div style={{ padding: "2rem 1.6rem" }}>
                  <div className="oc-icon-bubble" style={{ marginBottom: "1.2rem" }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#134e4a", marginBottom: "0.6rem" }}>
                    {f.title}
                  </h3>
                  <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 1.75 }}>
                    {f.body}
                  </p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
