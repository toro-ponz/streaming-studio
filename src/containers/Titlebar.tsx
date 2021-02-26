import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import styled from 'styled-components';

const TitlebarHeader = styled.header`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 36px;
  min-height: 36px;
  max-height: 36px;
  color: ${(props): string => props.theme.commonTextColor};
  background-color: ${(props): string => props.theme.commonBackgroundColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ApplicationIconBox = styled.div``;

const TitleBox = styled.div`
  order: 1;
  flex-grow: 1;
  -webkit-app-region: drag;
`;

const TitleText = styled.span`
  font-size: 0.85rem;
`;

const ControllsBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  order: 2;
  flex-grow: 0;
`;

const IconImage = styled.img``;

interface IProps {
  title?: string | null;
}

const Titlebar: React.FC<IProps> = props => {
  const minimize = () => window.app.exit();
  const maximize = () => window.app.exit();
  const restore = () => window.app.exit();
  const close = () => window.app.exit();
  return (
    <TitlebarHeader>
      <ApplicationIconBox>
        <IconButton></IconButton>
      </ApplicationIconBox>

      <TitleBox>
        <TitleText>{props.title}</TitleText>
      </TitleBox>

      <ControllsBox>
        <IconButton aria-label="minimize" onClick={minimize}>
          <IconImage
            srcSet="../assets/icons/min-w-10.png 1x, ../assets/icons/min-w-12.png 1.25x, ../assets/icons/min-w-15.png 1.5x, ../assets/icons/min-w-15.png 1.75x, ../assets/icons/min-w-20.png 2x, ../assets/icons/min-w-20.png 2.25x, ../assets/icons/min-w-24.png 2.5x, ../assets/icons/min-w-30.png 3x, ../assets/icons/min-w-30.png 3.5x"
            draggable="false"
          />
        </IconButton>
        <IconButton aria-label="maximize" onClick={maximize}>
          <IconImage
            srcSet="../assets/icons/max-w-10.png 1x, ../assets/icons/max-w-12.png 1.25x, ../assets/icons/max-w-15.png 1.5x, ../assets/icons/max-w-15.png 1.75x, ../assets/icons/max-w-20.png 2x, ../assets/icons/max-w-20.png 2.25x, ../assets/icons/max-w-24.png 2.5x, ../assets/icons/max-w-30.png 3x, ../assets/icons/max-w-30.png 3.5x"
            draggable="false"
          />
        </IconButton>
        <IconButton aria-label="restore" onClick={restore}>
          <IconImage
            srcSet="../assets/icons/restore-w-10.png 1x, ../assets/icons/restore-w-12.png 1.25x, ../assets/icons/restore-w-15.png 1.5x, ../assets/icons/restore-w-15.png 1.75x, ../assets/icons/restore-w-20.png 2x, ../assets/icons/restore-w-20.png 2.25x, ../assets/icons/restore-w-24.png 2.5x, ../assets/icons/restore-w-30.png 3x, ../assets/icons/restore-w-30.png 3.5x"
            draggable="false"
          />
        </IconButton>
        <IconButton aria-label="close" onClick={close}>
          <IconImage
            srcSet="../assets/icons/close-w-10.png 1x, ../assets/icons/close-w-12.png 1.25x, ../assets/icons/close-w-15.png 1.5x, ../assets/icons/close-w-15.png 1.75x, ../assets/icons/close-w-20.png 2x, ../assets/icons/close-w-20.png 2.25x, ../assets/icons/close-w-24.png 2.5x, ../assets/icons/close-w-30.png 3x, ../assets/icons/close-w-30.png 3.5x"
            draggable="false"
          />
        </IconButton>
      </ControllsBox>
    </TitlebarHeader>
  );
};

export default Titlebar;
