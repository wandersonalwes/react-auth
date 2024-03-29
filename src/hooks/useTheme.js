import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

export default function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
