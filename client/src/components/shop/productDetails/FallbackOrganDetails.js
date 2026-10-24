import React from "react";
import { useHistory } from "react-router-dom";
import TiltCard from "../../three/TiltCard";

const FallbackOrganDetails = ({ organ }) => {
  const history = useHistory();

  return (
    <section className="oc-section" style={{ minHeight: "70vh" }}>
      <div className="oc-reveal" style={{ marginBottom: "2rem" }}>
        <span className="oc-section-tag">Demo listing</span>
        <h2 className="oc-section-title">{organ.pName}</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        <div className="oc-reveal">
          <TiltCard maxTilt={6}>
            <img
              src={organ.pImage}
              alt={organ.pName}
              style={{ width: "100%", display: "block", background: "#04100f" }}
            />
          </TiltCard>
        </div>

        <div className="oc-reveal oc-reveal-delay-2">
          <div className="oc-glass" style={{ padding: "2rem" }}>
            <p style={{ color: "#374151", lineHeight: 1.85 }}>{organ.pDescription}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.4rem" }}>
              <span className="oc-chip">{organ.pCondition}</span>
              <span className="oc-chip">Hub: {organ.pCity}</span>
              <span className="oc-chip">PIN: {organ.pPrice}</span>
            </div>

            <h4 style={{ marginTop: "1.8rem", fontWeight: 700, color: "#134e4a", marginBottom: "0.7rem" }}>
              Compatible blood groups
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {organ.pBlood.map((b) => (
                <span
                  key={b}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: 999,
                    background: "linear-gradient(120deg, #0d9488, #14b8a6)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                padding: "1rem",
                borderRadius: 12,
                background: "rgba(13,148,136,0.08)",
                border: "1px dashed rgba(13,148,136,0.4)",
                color: "#0f766e",
                fontSize: "0.88rem",
                lineHeight: 1.7,
              }}
            >
              This is a demonstration listing with offline artwork. Connect the
              OrganConnect server to see live organs from verified procurement
              centres.
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              <span className="oc-btn oc-btn-primary" onClick={() => history.push("/")}>
                Back to network
              </span>
              <span
                className="oc-btn oc-btn-ghost"
                style={{ color: "#0f766e", borderColor: "rgba(13,148,136,0.5)", background: "rgba(13,148,136,0.06)" }}
                onClick={() => history.push("/user/orders")}
              >
                My requests
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FallbackOrganDetails;
