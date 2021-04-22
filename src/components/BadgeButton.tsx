import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

import {
  RectButton as Rect,
  RectButtonProps,
} from "react-native-gesture-handler";

import { Colors, Fonts } from "../shared";

interface Props extends RectButtonProps {
  title: string;
  active?: boolean;
}

const BadgeButton: React.FC<Props> = ({ title, active = false, ...rest }) => {
  return (
    <RectButton style={[ active && styles.containerActive ]} {...rest}>
      <ButtonText style={[ active && styles.TextActive ]}>{title}</ButtonText>
    </RectButton>
  );
};

export default BadgeButton;

const RectButton = styled(Rect)`
  background-color: ${Colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 20px;
`;

const ButtonText = styled.Text`
  color: ${Colors.heading};
  font-family: ${Fonts.body};
`;

const styles = StyleSheet.create({
  containerActive: {
    backgroundColor: Colors.green_light
  },
  TextActive: {
    color: Colors.green_dark,
    fontFamily: Fonts.heading
  }
});
