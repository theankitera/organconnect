import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import HeroScene from "../../three/HeroScene";

const stats = [
  { value: "2,400+", label: "Lives Connected" },
  { value: "180+", label: "Partner Centers" },
  { value: "24/7", label: "Live Matching" },
  { value: "12 min", label: "Avg. Response" },
];

const Hero3D = (props) => {
  const history = useHistory();

  return (
    <section className="oc-hero">
      <HeroScene />
      <div className="oc-hero-content">
        <div>
          <span className="oc-hero-badge">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#5eead4",
                display: "inline-block",
                boxShadow: "0 0 12px #5eead4",
              }}
            />
            Live Organ Network
          </span>
          <h1 className="oc-hero-title">
            Connecting Centers.
            <br />
            <span className="oc-grad">Saving Lives.</span>
          </h1>
          <p className="oc-hero-sub">
            OrganConnect unites procurement and transplant centres on one
            real-time platform. Request compatible organs in clicks, not calls —
            verified, tracked and secure from match to transfer.
          </p>
          <div className="oc-hero-cta">
            <span className="oc-btn oc-btn-primary" onClick={() => {
              const el = document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M5 10l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Organs
            </span>
            <span
              className="oc-btn oc-btn-ghost"
              onClick={() =>
                localStorage.getItem("jwt")
                  ? history.push("/user/orders")
                  : document.querySelector(".userDropdownBtn, [title='Login']")?.click()
              }
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Raise a Request
            </span>
          </div>
          <div className="oc-hero-stats">
            {stats.map((s, i) => (
              <div key={i} className={`oc-hero-stat oc-reveal oc-reveal-delay-${i + 1}`}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div />
      </div>
      <div className="oc-scroll-hint">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero3D;
