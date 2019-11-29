import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class BasicForm extends Component {
  state = {
    value: '',
  };

  onSubmit = value => {
    this.setState({ value });
  };

  render() {
    return (
      <View>
        <Text>{this.state.value}</Text>
        <TextInput value={this.state.value} onChangeText={this.onSubmit} />
        <TouchableOpacity onPress={this.onSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
