import { App } from 'electron';
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import IState from '../states/IState';
import ITheme from '../states/ITheme';
import GlobalStyle from '../styles/GlobalStyle';
import DarkTheme from '../styles/themes/DarkTheme';
import LightTheme from '../styles/themes/LightTheme';
import Sidebar from './Sidebar';
import Titlebar from './Titlebar';
import UserForm from './UserForm';

const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  color: ${(props): string => props.theme.primaryTextColor};
  background-color: ${(props): string => props.theme.primaryBackgroundColor};
`;

const App: React.FC = () => {
  const theme = useSelector<IState, ITheme>(state => state.theme);
  return (
    <ThemeProvider theme={theme.name !== 'light' ? DarkTheme : LightTheme}>
      <>
        <GlobalStyle />

        <Titlebar title="Hello, world!" />
        <FlexDiv>
          <Sidebar collapsed={false} />
          <UserForm />
        </FlexDiv>
      </>
    </ThemeProvider>
  );
};

export default App;
