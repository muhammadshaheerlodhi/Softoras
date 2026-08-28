'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function HeroMolecule() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let nodes: Node[] = []
    let width = 0
    let height = 0

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0ea5e9'

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)

      const count = width < 480 ? 18 : width < 768 ? 24 : 32
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 2.2 + 2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, width * 0.55)
      gradient.addColorStop(0, 'rgba(14,165,233,0.14)')
      gradient.addColorStop(1, 'rgba(14,165,233,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      }

      const linkDistance = width < 480 ? 90 : 120
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(14,165,233,${0.35 * (1 - dist / linkDistance)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = accent
        ctx.fill()
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r + 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(14,165,233,0.18)'
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="hero-visual" aria-hidden>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-visual-glow" />
      <div className="hero-visual-orbit hero-visual-orbit-1" />
      <div className="hero-visual-orbit hero-visual-orbit-2" />
    </div>
  )
}
