import { useColorScheme } from 'react-native';

export const useThemeColors = () => {
  const scheme = useColorScheme(); // Detects 'light' or 'dark' from the phone settings
  const isDark = scheme === 'dark';

  return {
    isDark,
    colors: {
      background: isDark ? '#121212' : '#F5F7FA', // Soft gray for light mode, deep black for dark
      cardBg: isDark ? '#1E1E1E' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#1A1A1A',
      subText: isDark ? '#A0A0A0' : '#64748B',
      border: isDark ? '#333333' : '#E2E8F0',
      primary: '#3B82F6', // A professional Blue
    }
  };
};