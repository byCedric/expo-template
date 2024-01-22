import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, Text, View } from 'react-native';

type ScreenInfoProps = {
  /** The current (router) path */
  path: string;
};

export function ScreenInfo({ path }: ScreenInfoProps) {
  return (
    <View>
      <View className="px-6">
        <Text className="text-lg text-center text-zinc-900 dark:text-zinc-200">
          Open up the code for this screen:
        </Text>

        <View className="my-2">
          <Text className="font-mono text-center rounded px-4 py-2 text-zinc-900 dark:text-zinc-200">
            {path}
          </Text>
        </View>

        <Text className="text-lg text-center text-zinc-900 dark:text-zinc-200">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View className="mx-5 mt-4">
        <BrowserLink
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
          className="text-center">
          Tap here if your app doesn't automatically update after making changes
        </BrowserLink>
      </View>
    </View>
  );
}

type BrowserLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  /** The external link to open in the browser */
  href: string;
};

function BrowserLink({ children, ...props }: BrowserLinkProps) {
  const onLinkPress: BrowserLinkProps['onPress'] = (event) => {
    if (Platform.OS !== 'web') {
      // Prevent the default behavior of linking to the default browser on native.
      event.preventDefault();
      // Open the link in an in-app browser.
      WebBrowser.openBrowserAsync(props.href);
    }
  };

  return (
    // @ts-expect-error: External URLs are not typed.
    <Link target="_blank" onPress={onLinkPress} {...props} href={props.href}>
      <Text>{children}</Text>
    </Link>
  );
}
