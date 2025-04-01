import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#6200ee",
        width: "100%",
        paddingVertical: 40,
        alignItems: "center",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        color: "white",
    },
});

export default Header;