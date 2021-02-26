import { combineReducers, createStore } from 'redux';
import themeReducer from './reducers/ThemeReducer';
import userReducer from './reducers/UserReducer';
import IState from './states/IState';

const combinedReducer = combineReducers<IState>({
  user: userReducer,
  theme: themeReducer,
});

export const store = createStore(combinedReducer);

export default store;
