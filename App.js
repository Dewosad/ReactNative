import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "./global.css";
import Home from "./Pages/Home";
import News from "./Pages/CardPages/News";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#0a2232" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerStyle: { backgroundColor: "#0a2232" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
