import { useEffect, useState } from 'react'

export default function MouseFollow () {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mousePosition])

  return (
    <div
      className='z-40 blur-3xl bg-cursor pointer-events-none' style={{
        position: 'absolute',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: -75,
        top: -75,
        width: 150,
        height: 150,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}
    />
  )
}