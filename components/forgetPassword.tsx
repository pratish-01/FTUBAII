// src/components/ChangePasswordModal.tsx
import { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const ChangePasswordModal = ({ isVisible, onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendOTP = () => {
    if (!email.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    // Simulate OTP sent
    Alert.alert("OTP Sent", "A 6-digit OTP has been sent to your email.");
    setStep(2);
  };

  const verifyOTP = () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "OTP should be 6 digits.");
      return;
    }
    setStep(3);
  };

  const changePassword = () => {
    if (newPassword.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Mismatch", "Passwords do not match.");
      return;
    }
    setStep(4);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-xl w-[90%]">
          {/* Step-wise UI Handling */}
          {step === 1 && (
            <>
              <View>
                <Text className="text-xl text-gray-700 font-semibold text-center mb-1">
                  Reset Password
                </Text>
                <Text className="text-base text-gray-600 text-center mb-4">
                  Enter your Email address to receive a verification code
                </Text>
              </View>
              <Text className="text-base text-gray-500">Email Address</Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg p-1">
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="#9ca3af"
                  className="text-gray-600 flex-1"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View className="flex-row justify-between items-center mt-4">
                <TouchableOpacity onPress={onClose} className="w-[35%]">
                  <Text className="text-gray-600 text-center p-3 border border-gray-300 rounded-lg">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={sendOTP}
                  className="bg-[#a4da8f] p-3 rounded-lg w-[60%]"
                >
                  <Text className="text-white text-center">Send OTP</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {step === 2 && (
            <>
              <View>
                <Text className="text-xl text-gray-700 font-semibold text-center mb-1">
                  Enter Verification code
                </Text>
                <Text className="text-base text-gray-600 text-center mb-4">
                  We've sent a code to gaurav.singh07004@gmail.com
                </Text>
              </View>
              <Text className="text-base text-gray-500">
                Enter One Time Password
              </Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg p-1">
                <TextInput
                  placeholder="One Time Password"
                  placeholderTextColor="#9ca3af"
                  className="text-gray-600 flex-1"
                  keyboardType="numeric"
                  maxLength={6}
                  value={otp}
                  onChangeText={setOtp}
                />
              </View>
              <View className="flex-row justify-between items-center mt-4">
                <TouchableOpacity onPress={onClose} className="w-[35%]">
                  <Text className="text-gray-600 text-center p-3 border border-gray-300 rounded-lg">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={sendOTP}
                  className="bg-[#a4da8f] p-3 rounded-lg w-[60%]"
                >
                  <Text className="text-white text-center">Verify</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {step === 3 && (
            <>
              <View>
                <Text className="text-xl text-gray-700 font-semibold text-center mb-1">
                  Set New Password
                </Text>
                <Text className="text-base text-gray-600 text-center mb-4">
                  Create Mininum 8 digit Character
                </Text>
              </View>
              <Text className="text-base text-gray-500">
                Enter One Time Password
              </Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg p-1 mb-4">
                <TextInput
                  placeholder="New Password"
                  className="text-gray-600 flex-1"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
              </View>
              <View className="flex-row items-center border border-gray-300 rounded-lg p-1">
                <TextInput
                  placeholder="Confirm Password"
                  className="text-gray-600 flex-1"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
              <View className="flex-row justify-between items-center mt-4">
                <TouchableOpacity onPress={onClose} className="w-[35%]">
                  <Text className="text-gray-600 text-center p-3 border border-gray-300 rounded-lg">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={sendOTP}
                  className="bg-[#a4da8f] p-3 rounded-lg w-[60%]"
                >
                  <Text className="text-white text-center">
                    Update Password
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {step === 4 && (
            <>
              <View>
                <Text className="text-xl text-gray-700 font-semibold text-center mb-1">
                  Password Updated
                </Text>
              </View>
              <Text className="text-gray-600 mt-2 text-center">
                Your password has been changed successfully.
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="bg-[#a4da8f] p-3 rounded-lg w-[100%] mt-4"
              >
                <Text className="text-white text-center">Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ChangePasswordModal;
