import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Feed from "./screens/screen1";
import Article from "./screens/screen2";
import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close Menu"
        icon={({ color, size }) => (
          <FontAwesome color="red" size={size} name="close" />
        )}
      />
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
