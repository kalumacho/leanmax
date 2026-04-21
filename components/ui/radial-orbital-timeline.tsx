"use client";
import { useState, useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  Icon: LucideIcon;
  relatedIds: number[];
  color: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((k) => { newState[parseInt(k)] = false; });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const item = timelineData.find((i) => i.id === id);
        const pulse: Record<number, boolean> = {};
        item?.relatedIds.forEach((r) => { pulse[r] = true; });
        setPulseEffect(pulse);
        const idx = timelineData.findIndex((i) => i.id === id);
        setRotationAngle(270 - (idx / timelineData.length) * 360);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const calcPos = (index: number) => {
    const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
    const radius = 185;
    const rad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
      zIndex: Math.round(100 + 50 * Math.cos(rad)),
      opacity: Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(rad)) / 2))),
    };
  };

  return (
    <div
      className="w-full h-[520px] flex items-center justify-center overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative flex items-center justify-center" style={{ width: 430, height: 430 }}>
        {/* Center orb */}
        <div className="absolute z-10 flex items-center justify-center"
          style={{ width: 60, height: 60 }}>
          <div className="absolute inset-0 rounded-full"
            style={{ background: "linear-gradient(135deg, #1A3A5C 0%, #C0392B 100%)" }} />
          <div className="absolute rounded-full border border-white/15 animate-ping"
            style={{ width: 76, height: 76, animationDuration: "2.5s" }} />
          <div className="absolute rounded-full border border-white/08 animate-ping"
            style={{ width: 92, height: 92, animationDuration: "2.5s", animationDelay: "0.8s" }} />
          <span className="relative text-white text-[11px] font-bold tracking-widest z-10">LM</span>
        </div>

        {/* Orbit ring */}
        <div className="absolute rounded-full"
          style={{ width: 390, height: 390, border: "1px solid rgba(255,255,255,0.07)" }} />

        {timelineData.map((item, index) => {
          const pos = calcPos(index);
          const isExpanded = expandedItems[item.id];
          const isRelated = activeNodeId
            ? timelineData.find(i => i.id === activeNodeId)?.relatedIds.includes(item.id)
            : false;
          const isPulsing = pulseEffect[item.id];
          const { Icon } = item;

          return (
            <div
              key={item.id}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                zIndex: isExpanded ? 200 : pos.zIndex,
                opacity: isExpanded ? 1 : pos.opacity,
              }}
              onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
            >
              {/* Pulse halo */}
              {isPulsing && (
                <div className="absolute rounded-full animate-pulse pointer-events-none"
                  style={{
                    inset: -16,
                    background: `radial-gradient(circle, ${item.color}35 0%, transparent 70%)`,
                  }} />
              )}

              {/* Node — taille uniforme, icône Lucide */}
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  width: 44,
                  height: 44,
                  background: isExpanded
                    ? item.color
                    : isRelated
                    ? `${item.color}50`
                    : "rgba(15,30,46,0.9)",
                  border: `1.5px solid ${
                    isExpanded ? item.color : isRelated ? item.color : "rgba(255,255,255,0.2)"
                  }`,
                  boxShadow: isExpanded
                    ? `0 0 0 6px ${item.color}25, 0 0 24px ${item.color}40`
                    : isRelated
                    ? `0 0 0 3px ${item.color}20`
                    : "none",
                  transform: isExpanded ? "scale(1.4)" : isRelated ? "scale(1.1)" : "scale(1)",
                }}
              >
                <Icon
                  size={16}
                  color={isExpanded ? "#fff" : isRelated ? "#fff" : item.color}
                  strokeWidth={1.8}
                />
              </div>

              {/* Label */}
              <div
                className="absolute whitespace-nowrap text-[11px] font-medium tracking-wide transition-all duration-300 pointer-events-none"
                style={{
                  top: 50,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: isExpanded ? "#fff" : "rgba(255,255,255,0.6)",
                  letterSpacing: "0.04em",
                }}
              >
                {item.title}
              </div>

              {/* Expanded card */}
              {isExpanded && (
                <div
                  className="absolute w-60 rounded-2xl p-5 shadow-2xl"
                  style={{
                    top: 62,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(10,20,36,0.97)",
                    backdropFilter: "blur(16px)",
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-px h-2.5"
                    style={{ background: item.color }} />
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: item.color }}>
                    {item.subtitle}
                  </p>
                  <p className="text-white font-semibold text-sm mb-2 leading-snug">{item.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{item.content}</p>
                  {item.relatedIds.length > 0 && (
                    <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Connecté à</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.relatedIds.map((rId) => {
                          const related = timelineData.find((i) => i.id === rId);
                          return (
                            <button
                              key={rId}
                              className="text-[11px] px-2.5 py-1 rounded-lg transition-all duration-200"
                              style={{
                                border: "1px solid rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.55)",
                                background: "rgba(255,255,255,0.04)",
                              }}
                              onClick={(e) => { e.stopPropagation(); toggleItem(rId); }}
                            >
                              {related?.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
