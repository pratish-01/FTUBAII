import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import icons from "@/constants/icons";

const ScanHistory = () => {
  const scanHistory = [
    { id: 1, title: "Amul Butter", date: "March 25, 2025", icon: icons.scan },
    {
      id: 2,
      title: "Nestlé Maggi Noodles",
      date: "March 24, 2025",
      icon: icons.scan,
    },
    {
      id: 3,
      title: "Kellogg's Corn Flakes",
      date: "March 23, 2025",
      icon: icons.scan,
    },
    {
      id: 4,
      title: "Parle-G Biscuits",
      date: "March 22, 2025",
      icon: icons.scan,
    },
    {
      id: 5,
      title: "Britannia Cheese Slices",
      date: "March 21, 2025",
      icon: icons.scan,
    },
    { id: 6, title: "Dabur Honey", date: "March 20, 2025", icon: icons.scan },
    { id: 7, title: "Tata Salt", date: "March 19, 2025", icon: icons.scan },
    {
      id: 8,
      title: "Lays Classic Salted Chips",
      date: "March 18, 2025",
      icon: icons.scan,
    },
  ];

  const router = useRouter();

  return (
    <SafeAreaView className="h-full bg-white p-6">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => router.push("/account")}>
          <Image source={icons.backArrow} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800 mt-1 ml-[6rem]">
          History Details
        </Text>
      </View>

      {/* Empty State */}
      {scanHistory.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Image source={icons.lock} style={{ width: 80, height: 80 }} />
          <Text className="text-gray-500 mt-2">No scans yet</Text>
        </View>
      ) : (
        <FlatList
          data={scanHistory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg mb-3">
              <View className="flex-row items-center gap-3">
                <Image source={icons.scan} style={{ width: 40, height: 40 }} />
                <View>
                  <Text className="text-gray-800 font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray-500 text-sm">{item.date}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={icons.trash} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Adjust for spacing
        />
      )}
    </SafeAreaView>
  );
};

export default ScanHistory;
