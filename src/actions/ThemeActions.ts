import { actionCreatorFactory } from 'typescript-fsa';

import ITheme from '../states/ITheme';

const actionCreator = actionCreatorFactory('theme-action');

export const changeThemeAction = actionCreator<ITheme>('change-theme');
