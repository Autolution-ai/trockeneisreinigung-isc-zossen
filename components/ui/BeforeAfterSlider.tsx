"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

interface Props {
  vorher: string;
  nachher: string;
  alt: string;
}

export default function BeforeAfterSlider({ vorher, nachher, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl select-none cursor-col-resize touch-pan-y"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <Image
        src={vorher}
        alt={`Vorher: ${alt}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={nachher}
          alt={`Nachher: ${alt}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-2xl ring-2 ring-brand-red flex items-center justify-center">
          <GripVertical size={18} className="text-brand-red" />
        </div>
      </div>

      <div className="absolute top-3 left-3 px-2.5 py-1 bg-navy-950/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded pointer-events-none">
        Vorher
      </div>
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest rounded pointer-events-none">
        Nachher
      </div>
    </div>
  );
}
