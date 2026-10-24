import React, { Fragment } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Footer = (props) => {
  const history = useHistory();
  const year = moment().format("YYYY");

  return (
    <Fragment>
      <footer className="oc-footer">
        <span className="oc-footer-orb" style={{ width: 220, height: 220, top: -60, left: -40, background: "#0d9488" }} />
        <span className="oc-footer-orb" style={{ width: 180, height: 180, bottom: -50, right: -30, background: "#e11d48", animationDelay: "2s" }} />
        <div className="oc-footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#f0fdfa" }}>
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                <path d="M32 49s-15-9-15-20a8.5 8.5 0 0115-5.3A8.5 8.5 0 0147 29c0 11-15 20-15 20z" fill="#5eead4" />
                <path d="M19 30h7.5l3-6.5 4.5 13 3-6.5H45" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              OrganConnect
            </div>
            <p style={{ marginTop: "1rem", color: "rgba(204,251,241,0.7)", lineHeight: 1.8, maxWidth: "22rem", fontSize: "0.9rem" }}>
              A live network connecting organ procurement centres and transplant
              hospitals — replacing calls and faxes with verified, real-time
              requests.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.4rem", flexWrap: "wrap" }}>
              <span className="oc-chip" style={{ background: "rgba(94,234,212,0.1)", color: "#99f6e4", borderColor: "rgba(94,234,212,0.3)" }}>24/7 Network</span>
              <span className="oc-chip" style={{ background: "rgba(94,234,212,0.1)", color: "#99f6e4", borderColor: "rgba(94,234,212,0.3)" }}>Verified Centers</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#f0fdfa", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.12em", fontSize: "0.78rem", textTransform: "uppercase" }}>Network</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none", fontSize: "0.9rem", color: "rgba(204,251,241,0.7)" }}>
              <li><span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>View Organs</span></li>
              <li><span style={{ cursor: "pointer" }} onClick={() => { history.push("/"); setTimeout(() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" }), 120); }}>How it works</span></li>
              <li><span style={{ cursor: "pointer" }} onClick={() => { history.push("/"); setTimeout(() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }), 120); }}>FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#f0fdfa", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.12em", fontSize: "0.78rem", textTransform: "uppercase" }}>Account</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none", fontSize: "0.9rem", color: "rgba(204,251,241,0.7)" }}>
              <li><span style={{ cursor: "pointer" }} onClick={() => history.push("/user/orders")}>My Requests</span></li>
              <li><span style={{ cursor: "pointer" }} onClick={() => history.push("/user/profile")}>My Account</span></li>
              <li><span style={{ cursor: "pointer" }} onClick={() => history.push("/admin/dashboard")}>Admin Panel</span></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#f0fdfa", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.12em", fontSize: "0.78rem", textTransform: "uppercase" }}>Contact</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none", fontSize: "0.9rem", color: "rgba(204,251,241,0.7)" }}>
              <li>Transplant desk · 24/7</li>
              <li>support@organconnect.app</li>
              <li>
                <a href="https://github.com/theankitera" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  GitHub · theankitera
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="oc-divider-glow" style={{ maxWidth: "1280px", margin: "0 auto" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "1.4rem 1rem 1.8rem", fontSize: "0.82rem", color: "rgba(204,251,241,0.6)" }}>
          OrganConnect © Copyright {year} · Developed by{" "}
          <a href="https://github.com/theankitera" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            theankitera
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
