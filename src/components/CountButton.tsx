import React from 'react';
import Button from '@material-ui/core/Button';

interface IProps {
  count: number;
  label: string;
  onClick: () => void;
}

const CountButton: React.FC<IProps> = props => {
  return (
    <>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.label}
      </Button>
      <span style={{ marginLeft: '1em' }}>{props.count}</span>
    </>
  );
};

export default CountButton;
