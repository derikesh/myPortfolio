import { useSyncExternalStore } from 'react';


const useResponsive = (breakpoint: number): boolean => {
  const subscribe = (callback: () => void) => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  };

  const getSnapshot = () => window.innerWidth <= breakpoint;

  const getServerSnapshot = () => false; // Default value for SSR

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useResponsive;


