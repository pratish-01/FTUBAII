import {
  Alert,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

import { useState } from "react";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import { settings } from "@/constants/data";
import images from "@/constants/images";
import ChangePasswordModal from "@/components/forgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { updateModal } from "@/app/redux/slices/authSlice";

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
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={onPress || (() => router.push(title))}
      className="flex flex-row items-center justify-between py-4 bg-white rounded-lg mb-3"
    >
      <View className="flex flex-row items-center gap-3">
        <View
          className={
            title !== "Logout"
              ? `bg-slate-200 p-2 rounded-xl`
              : `p-2 rounded-xl`
          }
        >
          <Image source={icon} className="w-6 h-6" />
        </View>
        <Text className={`text-[1.3rem] text-gray-800 ${textStyle}`}>
          {title === "History"
            ? "Scan History"
            : title === "Saved"
            ? "Saved Products"
            : title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className="w-5 h-5" />}
    </TouchableOpacity>
  );
};

const DeleteAccountModal = ({ isVisible, onClose, onDelete }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-2xl w-[90%]">
          <Text className="text-xl font-bold text-gray-800">
            Delete Account?
          </Text>
          <Text className="text-gray-600 mt-2">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </Text>

          <View className="flex-row justify-end mt-5">
            <TouchableOpacity
              onPress={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 mr-2"
            >
              <Text className="text-gray-800">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onDelete}
              className="px-4 py-2 rounded-lg bg-red-500"
            >
              <Text className="text-white">Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Account = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const { modal } = useSelector((state: RootState) => state.auth);

  const handleDeleteAccount = () => {
    setModalVisible(false);
    // Alert.alert(
    //   "Account Deleted",
    //   "Your account has been permanently deleted."
    // );
  };

  return (
    <SafeAreaView className="h-full bg-white p-6">
      <Text className="text-xl font-rubik-bold mt-5 text-black-700">
        Account
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-0"
      >
        <View className="flex-row items-center mt-[1.5rem]">
          <Image
            source={images.profile}
            className="w-[4.55rem] h-[4.55rem] rounded-2xl"
          />
          <View className="ml-4">
            <Text className="text-[1.4rem] text-gray-800 font-semibold">
              Gaurav Singh
            </Text>
            <Text className="text-lg leading-[2rem] font-bold text-gray-500">
              gaurav.singh@gmail.com
            </Text>
          </View>
        </View>

        <View className="mt-10">
          {settings.map((item, index) => (
            <SettingsItem
              key={index}
              icon={item.icon}
              title={item.title}
              route={item.title}
            />
          ))}
        </View>

        <View className="flex flex-col">
          <SettingsItem
            icon={icons.lock}
            title="Change Password"
            textStyle="text-gray-800"
            showArrow={false}
            onPress={() => dispatch(updateModal(!modal))}
          />
          <SettingsItem
            icon={icons.trash}
            title="Delete Account"
            textStyle="text-gray-800"
            showArrow={false}
            onPress={() => setModalVisible(true)}
          />
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-red-400"
            showArrow={false}
            onPress={() => Alert.alert("Logged out!")}
          />
        </View>
      </ScrollView>

      <DeleteAccountModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={handleDeleteAccount}
      />

      <ChangePasswordModal
        isVisible={modal}
        onClose={() => dispatch(updateModal(!modal))}
      />
    </SafeAreaView>
  );
};

export default Account;
