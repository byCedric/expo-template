import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

import { ScreenInfo } from '~/components/ScreenInfo';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Modal</Text>
      <View className="w-10/12 h-[1px] my-8 bg-slate-200 dark:bg-slate-800" />
      <ScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
