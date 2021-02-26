import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import Sidebar from './Sidebar';
import UserForm from './UserForm';
import GlobalStyle from '../styles/GlobalStyle';
import LightTheme from '../styles/themes/LightTheme';
import DarkTheme from '../styles/themes/DarkTheme';
import IState from '../states/IState';
import ITheme from '../states/ITheme';
import { App } from 'electron';

const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  color: ${(props): string => props.theme.textColor};
  background-color: ${(props): string => props.theme.backgroundColor};
`;

const App: React.FC = () => {
  const theme = useSelector<IState, ITheme>(state => state.theme);
  return (
    <ThemeProvider theme={theme.name !== 'light' ? DarkTheme : LightTheme}>
      <>
        <GlobalStyle />
        <FlexDiv>
          <Sidebar collapsed={false} />
          <UserForm />
        </FlexDiv>
      </>
    </ThemeProvider>
  );
};

export default App;
