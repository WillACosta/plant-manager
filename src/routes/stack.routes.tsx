import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Identification from "../screens/Identification";
import Confirmation from "../screens/Confirmation";
import PlantSelect from '../screens/PlantSelect';

import colors from "../shared/colors";

const OnboardingRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
      initialRouteName="PlantSelect"
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Identification" component={Identification} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="PlantSelect" component={PlantSelect} />
    </Navigator>
  );
};

export default OnboardingRoutes;
