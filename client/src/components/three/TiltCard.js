import React, { useRef, useState } from "react";

const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  scale = 1.03,
}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`,
      glareX: px * 100,
      glareY: py * 100,
      glareOpacity: 0.16,
    });
  };

  const onMouseLeave = () =>
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
    });

  return (
    <div
      ref={ref}
      className={`oc-tilt-card ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform: style.transform }}
    >
      {children}
      {glare ? (
        <span
          className="oc-tilt-glare"
          style={{
            background: `radial-gradient(circle at ${style.glareX}% ${style.glareY}%, rgba(255,255,255,${style.glareOpacity}) 0%, rgba(255,255,255,0) 55%)`,
          }}
        />
      ) : null}
    </div>
  );
};

export default TiltCard;
