import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingRoutes from "../routes/stack.routes";

const Routes: React.FC = () => (
  <NavigationContainer>
    <OnboardingRoutes />
  </NavigationContainer>
);

export default Routes;
