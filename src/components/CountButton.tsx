import Button from '@material-ui/core/Button';
import React from 'react';

interface IProps {
  count: number;
  label: string;
  onClick: () => void;
}

const CountButton: React.FC<IProps> = props => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.label}
      </Button>
      <span style={{ marginLeft: '1em' }}>{props.count}</span>
    </div>
  );
};

export default CountButton;
