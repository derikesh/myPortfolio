// Create a custom animated icon component
const AnimatedMenuIcon = ({ clicked }: { clicked: boolean }) => (
  <div className="relative w-[2vw] h-[2vw] flex items-center justify-center">
    {/* Horizontal line */}
    <div 
      className={`absolute md:w-[1.6vw] md:h-[0.2vw] w-[3.2vw] h-[0.52vw]  bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
      }`}
    />
    {/* Vertical line */}
    <div 
      className={`absolute md:w-[0.2vw] md:h-[1.6vw] w-[0.52vw] h-[3.2vw] bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-100' : 'rotate-0 opacity-100'
      }`}
    />
  </div>
);

export default AnimatedMenuIcon;