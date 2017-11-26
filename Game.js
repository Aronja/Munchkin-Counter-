import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Linking,
  TextInput
} from "react-native";
import { styles } from "./App.js";

export default class Game extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>work in progress</Text>
        <Button
          onPress={this.props.goBack}
          title="Go back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
