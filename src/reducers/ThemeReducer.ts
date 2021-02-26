import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeThemeAction } from '../actions/ThemeActions';
import ITheme from '../states/ITheme';

const defaultTheme: ITheme = {
  name: 'light',
};

const themeReducer = reducerWithInitialState<ITheme>(defaultTheme)
  .case(changeThemeAction, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .build();

export default themeReducer;
