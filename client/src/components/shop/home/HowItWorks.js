import React, { useEffect, useRef, useState } from "react";
import TiltCard from "../../three/TiltCard";

const steps = [
  {
    title: "Register Your Center",
    body: "Procurement and transplant centres onboard with verified credentials and capacity profiles.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Raise an Organ Request",
    body: "Specify organ type, compatibility window and urgency — the network sees it instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6.5-8 11-8 11z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Smart Compatibility Match",
    body: "Our engine ranks candidates by blood type, proximity, cross-match and time-criticality.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Approve & Transfer",
    body: "One-tap approvals, audit trails and live handover status until the organ reaches the table.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Counter = ({ end, suffix = "", duration = 1600 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

const HowItWorks = (props) => {
  return (
    <section id="how-it-works" className="oc-section">
      <div className="oc-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="oc-section-tag">How it works</span>
        <h2 className="oc-section-title">
          From request to recovery in <em>four moves</em>
        </h2>
        <p className="oc-section-desc" style={{ margin: "1rem auto 0" }}>
          No phone trees. No faxed reports. A single flow that procurement
          teams, transplant surgeons and coordinators all share.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {steps.map((step, i) => (
          <div key={i} className={`oc-reveal oc-reveal-delay-${(i % 4) + 1}`}>
            <TiltCard maxTilt={7} className="" >
              <div style={{ padding: "2rem 1.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem" }}>
                  <div className="oc-icon-bubble">{step.icon}</div>
                  <div className="oc-step-num">{i + 1}</div>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#134e4a", marginBottom: "0.6rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {step.body}
                </p>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>

      <div
        className="oc-reveal oc-glass"
        style={{
          marginTop: "3.5rem",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f766e" }}>
            <Counter end={12840} suffix="+" />
          </div>
          <div className="oc-chip" style={{ marginTop: "0.4rem" }}>Requests fulfilled</div>
        </div>
        <div>
          <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f766e" }}>
            <Counter end={98} suffix="%" />
          </div>
          <div className="oc-chip" style={{ marginTop: "0.4rem" }}>Match accuracy</div>
        </div>
        <div>
          <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f766e" }}>
            <Counter end={26} suffix=" states" />
          </div>
          <div className="oc-chip" style={{ marginTop: "0.4rem" }}>Network coverage</div>
        </div>
        <div>
          <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0f766e" }}>
            <Counter end={430} suffix="+" />
          </div>
          <div className="oc-chip" style={{ marginTop: "0.4rem" }}>Hospital partners</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
