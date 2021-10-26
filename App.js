import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, SafeAreaView, Image, Alert } from 'react-native';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Done With It</Text>
      <TouchableOpacity onPress={() => console.log("touched")}>
        <Image
          source={require("./assets/san_diego.png")}
          style={styles.image}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
      <Button
        style={styles.button}
        title="Login"
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        }
      />
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
  }, 
  button: {
    fontSize: 50,
  },
});
