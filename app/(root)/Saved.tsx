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

const savedProducts = [
  { id: 1, title: "Organic Apples", date: "March 25, 2025", icon: icons.saved },
  {
    id: 2,
    title: "Whole Grain Bread",
    date: "March 24, 2025",
    icon: icons.saved,
  },
  { id: 3, title: "Fresh Milk", date: "March 23, 2025", icon: icons.saved },
  { id: 4, title: "Eggs (12 Pack)", date: "March 22, 2025", icon: icons.saved },
];

const SavedProducts = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full bg-white p-6">
      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={() => router.push("/account")}>
          <Image source={icons.backArrow} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800 mt-1 ml-[6rem]">
          Products Detail
        </Text>
      </View>

      {savedProducts.length === 0 ? (
        <View className="flex items-center justify-center h-full">
          <Image source={icons.trash} className="w-20 h-20" />
          <Text className="text-gray-500 mt-2">No saved products yet</Text>
        </View>
      ) : (
        <FlatList
          data={savedProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg mb-3">
              <View className="flex-row items-center gap-3">
                <Image source={item.icon} className="w-10 h-10" />
                <View>
                  <Text className="text-gray-800 font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-gray-500 text-sm">{item.date}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={icons.trash} className="w-5 h-5" />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default SavedProducts;
