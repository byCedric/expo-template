import { render } from '@testing-library/react-native';
import * as SplashScreen from 'expo-splash-screen';

import { SplashScreenProvider } from '../splash';

jest.mock('expo-splash-screen');

describe(SplashScreenProvider, () => {
  it('disables auto-hiding of the splash screen', () => {
    expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalled();
  });

  it('hides the splash screen when rendered', () => {
    expect(SplashScreen.hideAsync).not.toHaveBeenCalled();
    render(<SplashScreenProvider />);
    expect(SplashScreen.hideAsync).toHaveBeenCalled();
  });
});
