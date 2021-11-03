import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeCaptureAction } from '../actions/CaptureActions';
import ActionButton from '../components/ActionButton';
import SelectBox, {
  SelectBoxItem,
  SelectBoxOnChangeEventArguments,
} from '../components/SelectBox';
import ICapture from '../states/ICapture';
import IState from '../states/IState';

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 0;
  max-height: 100%;
`;

const SelectorBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  order: 1;
  flex-grow: 0;
`;

const VideoBox = styled.div`
  order: 2;
  flex-grow: 1;
  align-items: stretch;
  min-height: 0;
  max-height: 100%;
`;

const VideoCapture: React.FC = () => {
  const capture = useSelector<IState, ICapture>(state => state.capture);
  const dispatch = useDispatch();

  const videoContainer = document.getElementById('video') as HTMLMediaElement;
  const onSelect = async (
    event: React.ChangeEvent<SelectBoxOnChangeEventArguments>,
  ) => {
    const sourceId = event.target.value;

    if (sourceId === 'none') {
      videoContainer.srcObject = null;
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mediaDevices = navigator.mediaDevices as any;
    const stream = await mediaDevices.getUserMedia({
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
        },
      },
    });

    if (videoContainer) {
      videoContainer.srcObject = stream;
      videoContainer.onloadedmetadata = () => {
        videoContainer.play();
      };
    }
  };

  const sourceItems: SelectBoxItem[] = capture.sources.map(source => {
    return {
      value: source.id,
      name: source.name,
    };
  });

  const onRefreshButton = async () => {
    const sources = await window.capture.getSources();
    dispatch(changeCaptureAction({ sources: sources }));
  };

  return (
    <Box>
      <SelectorBox>
        <SelectBox
          items={sourceItems}
          defaultItem={{ name: 'Select Your Screen OR Window.', value: 'none' }}
          onChange={onSelect}
        />
        <ActionButton label="Refresh" onClick={onRefreshButton} />
      </SelectorBox>

      <VideoBox>
        <video
          id="video"
          style={{ maxHeight: '100%', maxWidth: '100%' }}></video>
      </VideoBox>
    </Box>
  );
};

export default VideoCapture;
