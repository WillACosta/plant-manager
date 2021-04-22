import React from "react";
import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Colors, Fonts } from "../shared";
import Profile from "../../assets/images/profile.jpg";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <WelcomeText>
        Olá, {"\n"}
        <Username>Will</Username>
      </WelcomeText>
      <Avatar source={Profile} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 35px;
`;

const WelcomeText = styled.Text`
  font-size: 32px;
  line-height: 36px;
  font-family: ${Fonts.thin};
  color: ${Colors.body_dark};
`;

const Username = styled.Text`
  font-size: 32px;
  line-height: 36px;
  font-family: ${Fonts.heading};
  color: ${Colors.heading};
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
