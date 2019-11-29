import React from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar';
import { Inverter, MegaSena } from './componentes/Multi';

export default function App() {
  return (
    <View style={styles.container}>
      <Simples texto="Flexivel!!" />
      <Parimpar numero={30} />
      <Inverter texto="React Native!" />
      <MegaSena numeros={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40,
  },
});
