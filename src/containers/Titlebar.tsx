import Icon from '@material-ui/core/Icon';
import React from 'react';
import styled from 'styled-components';
import HoverIconButton from '../components/HoverIconButton';

const TitlebarHeader = styled.header`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  color: ${(props): string => props.theme.commonTextColor};
  background-color: ${(props): string => props.theme.commonBackgroundColor};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ApplicationIconBox = styled.div`
  order: 1;
  flex-grow: 0;
  padding: 0.25rem;
`;

const TitleBox = styled.div`
  order: 2;
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
  order: 3;
  flex-grow: 0;
`;

const IconImage = styled.img``;

interface IProps {
  title?: string | null;
}

const Titlebar: React.FC<IProps> = props => {
  const minimize = () => window.app.minimize();
  const maximize = () => window.app.maximize();
  const restore = () => window.app.restore();
  const close = () => window.app.close();
  return (
    <TitlebarHeader>
      <ApplicationIconBox>
        <Icon></Icon>
      </ApplicationIconBox>

      <TitleBox>
        <TitleText>{props.title}</TitleText>
      </TitleBox>

      <ControllsBox>
        <HoverIconButton label="minimize" onClick={minimize}>
          <IconImage srcSet="../assets/icons/min-w-10.png 1x, ../assets/icons/min-w-12.png 1.25x, ../assets/icons/min-w-15.png 1.5x, ../assets/icons/min-w-15.png 1.75x, ../assets/icons/min-w-20.png 2x, ../assets/icons/min-w-20.png 2.25x, ../assets/icons/min-w-24.png 2.5x, ../assets/icons/min-w-30.png 3x, ../assets/icons/min-w-30.png 3.5x" />
        </HoverIconButton>
        <HoverIconButton label="maximize" onClick={maximize}>
          <IconImage srcSet="../assets/icons/max-w-10.png 1x, ../assets/icons/max-w-12.png 1.25x, ../assets/icons/max-w-15.png 1.5x, ../assets/icons/max-w-15.png 1.75x, ../assets/icons/max-w-20.png 2x, ../assets/icons/max-w-20.png 2.25x, ../assets/icons/max-w-24.png 2.5x, ../assets/icons/max-w-30.png 3x, ../assets/icons/max-w-30.png 3.5x" />
        </HoverIconButton>
        <HoverIconButton label="restore" onClick={restore}>
          <IconImage srcSet="../assets/icons/restore-w-10.png 1x, ../assets/icons/restore-w-12.png 1.25x, ../assets/icons/restore-w-15.png 1.5x, ../assets/icons/restore-w-15.png 1.75x, ../assets/icons/restore-w-20.png 2x, ../assets/icons/restore-w-20.png 2.25x, ../assets/icons/restore-w-24.png 2.5x, ../assets/icons/restore-w-30.png 3x, ../assets/icons/restore-w-30.png 3.5x" />
        </HoverIconButton>
        <HoverIconButton
          label="close"
          onClick={close}
          hoverBackground="rgba(255, 0, 0, 0.5)">
          <IconImage srcSet="../assets/icons/close-w-10.png 1x, ../assets/icons/close-w-12.png 1.25x, ../assets/icons/close-w-15.png 1.5x, ../assets/icons/close-w-15.png 1.75x, ../assets/icons/close-w-20.png 2x, ../assets/icons/close-w-20.png 2.25x, ../assets/icons/close-w-24.png 2.5x, ../assets/icons/close-w-30.png 3x, ../assets/icons/close-w-30.png 3.5x" />
        </HoverIconButton>
      </ControllsBox>
    </TitlebarHeader>
  );
};

export default Titlebar;
