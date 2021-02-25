import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../actions/UserActions';
import { IState } from '../states/IState';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import QuitButton from './QuitButton';
import NameBox from './NameBox';

const UserForm: React.FC = () => {
  const { name, count } = useSelector<IState, IUser>(a => a.user);
  const dispatch = useDispatch();
  const onNameChange = useCallback((value: string) => {
    dispatch(changeUserAction({ name: value }));
  }, []);
  const onCountClick = useCallback(() => {
    dispatch(changeUserAction({ count: count + 1 }));
  }, [count]);
  const onQuitClick = useCallback(() => window.app.quit(), []);
  return (
    <div>
      <p>
        <NameBox
          value={name}
          label="ユーザー名"
          type="text"
          onChangeText={onNameChange}
        />
      </p>
      <p>
        <CountButton count={count} label="訪問" onClick={onCountClick} />
        <QuitButton label="Quit" onClick={onQuitClick} />
      </p>
    </div>
  );
};

export default UserForm;
