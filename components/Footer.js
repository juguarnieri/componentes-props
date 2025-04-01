import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = ({ copyright }) => {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>{copyright}</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
    footer: {
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: "#6200ee",
        width: "100%",
        alignItems: "center",
    },
    footerText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default Footer;