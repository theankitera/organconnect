import React, { Fragment } from "react";

const items = [
  "Real-time Matching",
  "Verified Procurement Centers",
  "Cold-chain Tracking",
  "Zero Call Chaos",
  "Secure Medical Records",
  "24/7 Transplant Network",
];

const Marquee = (props) => {
  return (
    <div className="oc-marquee" aria-hidden="true">
      <div className="oc-marquee-track">
        {[...items, ...items].map((text, i) => (
          <Fragment key={i}>
            <span>{text}</span>
            <span style={{ color: "#fb7185" }}>◆</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
