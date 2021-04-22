import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import { Colors } from "../shared";

interface ButtonProps extends TouchableOpacityProps {
  type?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, type }) => (
  <Wrapper>
    <ButtonText>{children}</ButtonText>
  </Wrapper>
);

export default PrimaryButton;

const Wrapper = styled.TouchableOpacity`
  width: 231px;
  height: 56px;
  background-color: ${Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const ButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 17px;
  line-height: 23px;
`;
