import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      {/* Logo */}
      <Image source={require("../assets/images/Logo.png")} style={{ width: 150, height: 150, marginBottom: 20 }} />

      {/* Title */}
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 10 }}>
        Welcome to Our App!
      </Text>

      {/* Description */}
      <Text style={{ fontSize: 16, color: "#555", textAlign: "center", paddingHorizontal: 20, marginBottom: 30 }}>
        Get started and explore amazing features.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        style={{
          backgroundColor: "#1D267D",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
