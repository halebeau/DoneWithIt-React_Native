import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';


export default function App() {
  const handlePress = () => console.log("it worked");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hell Ya!</Text>
      <TouchableOpacity onPress={() => console.log("touched")}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFDCE",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 35,
    padding: 12,
  }
});
