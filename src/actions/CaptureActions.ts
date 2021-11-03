import { actionCreatorFactory } from 'typescript-fsa';

import ICapture from '../states/ICapture';

const actionCreator = actionCreatorFactory('capture-action');

export const changeCaptureAction = actionCreator<Partial<ICapture>>(
  'change-capture',
);
