import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  let isLogged = true; // Change this based on your login logic

  // Loading state (optional)
  // if (loading) {
  //   return (
  //     <SafeAreaView className="bg-white h-full flex justify-center items-center">
  //       <ActivityIndicator className="text-primary-300" size="large" />
  //     </SafeAreaView>
  //   );
  // }

  // Redirect to sign-in if not logged in
  if (!isLogged) {
    return <Redirect href="/sign-in" />;
  }

  // Return the app layout when logged in
  return <Slot />;
}
