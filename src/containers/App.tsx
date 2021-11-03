import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import IState from '../states/IState';
import ITheme from '../states/ITheme';
import GlobalStyle from '../styles/GlobalStyle';
import DarkTheme from '../styles/themes/DarkTheme';
import LightTheme from '../styles/themes/LightTheme';
import Bottombar from './Bottombar';
import ThreeColumnBox from './ThreeColumnBox';
import Titlebar from './Titlebar';

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  overflow: hidden;
  color: ${(props): string => props.theme.primaryTextColor};
  background-color: ${(props): string => props.theme.primaryBackgroundColor};
`;

const TitlebarBox = styled.div`
  order: 1;
  flex-grow: 0;
  height: 3rem;
`;

const ApplicationBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 3rem);
  overflow: hidden;
  order: 2;
  flex-grow: 1;
`;

const MainAreaBox = styled.div`
  order: 1;
  flex-grow: 1;
  height: calc(100vh - 10rem);
`;

const BottombarBox = styled.div`
  order: 2;
  flex-grow: 0;
  height: 7rem;
`;

const App: React.FC = () => {
  const theme = useSelector<IState, ITheme>(state => state.theme);

  return (
    <ThemeProvider theme={theme.name !== 'light' ? DarkTheme : LightTheme}>
      <>
        <GlobalStyle />

        <Box>
          <TitlebarBox>
            <Titlebar title="Hello, world!" />
          </TitlebarBox>

          <ApplicationBox>
            <MainAreaBox>
              <ThreeColumnBox />
            </MainAreaBox>

            <BottombarBox>
              <Bottombar />
            </BottombarBox>
          </ApplicationBox>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default App;
