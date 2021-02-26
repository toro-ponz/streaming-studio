import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../actions/UserActions';
import { IState } from '../states/IState';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import ExitButton from './ExitButton';
import NameBox from './NameBox';
import styled from 'styled-components';

const Div = styled.div`
  height: 98%;
  width: 98%;
  background: #1c212e;
  padding: 1%;
  color: white;
  flex-grow: 1;
`;

const UserForm: React.FC = () => {
  const { name, count } = useSelector<IState, IUser>(a => a.user);
  const dispatch = useDispatch();
  const onNameChange = useCallback((value: string) => {
    dispatch(changeUserAction({ name: value }));
  }, []);
  const onCountClick = useCallback(() => {
    dispatch(changeUserAction({ count: count + 1 }));
  }, [count]);
  return (
    <Div>
      <NameBox
        value={name}
        label="ユーザー名"
        type="text"
        onChangeText={onNameChange}
      />
      <CountButton count={count} label="訪問" onClick={onCountClick} />
      <ExitButton />
    </Div>
  );
};

export default UserForm;
