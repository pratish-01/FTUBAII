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
import { useNavigation } from "@react-navigation/native";
import images from "@/constants/images";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    if (email && password && confirmPassword && name) {
      if (password === confirmPassword) {
        console.log("Sign Up with email: ", email);
        // Perform sign-up logic (API call, form validation)
      } else {
        console.log("Passwords do not match.");
      }
    } else {
      console.log("Please fill out all fields.");
    }
  };

  const handleLogin = () => {
    router.push("/login"); // Use router.push to navigate to the login page
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
      <View className="flex items-center justify-center px-6 py-[10rem]">
        {/* Logo and Title */}
        <View className="px-4 flex-row justify-between items-center gap-4 mb-6">
          <Image source={images.Avenger} className="w-8 h-8 rounded-full" />
          <Text className="text-4xl font-bold text-gray-500 text-center">
            FTUBAI
          </Text>
        </View>

        {/* Subtitle */}
        <Text className="text-lg text-gray-600 text-center mb-8">
          Create your account and start your journey today!
        </Text>

        {/* Name Input */}
        <View className="w-full mb-4">
          <Text className="text-lg text-gray-600 mb-2">Full Name</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
            <TextInput
              placeholder="Gaurav Singh"
              placeholderTextColor="#9ca3af"
              value={name}
              onChangeText={setName}
              className="text-gray-600 flex-1"
            />
          </View>
        </View>

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
        <View className="w-full mb-4">
          <Text className="text-lg text-gray-600 mb-2">Password</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
            <TextInput
              placeholder="Min. 8 characters"
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

        {/* Confirm Password Input */}
        <View className="w-full mb-6">
          <Text className="text-lg text-gray-600 mb-2">Confirm Password</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg p-2">
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor="#9ca3af"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="text-gray-600 flex-1"
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Icon
                name={showConfirmPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-[#a4da8f] w-full p-4 rounded-lg items-center mb-4"
        >
          <Text className="text-lg text-white font-bold">Sign Up</Text>
        </TouchableOpacity>

        {/* Already have an account? */}
        <View className="flex-row items-center mt-6">
          <Text className="text-gray-400">Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-[#a4da8f] font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
