import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeUserAction } from '../actions/UserActions';
import IUser from '../states/IUser';

// Stateの初期値
const initUser: IUser = {
  count: 0,
  name: '',
};

const userReducer = reducerWithInitialState<IUser>(initUser)
  .case(changeUserAction, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .build();

export default userReducer;
