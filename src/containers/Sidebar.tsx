import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'react-pro-sidebar/dist/css/styles.css';

import { changeThemeAction } from '../actions/ThemeActions';
import ToggleButton from '../components/ToggleButton';
import IState from '../states/IState';
import ITheme from '../states/ITheme';

const Div = styled.div`
  height: 100%;
  color: ${(props): string => props.theme.textColor};
  background-color: ${(props): string => props.theme.backgroundColor};
`;

interface IProps {
  collapsed: boolean;
}

const Sidebar: React.FC<IProps> = props => {
  const theme = useSelector<IState, ITheme>(state => state.theme);
  const dispatch = useDispatch();
  const onThemeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('change theme!');
      if (event.target.checked) {
        console.log('change to dark theme.');
        dispatch(changeThemeAction({ name: 'dark' }));
      } else {
        console.log('change to light theme.');
        dispatch(changeThemeAction({ name: 'light' }));
      }
    },
    [],
  );
  return (
    <Div>
      <ProSidebar collapsed={props.collapsed}>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem>
            <ToggleButton
              label="ダークモード"
              name="isDarkMode"
              isChecked={theme.name !== 'light'}
              onChange={onThemeChange}
            />
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Div>
  );
};

export default Sidebar;
