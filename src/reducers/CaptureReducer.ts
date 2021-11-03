import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { changeCaptureAction } from '../actions/CaptureActions';
import ICapture from '../states/ICapture';

const defaultCapture: ICapture = {
  sources: [],
  selected: null,
};

const captureReducer = reducerWithInitialState<ICapture>(defaultCapture)
  .case(changeCaptureAction, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .build();

export default captureReducer;
