import Button from '@material-ui/core/Button';
import React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<IProps> = props => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.label}
      </Button>
    </div>
  );
};

export default ActionButton;
