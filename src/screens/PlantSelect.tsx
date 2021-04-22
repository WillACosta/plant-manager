import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Header from "../components/Header";
import BadgeButton from "../components/BadgeButton";

import { Colors, Fonts } from "../shared";
import api from "../services/api";

interface EnvironmentProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  useEffect(() => {
    async function getEnv() {
      const { data } = await api.get("plants_environments");
      console.log('DAta', data);
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    getEnv();
  }, []);

  return (
    <Wrapper>
      <Header />
      <SubheaderContainer>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </SubheaderContainer>

      <ListContainer>
        <List
          data={environments}
          renderItem={({ item }) => <BadgeButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 40,
            justifyContent: "center",
            paddingBottom: 5,
            marginLeft: 32,
            marginVertical: 32,
          }}
        />
      </ListContainer>
    </Wrapper>
  );
};

export default PlantSelect;

const Wrapper = styled.SafeAreaView`
  margin-top: 45px;
  /* padding: 0 30px; */
  flex: 1;
`;

const SubheaderContainer = styled.View`
  margin-top: 40px;
  padding: 0 35px;
`;

const Title = styled.Text`
  font-size: 18px;
  line-height: 23px;
  font-family: ${Fonts.heading};
  color: ${Colors.body_dark};
`;

const Subtitle = styled.Text`
  font-size: 18px;
  line-height: 23px;
  font-family: ${Fonts.body};
  color: ${Colors.body_dark};
  margin-bottom: 24px;
`;

const ListContainer = styled.View``;

const List = styled.FlatList``;
