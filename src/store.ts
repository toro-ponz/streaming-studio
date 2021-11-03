import { combineReducers, createStore } from 'redux';
import captureReducer from './reducers/CaptureReducer';
import themeReducer from './reducers/ThemeReducer';
import userReducer from './reducers/UserReducer';
import IState from './states/IState';

const combinedReducer = combineReducers<IState>({
  user: userReducer,
  theme: themeReducer,
  capture: captureReducer,
});

export const store = createStore(combinedReducer);

export default store;
