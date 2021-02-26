import { combineReducers, createStore } from 'redux';
import IState from './states/IState';
import userReducer from './reducers/UserReducer';
import themeReducer from './reducers/ThemeReducer';

const combinedReducer = combineReducers<IState>({
  user: userReducer,
  theme: themeReducer,
});

export const store = createStore(combinedReducer);

export default store;
