import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts, type FontSource } from 'expo-font';
import { PropsWithChildren } from 'react';

// All fonts to preload before rendering the app
const fonts: Record<string, FontSource> = {
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  ...FontAwesome.font,
};

export function AssetsProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts(fonts);

  // Throw the exception to the error boundary
  if (error) throw error;
  // Don't render the app until all fonts are loaded
  if (!loaded) return null;

  return children;
}
