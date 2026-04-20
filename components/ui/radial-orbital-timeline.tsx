"use client";
import { useState, useEffect, useRef } from "react";

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  icon: string;
  relatedIds: number[];
  color: string;
  energy: number;
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
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const calcPos = (index: number) => {
    const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
    const radius = 180;
    const rad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
      zIndex: Math.round(100 + 50 * Math.cos(rad)),
      opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2))),
    };
  };

  return (
    <div
      className="w-full h-[500px] flex items-center justify-center overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative flex items-center justify-center" style={{ width: 420, height: 420 }}>
        {/* Center orb */}
        <div className="absolute w-16 h-16 rounded-full z-10 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #1A3A5C, #C0392B)" }}>
          <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-60" />
          <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-40"
            style={{ animationDelay: "0.5s" }} />
          <span className="text-white text-xs font-bold tracking-wider">LM</span>
        </div>

        {/* Orbit ring */}
        <div className="absolute rounded-full border border-white/10" style={{ width: 380, height: 380 }} />

        {timelineData.map((item, index) => {
          const pos = calcPos(index);
          const isExpanded = expandedItems[item.id];
          const isRelated = activeNodeId ? timelineData.find(i => i.id === activeNodeId)?.relatedIds.includes(item.id) : false;
          const isPulsing = pulseEffect[item.id];

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
                <div className="absolute -inset-4 rounded-full animate-pulse"
                  style={{ background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)` }} />
              )}

              {/* Node */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isExpanded ? "scale-150 shadow-lg" : isRelated ? "scale-110" : ""
                }`}
                style={{
                  background: isExpanded ? item.color : isRelated ? `${item.color}80` : "#0F1E2E",
                  borderColor: isExpanded ? item.color : isRelated ? item.color : "rgba(255,255,255,0.3)",
                  boxShadow: isExpanded ? `0 0 20px ${item.color}60` : "none",
                }}
              >
                <span className="text-lg">{item.icon}</span>
              </div>

              {/* Label */}
              <div className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 ${
                isExpanded ? "text-white scale-110" : "text-white/70"
              }`}>
                {item.title}
              </div>

              {/* Expanded card */}
              {isExpanded && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 rounded-xl border border-white/20 p-4 shadow-xl"
                  style={{ background: "rgba(15, 30, 46, 0.95)", backdropFilter: "blur(12px)" }}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/40" />
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>
                    {item.subtitle}
                  </p>
                  <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{item.content}</p>
                  {item.relatedIds.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Connecté à</p>
                      <div className="flex flex-wrap gap-1">
                        {item.relatedIds.map((rId) => {
                          const related = timelineData.find((i) => i.id === rId);
                          return (
                            <button key={rId}
                              className="text-[10px] px-2 py-0.5 rounded border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-colors"
                              onClick={(e) => { e.stopPropagation(); toggleItem(rId); }}>
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
