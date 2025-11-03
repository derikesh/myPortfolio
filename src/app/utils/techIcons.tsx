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
  SiChakraui,
  SiRedis,
  SiDocker
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

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
  'chakraUi': SiChakraui,
  // New icons
  'redis': SiRedis,
  'docker': SiDocker,
  // MinIO variants (use a generic database icon as a placeholder)
  'minio': FaDatabase,
  'miniIO': FaDatabase,
  'MiniIO': FaDatabase,
  'MinIO': FaDatabase
};

export const getTechIconComponent = (techName: string, className: string = '') => {
  const direct = techIconMap[techName];
  const lower = techIconMap[techName?.toLowerCase?.() || ''];
  const IconComponent = direct || lower || null;
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
};
