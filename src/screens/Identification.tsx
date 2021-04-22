import React, { useState } from "react";
import styled from "styled-components/native";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors, Fonts } from "../shared";

import PrimaryButton from "../components/PrimaryButton";

const Identification: React.FC = () => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Confirmation");
  }

  function handleBlur() {
    setFocused(false);
    setFilled(!!name);
  }

  function handleFocus() {
    setFocused(true);
  }

  function handleInputChange(value: string) {
    setFilled(!!value);
    setName(value);
  }

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FormContainer>
          <EmojiText>{isFilled ? "😄" : "😀"}</EmojiText>
          <LabelText>Como podemos {"\n"} chamar você?</LabelText>
          <TextInput
            style={[
              (isFocused || isFilled) && { borderBottomColor: Colors.green },
            ]}
            placeholder="Digite um nome"
            returnKeyType="done"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChangeText={handleInputChange}
          />
          {isFilled ? (
            <PrimaryButton onPress={handleNavigate}>Começar</PrimaryButton>
          ) : (
            <PrimaryButton type="disabled">Começar</PrimaryButton>
          )}
        </FormContainer>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

export default Identification;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: space-around;
  padding: 0 40px;
`;

const FormContainer = styled.View`
  align-items: center;
`;

const EmojiText = styled.Text`
  font-size: 40px;
`;

const LabelText = styled.Text`
  margin-top: 24px;
  margin-bottom: 40px;
  font-family: ${Fonts.heading};
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.heading};
`;

const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.gray};
  padding-bottom: 12px;
  text-align: center;
  font-size: 18px;
  width: 100%;
  margin-bottom: 40px;
`;
