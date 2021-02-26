import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import UserForm from './UserForm';

const FlexDiv = styled.div`
  display: flex;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <FlexDiv>
      <Sidebar collapsed={false} />
      <UserForm />
    </FlexDiv>
  );
};

export default App;
