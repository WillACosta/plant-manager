import React from 'react';
import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';
import Animation from '../../assets/load.json';

const Loader: React.FC = () => {
  return (
    <Container>
      <AnimationView
        source={Animation}
        autoPlay={true}
        loop
      />
    </Container>
  );
}

export default Loader;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AnimationView = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;