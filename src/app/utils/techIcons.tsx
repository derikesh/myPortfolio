import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiReact, 
  SiFirebase, 
  SiWordpress, 
  SiPostgresql,
  SiPrisma,
  SiGreensock,
  SiThreedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiChakraui
} from 'react-icons/si';

export const techIconMap: { [key: string]: any } = {
  'next': SiNextdotjs,
  'typescript': SiTypescript,
  'node': SiNodedotjs,
  'mongodb': SiMongodb,
  'mongoDB': SiMongodb,
  'react': SiReact,
  'firebase': SiFirebase,
  'wordpress': SiWordpress,
  'postgrace': SiPostgresql,
  'prisma': SiPrisma,
  'gsap': SiGreensock,
  'threejs': SiThreedotjs,
  'three': SiThreedotjs,
  'bootstrap': SiBootstrap,
  'tailwind': SiTailwindcss,
  'taliwind': SiTailwindcss, // typo in your data
  'chakraUi': SiChakraui
};

export const getTechIconComponent = (techName: string, className: string = '') => {
  const IconComponent = techIconMap[techName];
  if (!IconComponent) return null;
  
  return <IconComponent className={className} />;
};
