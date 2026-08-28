const bricks = [
  { top: '8%', left: '4%', w: 'w-16', h: 'h-12', delay: '0s', rotate: 'rotate-6' },
  { top: '16%', left: '10%', w: 'w-12', h: 'h-9', delay: '1.2s', rotate: '-rotate-3' },
  { top: '5%', right: '6%', w: 'w-20', h: 'h-14', delay: '0.6s', rotate: '-rotate-6' },
  { top: '20%', right: '12%', w: 'w-14', h: 'h-10', delay: '1.8s', rotate: 'rotate-3' },
  { bottom: '10%', left: '5%', w: 'w-14', h: 'h-10', delay: '2.1s', rotate: 'rotate-12' },
  { bottom: '18%', right: '4%', w: 'w-16', h: 'h-12', delay: '0.9s', rotate: '-rotate-12' },
  { top: '40%', left: '1%', w: 'w-10', h: 'h-8', delay: '2.5s', rotate: 'rotate-6' },
  { top: '52%', right: '2%', w: 'w-12', h: 'h-9', delay: '1.5s', rotate: '-rotate-6' },
  { top: '30%', left: '45%', w: 'w-8', h: 'h-6', delay: '3s', rotate: 'rotate-45' },
  { bottom: '35%', right: '20%', w: 'w-10', h: 'h-7', delay: '2.8s', rotate: '-rotate-12' },
]

export default function FloatingBricks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bricks.map((brick, i) => (
        <div
          key={i}
          className={`floating-brick absolute ${brick.w} ${brick.h} ${brick.rotate}`}
          style={{
            top: brick.top,
            left: brick.left,
            right: brick.right,
            bottom: brick.bottom,
            animationDelay: brick.delay,
          }}
        />
      ))}
    </div>
  )
}
