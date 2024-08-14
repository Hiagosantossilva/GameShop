import React from 'react';
import styled from 'styled-components';
import CatalogoGames from '../components/Catalogo';

const AppContainer = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <CatalogoGames/>
    </AppContainer>
  );
}

export default Home;
