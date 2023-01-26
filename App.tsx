import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
