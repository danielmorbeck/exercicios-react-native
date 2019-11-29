import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sul: {},
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  },
});

const Circulo = props => <View style={styles.circulo} />;

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.norte}>
        <Circulo />
      </View>
      <View style={styles.centro}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.sul}>
        <Circulo />
      </View>
    </View>
  );
};
