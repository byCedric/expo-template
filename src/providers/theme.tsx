import {
  DefaultTheme as RNDefaultTheme,
  DarkTheme as RNDarkTheme,
  ThemeProvider as RNThemeProvider,
} from '@react-navigation/native';
import { PropsWithChildren } from 'react';

import { useColorScheme } from '~/hooks/useColorScheme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();

  return (
    <RNThemeProvider value={colorScheme === 'dark' ? RNDarkTheme : RNDefaultTheme}>
      {children}
    </RNThemeProvider>
  );
}
