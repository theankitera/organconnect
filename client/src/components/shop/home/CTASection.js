import React from "react";
import { useHistory } from "react-router-dom";
import MiniScene from "../../three/MiniScene";

const CTASection = (props) => {
  const history = useHistory();

  return (
    <div className="oc-cta-band oc-reveal">
      <MiniScene />
      <div className="oc-cta-inner">
        <span className="oc-section-tag" style={{ color: "#5eead4", background: "rgba(94,234,212,0.1)", borderColor: "rgba(94,234,212,0.3)" }}>
          Every minute counts
        </span>
        <h2
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#f0fdfa",
            marginTop: "1rem",
            lineHeight: 1.2,
          }}
        >
          Ready to put your centre on the live network?
        </h2>
        <p style={{ margin: "1.2rem auto 0", maxWidth: "36rem", color: "rgba(204,251,241,0.75)", lineHeight: 1.8 }}>
          Join 180+ procurement and transplant centres already coordinating on
          OrganConnect. Onboarding takes a day — impact starts immediately.
        </p>
        <div style={{ marginTop: "2.2rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span
            className="oc-btn oc-btn-primary"
            onClick={() => {
              const el = document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else history.push("/");
            }}
          >
            Browse Available Organs
          </span>
          <span className="oc-btn oc-btn-ghost" onClick={() => history.push("/")}>
            Talk to our team
          </span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
