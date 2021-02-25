import React from 'react';
import Button from '@material-ui/core/Button';

interface IProps {
  label: string;
  onClick: () => void;
}

const QuitButton: React.FC<IProps> = props => {
  return (
    <Button variant="outlined" color="secondary" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default QuitButton;
