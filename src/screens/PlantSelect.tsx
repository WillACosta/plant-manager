import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Header from "../components/Header";
import BadgeButton from "../components/BadgeButton";
import PlantCardPrimary from "../components/PlantCardPrimary";
import Loader from "../components/Loader";

import { Colors, Fonts } from "../shared";
import api from "../services/api";
import { ActivityIndicator } from "react-native";

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
  const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setenvironmentSelected] = useState("all");
  const [isLoading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [loadedAll, setLoadedAll] = useState(false);

  async function getPlantsData() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) setLoading(true);

    if (page > 1) {
      setplants((oldValue) => [...oldValue, ...data]); // Concatena o estado anterior com o novo
    } else {
      setplants(data);
      setfilteredPlants(data);
    }

    setLoading(false);
    setLoadMore(false);
  }

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

    getEnvironments();
    getPlantsData();
    setLoading(false);
  }, []);

  function fetchMore(distance: number) {
    if (distance < 1) return;

    setLoadMore(true);
    setPage((page) => page + 1);
    getPlantsData();
  }

  function handleSelectEnvironment(key: string) {
    setenvironmentSelected(key);

    if (key === "all") return setfilteredPlants(plants);

    const filtered = plants.filter((plant) => plant.environments.includes(key));

    setfilteredPlants(filtered);
    setLoading(false);
  }

  if (isLoading) return <Loader />;

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
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            paddingBottom: 45,
          }}
          onEndReachedThreshold={0.1}
          onReached={({ distanceFromEnd }) => fetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadMore ? <ActivityIndicator color={Colors.green_dark} /> : <></>
          }
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
