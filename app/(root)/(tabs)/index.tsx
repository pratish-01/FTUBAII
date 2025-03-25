import { Image, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View className="px-5 mt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center justify-center space-x-3">
            <Image source={images.profile} className="w-12 h-12 rounded-full" />
            <View className="ml-2">
              <Text className="text-[0.8rem] text-gray-500">
                {getGreeting()}
              </Text>
              <Text className="text-[1rem] leading-[1.3rem] font-bold text-black">
                Gaurav Singh
              </Text>
            </View>
          </View>
          <View className="p-2 bg-blue-50 rounded-full">
            <Image source={icons.bell} className="w-6 h-6" />
          </View>
        </View>
      </View>
      <View className="flex-1 items-center justify-center px-5 -mt-[0rem]">
        <Text className="text-5xl font-bold text-gray-300 text-center">
          Welcome to FITUBAI
        </Text>
        <Text className="text-3xl text-gray-400 text-center mt-8">
          Scan QR codes to get instant product details and more.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
