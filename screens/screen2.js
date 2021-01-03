import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", top: "3%" }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="gray" />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>{this.props.name} Screen 2</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "gray",
    fontSize: 20,
    fontWeight: "600",
  },
});
