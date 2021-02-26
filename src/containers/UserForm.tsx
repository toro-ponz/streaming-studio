import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeUserAction } from '../actions/UserActions';
import CountButton from '../components/CountButton';
import ExitButton from '../components/ExitButton';
import NameBox from '../components/NameBox';
import IState from '../states/IState';
import IUser from '../states/IUser';

const Div = styled.div`
  height: 98%;
  width: 98%;
  color: ${(props): string => props.theme.primaryTextColor};
  background-color: ${(props): string => props.theme.primaryBackgroundColor};
  padding: 1%;
  flex-grow: 1;
`;

const UserForm: React.FC = () => {
  const { name, count } = useSelector<IState, IUser>(state => state.user);
  const dispatch = useDispatch();
  const onNameChange = React.useCallback((value: string) => {
    dispatch(changeUserAction({ name: value }));
  }, []);
  const onCountClick = React.useCallback(() => {
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
