import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Feed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View />
          <TouchableOpacity
            style={{
              justifyContent: "flex-start",
              top: "10%",
              flexDirection: "row",
            }}
            onPress={this.props.navigation.openDrawer}
          >
            <Text style={styles.text}> Menu </Text>
            <FontAwesome5 name="bars" size={24} color="gray" />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>{this.props.name} Screen 1</Text>
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
