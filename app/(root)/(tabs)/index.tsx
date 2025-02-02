import { Image, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <View className="px-5 mt-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Image source={images.profile} className="w-12 h-12 rounded-full" />
            <View className="ml-2 mt-3">
              <Text className="text-[0.8rem] text-gray-500">Good Morning</Text>
              <Text className="text-lg leading-[1.5rem] font-bold text-black">Gaurav Singh</Text>
            </View>
          </View>
          <View className="p-2 bg-blue-50 rounded-full">
            <Image source={icons.bell} className="w-6 h-6" />
          </View>
        </View>

        {/* <View className="my-5 flex-row justify-between items-center">
          <Text className="text-xl font-bold text-black">Featured</Text>
          <TouchableOpacity>
            <Text className="text-base font-bold text-primary-500">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-5 flex-row justify-between items-center">
          <Text className="text-xl font-bold text-black">Our Recommendation</Text>
          <TouchableOpacity>
            <Text className="text-base font-bold text-primary-500">See all</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
