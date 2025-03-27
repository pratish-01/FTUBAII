import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleAuthMode, updateField } from "@/app/redux/slices/authSlice";
import images from "@/constants/images";
import Icon from "react-native-vector-icons/MaterialIcons";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  isPassword = false,
  placeholder,
}) => {
  const [secure, setSecure] = React.useState(isPassword);

  return (
    <View className="w-full mb-4">
      <Text className="text-lg text-gray-600 mb-2">{label}</Text>
      <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={secure}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          className="text-gray-600 flex-1"
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? "visibility-off" : "visibility"}
              size={24}
              color="#9ca3af"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const AuthScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignUp, fullName, email, password, confirmPassword } = useSelector(
    (state: RootState) => state.auth
  );

  const handleChange = (key: keyof RootState["auth"], value: string) => {
    dispatch(updateField({ key, value }));
  };

  const handleSubmit = () => {
    console.log(isSignUp ? "Signing Up..." : "Logging In...", {
      fullName,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#0000" />
      <View className="flex items-center justify-center px-6 py-[9rem]">
        <View className="px-4 flex-row justify-between items-center gap-4 mb-6">
          <Image source={images.Avenger} className="w-8 h-8 rounded-full" />
          <Text className="text-4xl font-bold text-gray-500 text-center">
            FTUBAI
          </Text>
        </View>
        <Text className="text-lg text-gray-600 text-center mb-8">
          {isSignUp
            ? "Create your account and start your journey today!"
            : "Discover the origins of your food and support sustainable sourcing."}
        </Text>

        {isSignUp && (
          <CustomInput
            label="Full Name"
            placeholder="Full Name"
            value={fullName}
            onChange={(text) => handleChange("fullName", text)}
          />
        )}
        <CustomInput
          label="Email Address"
          placeholder="demo@gmail.com"
          value={email}
          onChange={(text) => handleChange("email", text)}
        />
        <CustomInput
          label="Choose a Password"
          placeholder="Min. 8 Character"
          value={password}
          onChange={(text) => handleChange("password", text)}
          isPassword
        />

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-[#a4da8f] w-full p-4 rounded-lg items-center mb-4"
        >
          <Text className="text-lg text-white font-bold">
            {isSignUp ? "Create Account" : "Continue"}
          </Text>
        </TouchableOpacity>

        {!isSignUp && (
          <TouchableOpacity className="mt-4">
            <Text className="text-gray-400">Forgot Password?</Text>
          </TouchableOpacity>
        )}

        <View className="flex-row items-center mt-6">
          <Text className="text-gray-400">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
          </Text>
          <TouchableOpacity onPress={() => dispatch(toggleAuthMode())}>
            <Text className="text-[#a4da8f] font-bold">
              {isSignUp ? "Log In" : "Sign Up"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
