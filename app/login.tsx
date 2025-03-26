import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import images from "@/constants/images";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import ForgotPassword from "@/components/forgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { setForgetPassword } from "@/app/redux/slices/authSlice";
import { RootState } from "@/app/redux/store"; // Import the RootState type

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  // Type the useSelector to correctly read from Redux state
  const showForgetPassword = useSelector(
    (state: RootState) => state.auth.showForgetPassword
  );

  const handleLogin = () => {
    if (email && password) {
      console.log("Login button pressed with email: ", email);
      // Add your login logic here
    } else {
      console.log("Please fill out both fields.");
    }
  };

  const handleSignUp = () => {
    router.push("/signUp");
  };

  const handleForgetPassword = () => {
    dispatch(setForgetPassword(!showForgetPassword));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#0000" />
      <View className="flex items-center justify-center px-6 py-[12rem]">
        {/* Logo and Title */}
        <View className="px-4 flex-row justify-between items-center gap-4 mb-6">
          <Image source={images.Avenger} className="w-8 h-8 rounded-full" />
          <Text className="text-4xl font-bold text-gray-500 text-center">
            FTUBAI
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="text-lg text-gray-600 text-center mb-8">
          Discover the origins of your food and support sustainable sourcing.
        </Text>

        {/* Email Input */}
        <View className="w-full mb-4">
          <Text className="text-lg text-gray-600 mb-2">Email Address</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
            <TextInput
              placeholder="demo@gmail.com"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              className="text-gray-600 flex-1"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Password Input */}
        <View className="w-full mb-6">
          <Text className="text-lg text-gray-600 mb-2">Choose a Password</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
            <TextInput
              placeholder="Min. 8 Password"
              placeholderTextColor="#9ca3af"
              value={password}
              onChangeText={setPassword}
              className="text-gray-600 flex-1"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-[#a4da8f] w-full p-4 rounded-lg items-center mb-4"
        >
          <Text className="text-lg text-white font-bold">Continue</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgetPassword} className="mt-4">
          <Text className="text-gray-400">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Section */}
        <View className="flex-row items-center mt-6">
          <Text className="text-gray-400">Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-[#a4da8f] font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password Modal */}
      <ForgotPassword
        visible={showForgetPassword}
        onClose={handleForgetPassword}
      />
    </SafeAreaView>
  );
};

export default Login;
