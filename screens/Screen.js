import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { render } from "react-dom";

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end" }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="gray" />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>{this.props.name} Screen</Text>
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
