import { Text, View } from 'react-native';

import { ScreenInfo } from '~/components/ScreenInfo';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab Two</Text>
      <View className="w-10/12 h-[1px] my-8 bg-slate-200 dark:bg-slate-800" />
      <ScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
