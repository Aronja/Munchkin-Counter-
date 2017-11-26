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

export default class Register extends React.Component {
  state = {
    name: ""
  };

  changeName = name => {
    this.setState({ name: name });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: "grey",
            borderWidth: 2,
            width: 150,
            color: "white"
          }}
          placeholder="write your name here"
          onChangeText={this.changeName}
          value={this.state.name}
        />
        {this.props.players.map((player, index) => (
          <View key={index}>
            <Text style={styles.text}>{player.name}</Text>
            <Text style={styles.text}>{player.score}</Text>
          </View>
        ))}
        <Button
          onPress={() => {
            this.props.addPlayer(this.state.name);
          }}
          title="Register"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.text}>
          You will at least need two friends to play with you.
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL("http://www.worldofmunchkin.com/game/fastplay.html")
          }
        >
          Munchkin Rules
        </Text>
        <Image
          style={{ maxHeight: 285, maxWidth: 400 }}
          source={require("./img/munchkincard.jpeg")}
        />
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
