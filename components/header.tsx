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

const Header = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <Image source={images.profile} className="w-12 h-12 rounded-xl" />
          <View className="ml-2 mt-3">
            <Text className="text-[0.8rem] text-gray-500">{getGreeting()}</Text>
            <Text className="text-lg leading-[1.5rem] font-bold text-black">
              Gaurav Singh
            </Text>
          </View>
        </View>
        <View className="p-2 bg-blue-50 rounded-full">
          <Image source={icons.bell} className="w-6 h-6" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
