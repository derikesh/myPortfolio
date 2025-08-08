"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"

// Individual Eye component with blinking and movement
const Eye = ({ cx, cy, rx, ry, rotation, pupilCx, pupilCy, pupilR, highlightCx, highlightCy, highlightR, mouseX, mouseY, eyeIndex, isMounted, isInView }: {
  cx: number
  cy: number
  rx: number
  ry: number
  rotation: number
  pupilCx: number
  pupilCy: number
  pupilR: number
  highlightCx?: number
  highlightCy?: number
  highlightR?: number
  mouseX: number
  mouseY: number
  eyeIndex: number
  isMounted: boolean
  isInView: boolean
}) => {
  const [blinkState, setBlinkState] = useState(1)
  const [eyeballPos, setEyeballPos] = useState({ x: pupilCx, y: pupilCy })

  const calculateRandomEyeballPosition = () => {
   if (!isMounted || !isInView) {
    return { x: pupilCx, y: pupilCy }
  }

  const randomSeed = Math.sin(mouseX * 0.005 + eyeIndex) * Math.cos(mouseY * 0.005 )
  const timeBasedMovement = Date.now() * 0.003 + eyeIndex
  const oscillation = Math.cos(randomSeed * Math.PI + timeBasedMovement)

  const maxDistance = rx * 0.5

  // Tilt angle in radians (345° = -15°)
  const tiltAngle = (-15 * Math.PI) / 180

  // Movement along the tilted axis
  const dx = Math.cos(tiltAngle) * oscillation * maxDistance
  const dy = Math.sin(tiltAngle) * oscillation * maxDistance

  return {
    x: cx + dx,
    y: cy + dy
  }
  }


  useEffect(() => {
    if (!isMounted || !isInView) return
    
    // Random blinking
    const blinkInterval = 2500 + Math.random() * 4000
    const blinkTimer = setInterval(() => {
      setBlinkState(0.1)
      setTimeout(() => setBlinkState(1), 120 + Math.random() * 80)
    }, blinkInterval)

    // Update eyeball position
    const updatePosition = () => {
      setEyeballPos(calculateRandomEyeballPosition())
    }

    const positionInterval = setInterval(updatePosition, 1200 + Math.random() * 2200)
    return () => {
      clearInterval(blinkTimer)
      clearInterval(positionInterval)
    }
  }, [isMounted, isInView, eyeIndex, mouseX, mouseY])

  return (
    <g>
      
      {/* Eye white - this blinks by changing ry */}
      <ellipse
        cx={cx}
        cy={cy}
        fill="#D9D9D9"
        rx={rx}
        ry={ry * blinkState}
        transform={`rotate(${rotation} ${cx} ${cy})`}
        className="transition-all duration-150 ease-out"
      />
      
      {/* Moving pupil */}
      <circle
        cx={eyeballPos.x}
        cy={eyeballPos.y}
        r={pupilR}
        fill="#121212"
        opacity={blinkState}
        className="transition-all duration-900 ease-out"
      />
      
      {/* Moving highlight */}
      {highlightCx && highlightCy && highlightR && (
        <circle
          cx={eyeballPos.x + (highlightCx - pupilCx) * 0.8}
          cy={eyeballPos.y + (highlightCy - pupilCy) * 0.8}
          r={highlightR}
          fill="#D9D9D9"
          opacity={blinkState * 0.9}
          className="transition-all duration-900 ease-out"
        />
      )}
    </g>
  )
}

export default function DynamicPrisonRealm() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    setIsMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    setIsActivated(!isActivated)
  }

  return (
        <svg
          ref={svgRef}
          onClick={handleClick}
          className={`cursor-pointer transition-all duration-500 ${
            isActivated ? 'scale-110' : 'hover:scale-105'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="552"
          height="100%"
          fill="none"
          viewBox="0 0 552 486"
        >
          {/* Gradient definitions */}
          <defs>
            <radialGradient id="boxGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3D2525" />
              <stop offset="50%" stopColor="#252525" />
              <stop offset="100%" stopColor="#1A1A1A" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main structure */}
          <path
            fill="url(#boxGradient)"
            stroke={isActivated ? "#FF4444" : "#8B0000"}
            strokeWidth="2"
            filter="url(#glow)"
            d="M2 397.576V46.669L252.5 3l297.114 42.419v361.325L283.5 483z"
            className="transition-all duration-1000"
          />
          
          <path
            stroke={isActivated ? "#FF6666" : "#fff"}
            strokeWidth="4"
            filter="url(#glow)"
            d="M2 46.67 283.5 96.5M2 46.67v350.906L283.5 483M2 46.67 252.5 3l297.114 42.419M283.5 96.5l266.114-51.081M283.5 96.5V483M549.614 45.419v361.325L283.5 483"
            className="transition-all duration-1000"
          />

          {/* Interactive Eyes with blinking and movement */}
          <Eye 
            cx={344.718} cy={170.48} rx={49.12} ry={19.428} rotation={-25.18}
            pupilCx={333.724} pupilCy={177.078} pupilR={13.554}
            highlightCx={333.724} highlightCy={177.078} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={0} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={488.718} cy={126.48} rx={49.12} ry={19.428} rotation={-25.18}
            pupilCx={495.366} pupilCy={123.366} pupilR={13.554}
            highlightCx={494.864} highlightCy={122.513} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={1} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={435.718} cy={239.48} rx={49.12} ry={19.428} rotation={-25.18}
            pupilCx={439.578} pupilCy={240.578} pupilR={13.554}
            highlightCx={439.282} highlightCy={239.878} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={2} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={344.789} cy={373.747} rx={49.12} ry={19.428} rotation={-19.553}
            pupilCx={334.703} pupilCy={374.703} pupilR={13.554}
            highlightCx={335.46} highlightCy={373.501} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={3} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={487.718} cy={349.48} rx={49.12} ry={19.428} rotation={-20.508}
            pupilCx={478.751} pupilCy={352.751} pupilR={12.093}
            highlightCx={478.751} highlightCy={352.751} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={4} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={76.705} cy={134.484} rx={49.12} ry={19.428} rotation={-17.758}
            pupilCx={63.331} pupilCy={138.348} pupilR={12.919}
            highlightCx={62.778} highlightCy={138.778} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={5} isMounted={isMounted} isInView={isInView}
          />
          
          <Eye 
            cx={192.095} cy={377.264} rx={49.12} ry={19.428} rotation={-12.063}
            pupilCx={198.87} pupilCy={374.543} pupilR={12.919}
            highlightCx={198.289} highlightCy={374.933} highlightR={3.751}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={6} isMounted={isMounted} isInView={isInView}
          />
          
          {/* Large central eye */}
          <Eye 
            cx={135.048} cy={255.926} rx={79.272} ry={31.354} rotation={-17.661}
            pupilCx={140.616} pupilCy={257.116} pupilR={22.732}
            highlightCx={122.205} highlightCy={260.571} highlightR={6.713}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={7} isMounted={isMounted} isInView={isInView}
          />

          {/* Small top eye */}
          {/* <Eye 
            cx={263.278} cy={46.104} rx={67} ry={10.037} rotation={-1.772}
            pupilCx={276.739} pupilCy={44.788} pupilR={8}
            mouseX={mousePos.x} mouseY={mousePos.y} eyeIndex={8} isMounted={isMounted}
          /> */}

        </svg>
     
  )
}
