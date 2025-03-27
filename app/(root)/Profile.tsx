import React from "react";
import {
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  setName,
  setEmail,
  setPhone,
  setAddress,
  setDob,
  setGender,
} from "@/app/redux/slices/profileSlice";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { name, email, phone, address, dob, gender } = useSelector(
    (state: RootState) => state.profile
  );

  const handleChange =
    (setter: (value: string) => { type: string; payload: string }) =>
    (text: string) =>
      dispatch(setter(text));

  return (
    <SafeAreaView className="h-full bg-white p-6">
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            router.push("/account");
          }}
        >
          <Image source={icons.backArrow} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800 mt-1 ml-[6rem]">
          Profile Details
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 0 }}
        >
          <View className="items-center mt-5 mb-3">
            <View className="relative">
              <Image
                source={images.profile}
                style={{ width: 96, height: 96, borderRadius: 16 }}
              />
              <TouchableOpacity className="absolute -bottom-1 -right-1 bg-white rounded-xl w-9 h-9 border border-gray-200 shadow-lg items-center justify-center">
                <Image
                  source={icons.edit}
                  style={{ width: 20, height: 20, tintColor: "#4b5563" }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-5">
            {[
              {
                label: "Full Name",
                value: name,
                setter: setName,
                keyboardType: "default",
              },
              {
                label: "Email Address",
                value: email,
                setter: setEmail,
                keyboardType: "email-address",
              },
              {
                label: "Phone Number",
                value: phone,
                setter: setPhone,
                keyboardType: "numeric",
              },
              {
                label: "Address",
                value: address,
                setter: setAddress,
                keyboardType: "default",
              },
              {
                label: "Date of Birth",
                value: dob,
                setter: setDob,
                keyboardType: "numeric",
              },
            ].map(({ label, value, setter, keyboardType }) => (
              <View key={label} className="mb-3">
                <Text className="text-lg text-gray-600">{label}</Text>
                <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
                  <TextInput
                    value={value}
                    onChangeText={handleChange(setter)}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    keyboardType={keyboardType as any}
                    placeholderTextColor="#9ca3af"
                    className="text-gray-600 flex-1"
                  />
                </View>
              </View>
            ))}

            <Text className="text-lg text-gray-600">Gender</Text>
            <View className="flex-row items-center gap-4">
              {["Male", "Female", "Others"].map((option) => (
                <TouchableOpacity
                  key={option}
                  className={`flex-1 items-center border rounded-lg p-2 ${
                    gender === option
                      ? "border-[#a4da8f] bg-[#e8f5e9]"
                      : "border-gray-300"
                  }`}
                  onPress={() => dispatch(setGender(option))}
                >
                  <Text className="text-lg text-gray-600">{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity className="mt-8 bg-[#a4da8f] rounded-lg py-3 items-center justify-center shadow-md">
            <Text className="text-white text-lg font-bold">Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
