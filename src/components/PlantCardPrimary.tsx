import React from "react";
import styled from "styled-components/native";

import { SvgFromUri } from 'react-native-svg';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Colors, Fonts } from "../shared";

interface Props extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<Props> = ({ data, ...rest }) => {
  const { name, photo } = data;

  return (
    <ButtonField {...rest}>
      <SvgFromUri uri={ photo } width={70} height={70} />
      <Label>{ name }</Label>
    </ButtonField>
  );
};

export default PlantCardPrimary;

const ButtonField = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${Colors.shape};
  border-radius: 20px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Label = styled.Text`
  color: ${Colors.green_dark};
  font-family: ${Fonts.heading};
  margin: 0 16px;
`;
