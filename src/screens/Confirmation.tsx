import React from "react";
import styled from "styled-components/native";

import { useNavigation } from '@react-navigation/native';

import { Colors, Fonts } from "../shared";
import PrimaryButton from "../components/PrimaryButton";

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("PlantSelect");
  }

  return (
    <Wrapper>
      <FormContainer>
        <EmojiText>😄</EmojiText>
        <TextContainer>
          <LabelText>Prontinho</LabelText>
          <DescriptionText>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </DescriptionText>
        </TextContainer>
        <PrimaryButton onPress={handleNavigate}>Continuar</PrimaryButton>
      </FormContainer>
    </Wrapper>
  );
};

export default Confirmation;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  padding: 0 40px;
`;

const FormContainer = styled.View`
  align-items: center;
`;

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const EmojiText = styled.Text`
  font-size: 60px;
`;

const LabelText = styled.Text`
  font-family: ${Fonts.heading};
  color: ${Colors.heading};
  font-size: 24px;
  line-height: 30px;
  margin-top: 64px;
  margin-bottom: 16px;
`;

const DescriptionText = styled.Text`
  font-size: 17px;
  font-family: ${Fonts.body};
  color: ${Colors.body_dark};
  margin-bottom: 40px;
  font-weight: 400;
  text-align: center;
`;
