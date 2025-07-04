// Create a custom animated icon component
const AnimatedMenuIcon = ({ clicked }: { clicked: boolean }) => (
  <div className="relative w-[60px] h-[60px] flex items-center justify-center">
    {/* Horizontal line */}
    <div 
      className={`absolute w-8 h-0.5 bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
      }`}
    />
    {/* Vertical line */}
    <div 
      className={`absolute w-0.5 h-8 bg-current transition-all duration-700 ease-in-out ${
        clicked ? 'rotate-90 opacity-100' : 'rotate-0 opacity-100'
      }`}
    />
  </div>
);


export default AnimatedMenuIcon;