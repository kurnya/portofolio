import { useEffect, useRef } from "react";

/**
 * Sphere partikel 3D di <canvas> 2D: Fibonacci sphere + cincin, berputar terus,
 * rotasi mengikuti `pointer` (ref {x,y} dalam -1..1) dengan lerp 0.05.
 */
export default function ParticleSphere({ pointer, count = 900, spin = 1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return undefined;

    const pts = [];
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = ga * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r, 0]);
    }
    for (let i = 0; i < 220; i++) {
      const a = (i / 220) * Math.PI * 2;
      pts.push([Math.cos(a) * 1.55, Math.sin(a) * 0.08, Math.sin(a) * 1.55, 1]);
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const size = () => {
      const r = cv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = Math.max(1, Math.round(W * dpr));
      cv.height = Math.max(1, Math.round(H * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let ro;
    let raf = 0;
    let t = 0;
    let tx = 0;
    let ty = 0;

    const draw = () => {
      t += 0.0035 * spin;
      const mx = pointer?.current?.x ?? 0;
      const my = pointer?.current?.y ?? 0;
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;

      const ay = t + tx * 0.9;
      const ax = -0.35 + ty * 0.6;
      const cy = Math.cos(ay);
      const sy = Math.sin(ay);
      const cx = Math.cos(ax);
      const sx = Math.sin(ax);

      ctx.clearRect(0, 0, W, H);
      const R = Math.min(W, H) * 0.34;
      const ox = W / 2;
      const oy = H / 2;
      const f = 3.2;
      const breathe = 1 + Math.sin(t * 6) * 0.015;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        let x = p[0] * breathe;
        let y = p[1] * breathe;
        let z = p[2] * breathe;

        if (p[3]) {
          const a2 = -t * 1.6;
          const c2 = Math.cos(a2);
          const s2 = Math.sin(a2);
          const nx = x * c2 - z * s2;
          z = x * s2 + z * c2;
          x = nx;
          const tl = 0.45;
          const ny = y * Math.cos(tl) - x * Math.sin(tl);
          x = y * Math.sin(tl) + x * Math.cos(tl);
          y = ny;
        }

        const x1 = x * cy - z * sy;
        const z1 = x * sy + z * cy;
        const y1 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;

        const sc = f / (f + z2);
        const px = ox + x1 * R * sc;
        const py = oy + y1 * R * sc;
        const d = (1 - z2) / 2;
        const a = 0.15 + d * 0.85;

        ctx.fillStyle = p[3]
          ? `rgba(165,148,255,${a})`
          : d > 0.5
            ? `rgba(200,245,96,${a})`
            : `rgba(165,148,255,${a * 0.7})`;
        const s = (p[3] ? 1.6 : 1.3) * sc * (0.6 + d);
        ctx.fillRect(px - s / 2, py - s / 2, s, s);
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        size();
        if (reduce) draw();
      });
      ro.observe(cv);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, [count, spin, pointer]);

  return <canvas ref={ref} aria-hidden="true" />;
}
