import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  background: #adadad;
`;

interface IProps {
  collapsed: boolean;
}

const Sidebar: React.FC<IProps> = props => {
  return (
    <Div>
      <ProSidebar collapsed={props.collapsed}>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </Div>
  );
};

export default Sidebar;
