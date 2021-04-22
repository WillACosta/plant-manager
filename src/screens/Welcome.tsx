import React from "react";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Button } from "../components";
import { Colors, Fonts } from "../shared";

import welcomeIllustration from "../../assets/images/ilustration.png";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('Identification');
  }

  return (
    <>
      <Container>
        <WelcomeText>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </WelcomeText>
        <Illustration source={welcomeIllustration} resizeMode="contain" />
        <DescriptionText>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </DescriptionText>

        <Button onPress={handleStart}>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </Button>
      </Container>
    </>
  );
};

export default Welcome;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 43px 20px;
`;

const WelcomeText = styled.Text`
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${Colors.heading};
  font-family: ${Fonts.heading};
`;

const DescriptionText = styled.Text`
  text-align: center;
  font-size: 17px;
  line-height: 25px;
  color: ${Colors.body_dark};
  padding: 0 20px;
  font-family: ${Fonts.body};
`;

const Illustration = styled.Image`
  height: ${Dimensions.get("window").width * 0.7}px;
`;
