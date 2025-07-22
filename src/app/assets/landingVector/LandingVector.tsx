"use client";

import * as React from "react";
import { useState, useCallback, useEffect } from "react";

interface LandingVectorProps extends React.SVGProps<SVGSVGElement> {
    
}

// Throttle function for performance
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (inThrottle) {
      func.apply(this, args);
      inThrottle = false;
      setTimeout(() => inThrottle =true, limit);
    }
  };
};


// Individual Eye component
const Eye = ({ cx, cy, rx, ry, rotation, mouseX, mouseY, svgRef, eyeIndex, isMounted }: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rotation: number;
  mouseX: number;
  mouseY: number;
  svgRef: React.RefObject<SVGSVGElement | null>;
  eyeIndex: number;
  isMounted: boolean;
}) => {
  const calculateRandomEyeballPosition = () => {
    // Return center position during SSR to avoid hydration mismatch
    if (!isMounted) {
      return { x: cx, y: cy };
    }
    
    // Use mouse position changes to trigger random movement (slower)
    const randomSeed = Math.sin(mouseX * 0.005 + eyeIndex) * Math.cos(mouseY * 0.005 + eyeIndex);
    
    // Much slower and smoother movement - now only runs on client
    const timeBasedMovement = Date.now() * 0.0005 + eyeIndex;
    

    // vertical angle 

    // Only horizontal movement within ellipse bounds
    const horizontalAngle = randomSeed * Math.PI + timeBasedMovement;
    const maxHorizontalDistance = rx * 0.4;

    const maxVerticalDistance = ry * 0.2
    
    // Pure left-right movement only
    const horizontalMovement = Math.cos(horizontalAngle) * maxHorizontalDistance;
    const verticalMovment = Math.cos(horizontalAngle) * maxVerticalDistance;
    
    return {
      x: cx + horizontalMovement,
      y: cy + verticalMovment
    };
  };

  const eyeballPos = calculateRandomEyeballPosition();

  return (
    <g>
      <ellipse
        cx={cx}
        cy={cy}
        fill="#D9D9D9"
        rx={rx}
        ry={ry}
        transform={`rotate(${rotation} ${cx} ${cy})`}
      />
      <circle
        cx={eyeballPos.x}
        cy={eyeballPos.y}
        r="15.5"
        fill="#121212"
        className="transition-all duration-300 ease-out"
      />
    </g>
  );
};

const LandingVector = (props: LandingVectorProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    }, 16),
    []
  );

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Reset after animation
  };

  return (
    <svg
      {...props}
      ref={svgRef}
      onClick={handleClick}
      className={`cursor-pointer transition-transform duration-500 ${isShaking ? 'animate-shake' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    width="649"
    height="517"
    fill="none"
    viewBox="0 0 649 517"
  >
    <path fill="#191919" d="M2 372.5V2h350l294.5 12.5V423l-337.034 91z"></path>
    <path
      stroke="#fff"
      strokeWidth="4"
      d="m2 2 307.466 34.5M2 2v370.5L309.466 514M2 2h350l294.5 12.5m-337.034 22 337.034-22m-337.034 22V514M646.5 14.5V423l-337.034 91"
    ></path>
    
    {/* Interactive Eyes */}
    <Eye cx={120.676} cy={350.292} rx={53.819} ry={23.614} rotation={6.634} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={0} isMounted={isMounted} />
    <Eye cx={392.185} cy={392.708} rx={53.819} ry={23.614} rotation={-7.929} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={1} isMounted={isMounted} />
    <Eye cx={224.832} cy={236.217} rx={53.819} ry={23.476} rotation={5.237} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={2} isMounted={isMounted} />
    <Eye cx={92.186} cy={110.98} rx={53.819} ry={22.507} rotation={7.093} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={3} isMounted={isMounted} />
    <Eye cx={495.867} cy={258.409} rx={56.855} ry={23.913} rotation={-8.887} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={4} isMounted={isMounted} />
    <Eye cx={571.063} cy={125.064} rx={53.819} ry={23.614} rotation={-6.304} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={5} isMounted={isMounted} />
    <Eye cx={399.394} cy={139.67} rx={53.819} ry={23.614} rotation={-2.21} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={6} isMounted={isMounted} />
    
    {/* Convert matrix transform eye to interactive Eye - this was the static one */}
    <Eye cx={576} cy={342.876} rx={47.438} ry={22.18} rotation={-6.7} mouseX={mousePos.x} mouseY={mousePos.y} svgRef={svgRef} eyeIndex={7} isMounted={isMounted} />
  </svg>
  );
};

export default LandingVector;
