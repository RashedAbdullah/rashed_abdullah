"use client"; // Required to use @react-pdf/renderer

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "NotoSansBengali",
  src: "https://fonts.gstatic.com/s/notosansbengali/v12/6xKpdSJbL9-e3p2hoUdb9H3gPyo.ttf", // Bangla font
});

Font.register({
  family: "Amiri",
  src: "https://cdn.jsdelivr.net/gh/alif-type/amiri@master/amiri-regular.ttf", // Arabic font
});

// Define PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
    padding: 10,
    border: "1 solid #ddd",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#333",
    // fontFamily: "Amiri",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#555",
  },
});

const LearningResourcePDF = ({ resources }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Learning Resources</Text>
      {resources.map((resource, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.text}>🔹 **Title:** {resource.title}</Text>
          <Text style={styles.text}>
            🔹 **Description:** {resource.description}
          </Text>
          <Text style={styles.text}>🔹 **URL:** {resource.url}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default LearningResourcePDF;
