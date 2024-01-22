import { render, screen } from '@testing-library/react-native';
import { useFonts } from 'expo-font';

import { AssetsProvider } from '../assets';

import 'jest';

jest.mock('expo-font');

describe(AssetsProvider, () => {
  it('renders `null` when loading assets', () => {
    jest.mocked(useFonts).mockReturnValue([false, null]);
    render(<AssetsProvider>Test</AssetsProvider>);
    expect(screen.toJSON()).toBeNull();
  });

  it('renders children when assets are loaded', () => {
    jest.mocked(useFonts).mockReturnValue([true, null]);
    render(<AssetsProvider>Test</AssetsProvider>);
    expect(screen.toJSON()).toMatchInlineSnapshot(`"Test"`);
  });

  it('throws error when assets fail to load', () => {
    const error = new Error('Test: failed to load assets');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.mocked(useFonts).mockReturnValue([false, error]);

    expect(() => render(<AssetsProvider>Test</AssetsProvider>)).toThrow(error);
  });
});
