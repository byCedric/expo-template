import { Stack } from 'expo-router';

import '~/global.css';
import { AssetsProvider } from '~/providers/assets';
import { SplashScreenProvider } from '~/providers/splash';
import { ThemeProvider } from '~/providers/theme';

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AssetsProvider>
        <SplashScreenProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </SplashScreenProvider>
      </AssetsProvider>
    </ThemeProvider>
  );
}
