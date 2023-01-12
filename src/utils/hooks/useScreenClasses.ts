import { useMediaQuery } from 'react-responsive';
import { ScreenClasses } from '../../types';

const useScreenClasses = (classes: ScreenClasses): string => {
  const isXs = useMediaQuery({ query: '(max-width: 680px)' });
  const isSm = useMediaQuery({ query: '(min-width: 680px)' });
  const isMd = useMediaQuery({ query: '(min-width: 768px)' });
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
  const isXXl = useMediaQuery({ query: '(min-width: 1538px)' });
  const { xs, sm, md, xl, lg, xxl } = classes;
  if (isXXl && xxl) return xxl;
  else if (isXl && xl) return xl;
  else if (isLg && lg) return lg;
  else if (isMd && md) return md;
  else if (isSm && sm) return sm;
  else if (isXs && xs) return xs;
  return '';
};

export default useScreenClasses;
