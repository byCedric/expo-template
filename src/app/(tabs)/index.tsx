import { Text, View } from 'react-native';

import { ScreenInfo } from '~/components/ScreenInfo';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab One</Text>
      <View className="w-10/12 h-[1px] my-8 bg-slate-200 dark:bg-slate-800" />
      <ScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
