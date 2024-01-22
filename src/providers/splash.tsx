import * as SplashScreen from 'expo-splash-screen';
import { type PropsWithChildren } from 'react';

// Do not auto-hide the splash screen, wait until children are rendered
SplashScreen.preventAutoHideAsync();

export function SplashScreenProvider({ children }: PropsWithChildren) {
  // Hide the splash screen once this component receives children
  if (children) SplashScreen.hideAsync();

  return children;
}
