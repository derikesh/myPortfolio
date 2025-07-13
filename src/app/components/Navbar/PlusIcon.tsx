// Create a custom animated icon component
const AnimatedMenuIcon = ({ clicked }: { clicked: boolean }) => (
  <div className="relative w-[2vw] h-[2vw] flex items-center justify-center">
    {/* Horizontal line */}
    <div 
      className={`absolute w-[1.2vw] h-[0.12vw] bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
      }`}
    />
    {/* Vertical line */}
    <div 
      className={`absolute w-[0.12vw] h-[1.2vw] bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-100' : 'rotate-0 opacity-100'
      }`}
    />
  </div>
);

export default AnimatedMenuIcon;