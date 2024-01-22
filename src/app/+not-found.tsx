import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl">This screen doesn't exist.</Text>

        <Link href="/" className="py-4 mt-4">
          <Text className="text-blue-600 dark:text-blue-300">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
