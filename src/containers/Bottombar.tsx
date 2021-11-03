import React from 'react';
import styled from 'styled-components';
import ActionButton from '../components/ActionButton';

const Footer = styled.footer`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  color: ${(props): string => props.theme.commonTextColor};
  background-color: ${(props): string => props.theme.commonBackgroundColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
`;

const LeftDiv = styled.div`
  order: 1;
  flex-grow: 0;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  order: 2;
  flex-grow: 1;
`;

const RightDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  order: 3;
  flex-grow: 0;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

const Bottombar: React.FC<IProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onClick = () => {};
  return (
    <Footer>
      <LeftDiv></LeftDiv>

      <CenterDiv>
        <ActionButton label="Streaming Now" onClick={onClick}></ActionButton>
      </CenterDiv>

      <RightDiv></RightDiv>
    </Footer>
  );
};

export default Bottombar;
