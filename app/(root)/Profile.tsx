import {
  Alert,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "expo-linear-gradient";
import icons from "@/constants/icons";
import { settings } from "@/constants/data";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-4 px-3 bg-white rounded-lg shadow-sm mb-2"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="w-6 h-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="w-4 h-4" />}
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <SafeAreaView className="h-full">
      {/* Add a modern gradient background */}
      {/* <LinearGradient
        colors={["#F3F4F6", "#E5E7EB"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      > */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-5"
      >
        {/* Profile Image Section */}
        <View className="flex items-center mt-8">
          <View className="relative">
            <Image
              source={{ uri: "https://via.placeholder.com/150" }} // replace with actual profile image
              className="w-32 h-32 rounded-full border-4 border-primary-500"
            />
            <TouchableOpacity className="absolute -bottom-2 right-2 bg-white p-2 rounded-full w-10 h-10 shadow-md border border-primary-500">
              <Image source={icons.edit} className="w-6 h-6" />
            </TouchableOpacity>
          </View>

          <Text className="text-2xl font-bold text-gray-800 mt-4">
            John Doe
          </Text>
          <Text className="text-lg text-gray-500">johndoe@example.com</Text>
        </View>

        {/* Settings Section */}
        <View className="flex flex-col mt-8">
          <Text className="text-xl font-semibold text-gray-700 mb-4">
            Account Settings
          </Text>
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>

        {/* Logout Section */}
        <View className="flex flex-col border-t border-primary-200 mt-8 pt-5">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
          />
        </View>
      </ScrollView>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

export default Profile;
