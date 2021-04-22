import React from "react";
import styled from "styled-components/native";

import { TouchableOpacityProps } from "react-native";

import { Colors } from "../shared";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonWrapper activeOpacity={0.8} {...rest}>
      <TextComponent>{children}</TextComponent>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${Colors.green};
  height: 56px;
  width: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const TextComponent = styled.Text``;

export default Button;
