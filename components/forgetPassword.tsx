import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ForgotPasswordProps {
  visible: boolean;
  onClose: () => void;
}

const ForgotPassword = ({ visible, onClose }: ForgotPasswordProps) => {
  const [step, setStep] = useState(1); // Manage the current step
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = () => {
    if (email) {
      setStep(2);
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length === 6) {
      setStep(3);
    }
  };

  const handlePasswordSubmit = () => {
    if (newPassword.length >= 8) {
      setStep(4);
    }
  };

  const handleSubmit = () => {
    setStep(1);
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View className="flex-1 justify-center items-center bg-black/30">
        <View className="bg-white w-[90%] p-6 rounded-lg">
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            className="absolute top-3 right-3"
          >
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>

          {step === 1 && (
            <>
              {/* Step 1: Email Input */}
              <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
                Forgot Password
              </Text>
              <Text className="text-gray-600 text-center mb-4">
                Enter your email to receive an OTP.
              </Text>
              <View className="mb-6">
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="#9ca3af"
                  value={email}
                  onChangeText={setEmail}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <TouchableOpacity
                onPress={handleEmailSubmit}
                className="bg-[#a4da8f] p-4 rounded-lg items-center"
              >
                <Text className="text-lg text-white font-bold">Send OTP</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 2 && (
            <>
              {/* Step 2: OTP Verification */}
              <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
                Enter OTP
              </Text>
              <Text className="text-gray-600 text-center mb-4">
                Enter the 6-digit OTP sent to your email.
              </Text>
              <View className="mb-6">
                <TextInput
                  placeholder="Enter OTP"
                  placeholderTextColor="#9ca3af"
                  value={otp}
                  onChangeText={setOtp}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                  keyboardType="numeric"
                  maxLength={6}
                />
              </View>
              <TouchableOpacity
                onPress={handleOtpSubmit}
                className="bg-[#a4da8f] p-4 rounded-lg items-center"
              >
                <Text className="text-lg text-white font-bold">Verify OTP</Text>
              </TouchableOpacity>
            </>
          )}

          {step === 3 && (
            <>
              {/* Step 3: Change Password */}
              <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
                Change Password
              </Text>
              <Text className="text-gray-600 text-center mb-4">
                Enter your new password.
              </Text>
              <View className="mb-6">
                <TextInput
                  placeholder="Enter new password"
                  placeholderTextColor="#9ca3af"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  className="border border-gray-300 rounded-lg p-3 text-gray-700"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                onPress={handlePasswordSubmit}
                className="bg-[#a4da8f] p-4 rounded-lg items-center"
              >
                <Text className="text-lg text-white font-bold">
                  Change Password
                </Text>
              </TouchableOpacity>
            </>
          )}

          {step === 4 && (
            <>
              {/* Step 4: Done */}
              <Text className="text-2xl font-bold text-center text-gray-800 mb-4">
                Password Changed!
              </Text>
              <Text className="text-gray-600 text-center mb-4">
                Your password has been changed successfully.
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="bg-[#a4da8f] p-4 rounded-lg items-center"
              >
                <Text className="text-lg text-white font-bold">Done</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPassword;
