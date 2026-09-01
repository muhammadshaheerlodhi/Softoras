'use client'

import { useEffect, useState } from 'react'

const GLOBE = { cx: 472, cy: 356, r: 148 } as const

const FINGER_WIRES = [
  { d: 'M216 840 C218 780 222 720 228 660 C234 600 240 540 246 480 C250 440 254 400 258 360', delay: '0s' },
  { d: 'M224 848 C226 788 230 728 236 668 C242 608 248 548 254 488 C258 448 262 408 266 368', delay: '-0.25s', thin: true },
  { d: 'M336 860 C338 800 342 740 348 680 C354 620 360 560 366 500 C370 460 374 420 378 380', delay: '-0.6s' },
  { d: 'M344 868 C346 808 350 748 356 688 C362 628 368 568 374 508 C378 468 382 428 386 388', delay: '-0.85s', thin: true },
  { d: 'M456 864 C458 804 460 744 462 684 C464 624 466 564 468 504 C470 464 472 424 474 384', delay: '-1.2s' },
  { d: 'M464 872 C466 812 468 752 470 692 C472 632 474 572 476 512 C478 472 480 432 482 392', delay: '-1.45s', thin: true },
  { d: 'M576 860 C578 800 582 740 588 680 C594 620 600 560 606 500 C610 460 614 420 618 380', delay: '-1.8s' },
  { d: 'M584 868 C586 808 590 748 596 688 C602 628 608 568 614 508 C618 468 622 428 626 388', delay: '-2.05s', thin: true },
  { d: 'M696 840 C698 780 702 720 708 660 C714 600 720 540 726 480 C730 440 734 400 738 360', delay: '-2.4s' },
  { d: 'M704 848 C706 788 710 728 716 668 C722 608 728 548 734 488 C738 448 742 408 746 368', delay: '-2.65s', thin: true },
  { d: 'M796 800 C784 740 768 680 748 620 C728 560 704 500 676 440 C656 400 636 360 616 320', delay: '-3s' },
  { d: 'M804 808 C792 748 776 688 756 628 C736 568 712 508 684 448 C664 408 644 368 624 328', delay: '-3.25s', thin: true },
] as const

const FINGER_JOINTS = [
  { x: 258, y: 360 }, { x: 378, y: 380 }, { x: 474, y: 384 }, { x: 618, y: 380 }, { x: 738, y: 360 }, { x: 616, y: 320 },
  { x: 228, y: 660 }, { x: 348, y: 680 }, { x: 462, y: 684 }, { x: 588, y: 680 }, { x: 708, y: 660 }, { x: 748, y: 620 },
  { x: 246, y: 480 }, { x: 366, y: 500 }, { x: 468, y: 504 }, { x: 606, y: 500 }, { x: 726, y: 480 }, { x: 676, y: 440 },
] as const

const FINGER_TIPS = [
  { x: 258, y: 352 }, { x: 378, y: 372 }, { x: 474, y: 376 }, { x: 618, y: 372 }, { x: 738, y: 352 }, { x: 616, y: 312 },
] as const

const PALM_TRACES = [
  'M280 820 C340 780 400 760 472 752 C544 760 604 780 664 820',
  'M300 880 C360 850 420 836 472 832 C524 836 584 850 644 880',
  'M320 940 C380 920 430 908 472 904 C514 908 564 920 624 940',
  'M248 900 L320 868 L472 856 L624 868 L696 900',
] as const

const LAND_MASSES = [
  'M392 316 C412 296 448 292 472 304 C492 328 484 356 460 368 C428 376 398 356 392 316 Z',
  'M536 324 C564 312 592 324 604 352 C598 380 572 392 548 384 C524 372 518 344 536 324 Z',
  'M420 372 C444 360 472 368 488 392 C480 420 456 432 432 424 C408 412 404 388 420 372 Z',
  'M524 392 C548 380 576 392 584 420 C576 444 552 452 528 440 C512 424 512 404 524 392 Z',
  'M448 420 C468 408 492 416 500 440 C492 464 468 472 448 460 C436 444 436 428 448 420 Z',
  'M508 448 C528 436 552 448 556 472 C548 492 524 496 508 484 C496 468 496 456 508 448 Z',
  'M396 404 C408 392 424 398 428 416 C420 432 404 436 396 424 C392 414 392 408 396 404 Z',
  'M560 360 C576 352 592 360 596 376 C588 392 572 396 560 388 C552 376 552 366 560 360 Z',
] as const

const ORBIT_PARTICLES = [
  { cx: 472, cy: 196, r: 2.5 }, { cx: 612, cy: 260, r: 2 }, { cx: 648, cy: 356, r: 2.5 },
  { cx: 612, cy: 452, r: 2 }, { cx: 472, cy: 516, r: 2.5 }, { cx: 332, cy: 452, r: 2 },
  { cx: 296, cy: 356, r: 2.5 }, { cx: 332, cy: 260, r: 2 }, { cx: 540, cy: 220, r: 1.8 },
  { cx: 404, cy: 220, r: 1.8 }, { cx: 404, cy: 492, r: 1.8 }, { cx: 540, cy: 492, r: 1.8 },
] as const

export default function HeroHandVisual() {
  const [reduceMotion, setReduceMotion] = useState(true)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div className={`hero-hand${reduceMotion ? ' is-static' : ''}`} aria-hidden>
      <div className="hero-hand-stage">
        <div className="hero-hand-ambient" />
        <div className="hero-hand-ambient hero-hand-ambient-violet" />
        <div className="hero-hand-ambient hero-hand-ambient-core" />

        <svg
          className="hero-hand-svg"
          viewBox="0 0 960 1120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <defs>
            <linearGradient id="robotMetal" x1="240" y1="160" x2="720" y2="1080" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--hand-metal-a)" />
              <stop offset="38%" stopColor="var(--hand-metal-b)" />
              <stop offset="72%" stopColor="var(--hand-metal-c)" />
              <stop offset="100%" stopColor="var(--hand-metal-c)" />
            </linearGradient>
            <linearGradient id="robotPanel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="robotEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="42%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="68%" stopColor="#a78bfa" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient
              id="globeSphere"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${GLOBE.cx - 28} ${GLOBE.cy - 42}) rotate(58) scale(${GLOBE.r * 1.05} ${GLOBE.r * 0.92})`}
            >
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.55" />
              <stop offset="28%" stopColor="#0284c7" />
              <stop offset="62%" stopColor="#075985" />
              <stop offset="88%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
            <radialGradient
              id="globeHighlight"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${GLOBE.cx - 52} ${GLOBE.cy - 68}) rotate(35) scale(96 72)`}
            >
              <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.72" />
              <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="globeAtmosphere"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform={`translate(${GLOBE.cx} ${GLOBE.cy}) rotate(90) scale(${GLOBE.r + 36})`}
            >
              <stop offset="72%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="88%" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.45" />
            </radialGradient>
            <linearGradient id="wireGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.12" />
              <stop offset="38%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="62%" stopColor="#e0f2fe" stopOpacity="0.95" />
              <stop offset="82%" stopColor="#a78bfa" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="scanArc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <clipPath id="globeClip">
              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} />
            </clipPath>
            <filter id="robotGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="globeBloom" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="wireBloom" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="hero-hand-figure">
            <ellipse
              cx={GLOBE.cx}
              cy={GLOBE.cy}
              rx={GLOBE.r + 36}
              ry={GLOBE.r + 36}
              className="hero-hand-globe-halo"
            />

            <g className="hero-hand-globe-group" filter="url(#globeBloom)">
              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 44} fill="url(#globeAtmosphere)" opacity="0.85" />

              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 30} className="hero-hand-globe-ring-svg hero-hand-globe-ring-outer-svg" />
              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 18} className="hero-hand-globe-ring-svg hero-hand-globe-ring-mid" />
              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r + 6} className="hero-hand-globe-ring-svg hero-hand-globe-ring-inner" />

              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} fill="url(#globeSphere)" />
              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} fill="url(#globeHighlight)" />

              <g clipPath="url(#globeClip)" className="hero-hand-globe-grid">
                {Array.from({ length: 14 }, (_, i) => {
                  const ry = 10 + i * 10
                  if (ry >= GLOBE.r) return null
                  return (
                    <ellipse
                      key={`lat-${i}`}
                      cx={GLOBE.cx}
                      cy={GLOBE.cy}
                      rx={GLOBE.r}
                      ry={ry}
                      className="hero-hand-globe-lat"
                    />
                  )
                })}
                {Array.from({ length: 18 }, (_, i) => {
                  const rx = 10 + i * 8
                  if (rx >= GLOBE.r) return null
                  return (
                    <ellipse
                      key={`lon-${i}`}
                      cx={GLOBE.cx}
                      cy={GLOBE.cy}
                      rx={rx}
                      ry={GLOBE.r}
                      className={`hero-hand-globe-lon${i === 12 ? ' hero-hand-globe-lon-main' : ''}`}
                    />
                  )
                })}
              </g>

              <g clipPath="url(#globeClip)" className="hero-hand-globe-land">
                {LAND_MASSES.map((d) => (
                  <path key={d.slice(0, 12)} d={d} />
                ))}
              </g>

              <path
                d={`M${GLOBE.cx - GLOBE.r} ${GLOBE.cy} A${GLOBE.r} ${GLOBE.r} 0 0 1 ${GLOBE.cx + GLOBE.r} ${GLOBE.cy}`}
                className="hero-hand-globe-scan"
              />

              <text x={GLOBE.cx} y={GLOBE.cy + 14} textAnchor="middle" className="hero-hand-globe-label">
                SAAS
              </text>

              <circle cx={GLOBE.cx} cy={GLOBE.cy} r={GLOBE.r} className="hero-hand-globe-rim" />
            </g>

            <g className="hero-hand-orbit-particles">
              {ORBIT_PARTICLES.map((p, i) => (
                <circle key={`${p.cx}-${p.cy}`} cx={p.cx} cy={p.cy} r={p.r} className="hero-hand-particle" style={{ animationDelay: `${-i * 0.35}s` }} />
              ))}
            </g>

            <g className="hero-hand-robot">
              <path
                d="M176 936 C144 936 124 900 136 848 C148 796 192 764 236 756 L256 700 C192 680 156 636 168 576 C180 516 236 484 288 516 L304 564 C276 504 296 436 348 400 C400 364 456 384 476 440 L492 496 C472 412 524 344 592 336 C660 328 712 384 720 456 L732 576 C772 536 836 552 856 608 C876 664 848 728 792 752 L776 804 C832 836 856 900 832 956 C808 1012 740 1036 672 1016 L612 1004 C580 1072 508 1096 416 1096 C324 1096 252 1072 220 1004 L176 936 Z"
                fill="url(#robotMetal)"
              />
              <path
                d="M176 936 C144 936 124 900 136 848 C148 796 192 764 236 756 L256 700 C192 680 156 636 168 576 C180 516 236 484 288 516 L304 564 C276 504 296 436 348 400 C400 364 456 384 476 440 L492 496 C472 412 524 344 592 336 C660 328 712 384 720 456 L732 576 C772 536 836 552 856 608 C876 664 848 728 792 752 L776 804 C832 836 856 900 832 956 C808 1012 740 1036 672 1016 L612 1004 C580 1072 508 1096 416 1096 C324 1096 252 1072 220 1004 L176 936 Z"
                fill="url(#robotPanel)"
                opacity="0.55"
              />
              <path
                d="M176 936 C144 936 124 900 136 848 C148 796 192 764 236 756 L256 700 C192 680 156 636 168 576 C180 516 236 484 288 516 L304 564 C276 504 296 436 348 400 C400 364 456 384 476 440 L492 496 C472 412 524 344 592 336 C660 328 712 384 720 456 L732 576 C772 536 836 552 856 608 C876 664 848 728 792 752 L776 804 C832 836 856 900 832 956 C808 1012 740 1036 672 1016 L612 1004 C580 1072 508 1096 416 1096 C324 1096 252 1072 220 1004 L176 936 Z"
                fill="none"
                stroke="url(#robotEdge)"
                strokeWidth="2.5"
                opacity="0.75"
              />

              <g className="hero-hand-phalanges">
                {[258, 378, 474, 618, 738, 616].map((x) => (
                  <g key={x}>
                    <path d={`M${x - 14} 760 L${x + 14} 760 L${x + 10} 520 L${x - 10} 520 Z`} className="hero-hand-phalanx" />
                    <path d={`M${x - 12} 640 L${x + 12} 640`} className="hero-hand-seam" />
                    <path d={`M${x - 11} 560 L${x + 11} 560`} className="hero-hand-seam" />
                    <circle cx={x - 8} cy={748} r="2.5" className="hero-hand-screw" />
                    <circle cx={x + 8} cy={748} r="2.5" className="hero-hand-screw" />
                  </g>
                ))}
              </g>

              <g className="hero-hand-palm-circuit">
                {PALM_TRACES.map((d) => (
                  <path key={d.slice(0, 14)} d={d} className="hero-hand-palm-trace" pathLength={1000} />
                ))}
              </g>

              <g className="hero-hand-joints">
                {FINGER_JOINTS.map((j) => (
                  <circle key={`${j.x}-${j.y}`} cx={j.x} cy={j.y} r="6" className="hero-hand-joint-ring" />
                ))}
              </g>

              <g filter="url(#wireBloom)">
                {FINGER_WIRES.map((wire) => (
                  <path
                    key={wire.d.slice(0, 20)}
                    className={`hero-hand-wire${'thin' in wire && wire.thin ? ' hero-hand-wire-thin' : ''}`}
                    style={{ animationDelay: wire.delay }}
                    pathLength={1000}
                    d={wire.d}
                  />
                ))}
              </g>

              <g className="hero-hand-tips" filter="url(#robotGlow)">
                {FINGER_TIPS.map((tip, i) => (
                  <g key={`${tip.x}-${tip.y}`}>
                    <circle cx={tip.x} cy={tip.y} r="8" className="hero-hand-tip-glow" style={{ animationDelay: `${-i * 0.4}s` }} />
                    <circle cx={tip.x} cy={tip.y} r="5" className="hero-hand-tip" style={{ animationDelay: `${-i * 0.4}s` }} />
                  </g>
                ))}
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
