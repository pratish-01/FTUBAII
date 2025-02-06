import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";

import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
  size,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title?: string;
  size: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={focused ? "#0061FF" : "#666876"}
      resizeMode="contain"
      className={size}
    />
    <Text
      className={`${
        focused
          ? "text-primary-300 font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            borderTopColor: "#0061FF1A",
            borderTopWidth: 0,
            minHeight: 65,
          },
        }}
      >

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" size="size-6"/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Scan",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="bg-blue-200 absolute -top-[2.5rem] w-[4.5rem] h-[4.5rem] rounded-full border-[3px] border-slate-300 flex items-center justify-center">
              <TabIcon focused={focused} icon={icons.scan} size="size-10" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Account" size="size-6"/>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
