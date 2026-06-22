import { useUserStore } from "@/store/userStore";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#6366f1", tabBarInactiveTintColor: "#9ca3af" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Add Property",
          href: isAdmin ? undefined : null,
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
