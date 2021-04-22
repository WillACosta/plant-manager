import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Header from "../components/Header";
import BadgeButton from "../components/BadgeButton";
import PlantCardPrimary from "../components/PlantCardPrimary";

import { Colors, Fonts } from "../shared";
import api from "../services/api";

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setplants] = useState<PlantProps[]>([]);
  const [environmentSelected, setenvironmentSelected] = useState("all");

  useEffect(() => {
    async function getEnvironments() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      );
      setEnvironments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }

    async function getPlantsData() {
      const { data } = await api.get("plants?_sort=name&_order=asc");
      setplants(data);
    }

    getEnvironments();
    getPlantsData();
  }, []);

  function handleSelectEnvironment(key: string) {
    setenvironmentSelected(key);
  }

  return (
    <Wrapper>
      <Header />
      <SubheaderContainer>
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </SubheaderContainer>

      <EnvListContainer>
        <List
          data={environments}
          renderItem={({ item }) => (
            <BadgeButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleSelectEnvironment(item.key)}
            />
          )}
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
      </EnvListContainer>

      <ListContainer>
        <List
          data={plants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            paddingBottom: 45,
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
  padding-bottom: 20px;
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

const ListContainer = styled.View`
  /* flex: 1; */
  padding: 0 32px;
  justify-content: center;
`;

const EnvListContainer = styled.View``;

const List = styled.FlatList``;
