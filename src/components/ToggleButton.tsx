import React from 'react';
import Switch from '@material-ui/core/Switch';

interface IProps {
  label: string;
  name: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleButton: React.FC<IProps> = props => {
  return (
    <div>
      <label>
        <Switch
          checked={props.isChecked}
          onChange={props.onChange}
          name={props.name}
          color="primary"
        />
        {props.label}
      </label>
    </div>
  );
};

export default ToggleButton;
