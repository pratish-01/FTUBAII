import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View, TouchableOpacity, StatusBar } from "react-native";
import images from "@/constants/images";
import { useRouter } from "expo-router"; // Import useRouter from expo-router

const Auth = () => {
  const router = useRouter(); // Get the router instance for navigation

  const handleLogin = () => {
    router.push("/login"); // Use router.push to navigate to the login page
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#0b1222" />
      <View className="bg-[#0b1222] p-4 flex-1 rounded-br-[8rem] rounded-bl-[8rem]">
        <View className="bg-white w-[7rem] h-[7rem] rounded-full items-center justify-center absolute -bottom-[12%] left-[40%]">
          <Image
            source={images.Avenger}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
        </View>
      </View>

      <View className="flex-1">
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-4xl font-bold text-gray-300 text-center">
            Eat Smart, Live Healthy
          </Text>
          <Text className="text-xl text-gray-400 text-center mt-8">
            Discover the origins of your food and support sustainable sourcing.
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          className="bg-[#a4da8f] flex-row items-center justify-between px-8 py-4 rounded-lg w-[48%] mx-auto mb-20"
        >
          <Text className="text-white text-center text-base font-bold">
            Get Started for Free
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
