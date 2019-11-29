import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import Parimpar from './componentes/Parimpar';
import { Inverter, MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import BasicForm from './componentes/BasicForm';
import { Avo } from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import Flex from './componentes/Flex';

export default createDrawerNavigator(
  {
    Flex: {
      screen: Flex,
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: { title: 'Texto Sincronizado' },
    },
    Avo: {
      screen: () => <Avo nome="Joao" sobrenome="Silva" />,
    },
    BasicForm: {
      screen: BasicForm,
    },
    Evento: {
      screen: Evento,
    },
    ValidarProps: {
      screen: () => <ValidarProps label="teste" ano={19} />,
    },
    Plataformas: {
      screen: Plataformas,
    },
    Contador: {
      screen: () => <Contador numeroInicial={100} />,
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: 'Mega Sena' },
    },
    Inverter: {
      screen: () => <Inverter texto="React Native!" />,
    },
    Parimpar: {
      screen: () => <Parimpar numero={30} />,
      navigationOptions: { title: 'Par & impar' },
    },
    Simples: {
      screen: () => <Simples texto="Flexivel!!" />,
    },
  },
  { drawerWidth: 300 }
);
