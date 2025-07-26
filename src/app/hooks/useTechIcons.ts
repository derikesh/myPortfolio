import { useMemo } from 'react';
import { getTechIconComponent } from '../utils/techIcons';

export const useTechIcons = (techList: string[], baseClassName: string = '') => {
  const icons = useMemo(() => {
    return techList.map((tech) => ({
      name: tech,
      icon: getTechIconComponent(tech, baseClassName)
    })).filter(item => item.icon !== null);
  }, [techList, baseClassName]);

  return icons;
};
