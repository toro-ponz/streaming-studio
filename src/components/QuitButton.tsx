import React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const QuitButton: React.FC<IProps> = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.label}</button>
    </>
  );
};

export default QuitButton;
