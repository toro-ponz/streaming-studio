import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

export interface SelectBoxItem {
  value: string;
  name: string;
}

export interface SelectBoxOnChangeEventArguments {
  name?: string | undefined;
  value: unknown;
}

interface IProps {
  items: SelectBoxItem[];
  defaultItem?: SelectBoxItem | null;
  onChange: (event: React.ChangeEvent<SelectBoxOnChangeEventArguments>) => void;
}

const SelectBox: React.FC<IProps> = props => {
  const items: SelectBoxItem[] = (props.defaultItem
    ? [props.defaultItem]
    : []
  ).concat(props.items);
  const menuItems = items.map(item => (
    <MenuItem value={item.value} key={item.value}>
      {item.name}
    </MenuItem>
  ));
  return (
    <div>
      <Select
        onChange={props.onChange}
        defaultValue={props.defaultItem ? props.defaultItem.value : ''}>
        {menuItems}
      </Select>
    </div>
  );
};

export default SelectBox;
