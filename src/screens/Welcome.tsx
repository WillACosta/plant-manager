import React from 'react';
import { View, Text, Image }from 'react-native';

import Ilustration from '../../assets/images/ilustration.png';

export const Welcome: React.FC = () => {
  return (
    <>
      <View>
        <Image source={Ilustration} />
        <Text>Olá seja {'\n'} bem vindo</Text>
      </View>
    </>
  );
}