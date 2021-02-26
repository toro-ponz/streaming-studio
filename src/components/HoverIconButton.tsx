import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

const useStyles = makeStyles({
  button: {
    'padding-left': '1.25rem',
    'padding-right': '1.25rem',
    'border-radius': 'unset',
    '&:hover': {
      background: (props: IProps) => {
        return props.hoverBackground
          ? props.hoverBackground
          : 'rgba(255, 255, 255, 0.25)';
      },
    },
  },
});

interface IProps {
  label?: string;
  hoverBackground?: string | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const HoverIconButton: React.FC<IProps> = props => {
  const classes = useStyles(props);
  return (
    <IconButton
      aria-label={props.label}
      onClick={props.onClick}
      className={classes.button}>
      {props.children}
    </IconButton>
  );
};

export default HoverIconButton;
