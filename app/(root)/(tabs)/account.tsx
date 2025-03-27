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

import icons from "@/constants/icons";
import { useNavigation } from "@react-navigation/native";
import { settings } from "@/constants/data";
import images from "@/constants/images";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  route?: string;
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
}: SettingsItemProp) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress || (() => navigation.navigate(title))}
      className="flex flex-row items-center justify-between py-4 bg-white rounded-lg px-4 mb-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="w-6 h-6" />
        <Text
          className={`text-lg font-rubik-medium text-black-500 ${textStyle}`}
        >
          {title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className="w-5 h-5" />}
    </TouchableOpacity>
  );
};

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-0"
      >
        <View className="flex flex-col items-center mt-10">
          <View className="relative">
            <Image
              source={images.profile}
              className="w-32 h-32 rounded-full border-4 border-slate-500 shadow-lg"
            />
            <TouchableOpacity className="absolute -bottom-4 right-4 bg-white rounded-full p-2 shadow-md border border-slate-300">
              <Image source={icons.edit} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-rubik-bold mt-5 text-black-700">
            Gaurav Singh
          </Text>
          <Text className="text-md font-rubik-regular text-gray-500">
            gaurav.singh@gmail.com
          </Text>
        </View>

        <View className="mt-10">
          {settings.slice(2).map((item, index) => (
            <SettingsItem
              key={index}
              icon={item.icon}
              title={item.title}
              route={item.title}
            />
          ))}
        </View>

        <View className="flex flex-col border-t mt-8 pt-5 border-gray-300">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={() => Alert.alert("Logged out!")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
