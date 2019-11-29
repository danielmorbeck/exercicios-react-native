import React from 'react';
import { ScrollView, View, Flatlist, Text } from 'react-native';

const alunos = [
  { id: 1, nome: 'Joao', nota: 7.9 },
  { id: 2, nome: 'ana', nota: 7.9 },
  { id: 3, nome: 'pedro', nota: 7.9 },
  { id: 4, nome: 'daniel', nota: 7.9 },
  { id: 5, nome: 'andre', nota: 7.9 },
  { id: 6, nome: 'luiza', nota: 7.9 },
  { id: 7, nome: 'maria', nota: 7.9 },
  { id: 8, nome: 'joca', nota: 7.9 },
  { id: 9, nome: 'luiz', nota: 7.9 },
  { id: 10, nome: 'Joao', nota: 7.9 },
  { id: 11, nome: 'Joao', nota: 7.9 },
  { id: 12, nome: 'ana', nota: 7.9 },
  { id: 13, nome: 'pedro', nota: 7.9 },
  { id: 14, nome: 'daniel', nota: 7.9 },
  { id: 15, nome: 'andre', nota: 7.9 },
  { id: 16, nome: 'luiza', nota: 7.9 },
  { id: 17, nome: 'maria', nota: 7.9 },
  { id: 18, nome: 'joca', nota: 7.9 },
  { id: 19, nome: 'luiz', nota: 7.9 },
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',
};

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <Flatlist
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
