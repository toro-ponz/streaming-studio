import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeThemeAction } from '../actions/ThemeActions';
import ToggleButton from '../components/ToggleButton';
import IState from '../states/IState';
import ITheme from '../states/ITheme';

const FlexBox = styled.div`
  height: 100%;
  color: ${(props): string => props.theme.commonTextColor};
  background-color: ${(props): string => props.theme.commonBackgroundColor};
  display: flex;
  flex-flow: column;
`;

const Fill = styled.div`
  flex-grow: 1;
`;

const Sidebar: React.FC = () => {
  const theme = useSelector<IState, ITheme>(state => state.theme);
  const dispatch = useDispatch();
  const onThemeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        dispatch(changeThemeAction({ name: 'dark' }));
      } else {
        dispatch(changeThemeAction({ name: 'light' }));
      }
    },
    [],
  );
  return (
    <FlexBox>
      <IconButton aria-label="settings" color="primary">
        <SettingsIcon />
      </IconButton>
      <IconButton aria-label="settings" color="primary">
        <SettingsIcon />
      </IconButton>
      <IconButton aria-label="settings" color="primary">
        <SettingsIcon />
      </IconButton>
      <IconButton aria-label="settings" color="primary">
        <SettingsIcon />
      </IconButton>
      <Fill></Fill>
      <div>
        <ToggleButton
          label="ダークモード"
          name="isDarkMode"
          isChecked={theme.name !== 'light'}
          onChange={onThemeChange}
        />
      </div>
      <IconButton aria-label="settings" color="primary">
        <SettingsIcon />
      </IconButton>
    </FlexBox>
  );
};

export default Sidebar;
