"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  maxLife: number;
  depth: number;
  seed: number;
};

export default function DryIceFog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const COUNT = reduce ? 18 : 65;
    const particles: Particle[] = [];

    const spawn = (initial: boolean): Particle => {
      const depth = Math.random();
      const maxLife = 7 + Math.random() * 8;
      const baseR = 90 + depth * 220;
      // 60% spawn from bottom rising/drifting (dry ice fog pouring out),
      // 40% from top falling. Initial spawn anywhere.
      const fromBottom = Math.random() < 0.6;
      return {
        x: Math.random() * w,
        y: initial
          ? Math.random() * h
          : fromBottom
            ? h + 30 + Math.random() * 80
            : -30 - Math.random() * 80,
        vx: (Math.random() - 0.5) * (0.15 + depth * 0.2),
        vy: fromBottom
          ? -(0.05 + depth * 0.2 + Math.random() * 0.1)
          : 0.1 + depth * 0.35 + Math.random() * 0.15,
        r: baseR,
        life: initial ? Math.random() * maxLife : 0,
        maxLife,
        depth,
        seed: Math.random() * 1000,
      };
    };

    for (let i = 0; i < COUNT; i++) particles.push(spawn(true));
    particles.sort((a, b) => a.depth - b.depth);

    let raf = 0;
    let last = performance.now();
    let running = true;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        p.life += dt;
        const swirl = Math.sin((p.seed + p.life) * 0.6) * (0.4 + p.depth * 0.4);
        p.x += p.vx + swirl * 0.15;
        p.y += p.vy;

        const t = p.life / p.maxLife;
        const fadeIn = Math.min(1, t / 0.15);
        const fadeOut = Math.min(1, (1 - t) / 0.5);
        const alpha = Math.max(0, fadeIn * fadeOut);

        const depthAlpha = 0.04 + p.depth * 0.10;
        const a = alpha * depthAlpha;
        if (a <= 0.002) continue;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        grad.addColorStop(0, `rgba(225, 242, 255, ${a})`);
        grad.addColorStop(0.45, `rgba(190, 225, 245, ${a * 0.55})`);
        grad.addColorStop(1, "rgba(160, 210, 240, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        if (
          p.life >= p.maxLife ||
          p.y - p.r > h + 100 ||
          p.y + p.r < -100
        ) {
          Object.assign(p, spawn(false));
        }
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    if (!reduce) {
      raf = requestAnimationFrame(draw);
    } else {
      draw(performance.now());
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 80% at 50% 100%, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 100%, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)",
      }}
      aria-hidden
    />
  );
}
