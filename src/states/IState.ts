import ICapture from './ICapture';
import ITheme from './ITheme';
import IUser from './IUser';

export default interface IState {
  user: IUser;
  theme: ITheme;
  capture: ICapture;
}
