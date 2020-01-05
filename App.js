import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Register from "./Register.js";

export default class App extends React.Component {
  state = {
    register: true,
    players: [],
    game: false
  };

  onPressLearnMore = () => {
    this.setState({ register: false });
  };
  onClickgoBack = () => {
    this.setState({ register: true });
  };
  addPlayer = playerName => {
    let newPlayers = this.state.players.concat({ name: playerName, score: 1 });
    this.setState({ players: newPlayers });
  };

  render() {
    return this.state.register ? (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome!</Text>
	<Text style={styles.header}>Something</Text>
        <Text style={styles.text}>Munchkin Counter</Text>
        <Image
          style={{ maxHeight: 285, maxWidth: 200 }}
          source={require("./img/munchkin.jpg")}
        />
        <Text style={styles.author}>by Astrid Novicky</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Start Playing"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    ) : (
      <Register
        goBack={this.onClickgoBack}
        addPlayer={this.addPlayer}
        players={this.state.players}
      />
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  header: {
    color: "lightblue",
    fontSize: 30
  },
  text: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  author: {
    color: "white",
    fontSize: 10,
    textAlign: "center"
  },
  link: {
    color: "lightblue",
    textDecorationLine: "underline",
    fontSize: 20
  }
});
