import * as THREE from "three";

let cachedGeometry = null;

export const getHeartGeometry = () => {
  if (cachedGeometry) return cachedGeometry;

  const x = 0;
  const y = 0;
  const shape = new THREE.Shape();
  shape.moveTo(x + 0.5, y + 0.5);
  shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
  shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
  shape.bezierCurveTo(
    x - 0.6,
    y + 1.1,
    x - 0.3,
    y + 1.54,
    x + 0.5,
    y + 1.9
  );
  shape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
  shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y);
  shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.55,
    bevelEnabled: true,
    bevelSegments: 12,
    bevelSize: 0.28,
    bevelThickness: 0.28,
    curveSegments: 32,
  });

  geometry.center();
  geometry.computeVertexNormals();
  cachedGeometry = geometry;
  return geometry;
};
