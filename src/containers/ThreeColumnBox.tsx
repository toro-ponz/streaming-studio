import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import VideoCapture from './VideoCapture';

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
`;

const LeftSidebarBox = styled.div`
  order: 1;
  flex-grow: 0;
`;

const CenterBox = styled.div`
  order: 2;
  flex-grow: 1;
`;

const RightSidebarBox = styled.div`
  order: 3;
  flex-grow: 0;
`;

const ThreeColumnBox: React.FC = () => {
  return (
    <Box>
      <LeftSidebarBox>
        <Sidebar />
      </LeftSidebarBox>

      <CenterBox>
        <VideoCapture />
      </CenterBox>

      <RightSidebarBox></RightSidebarBox>
    </Box>
  );
};

export default ThreeColumnBox;
