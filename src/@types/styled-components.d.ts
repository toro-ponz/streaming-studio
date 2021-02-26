import 'styled-components';
import { ITheme } from '../styles/themes/ITheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
