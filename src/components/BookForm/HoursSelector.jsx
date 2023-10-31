import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';

import {
  DropdownButton,
  DropdownContent,
  DropdownInput,
  DropdownItem
} from './HoursSelector.styled';

const dataSource = [
  {
    value: 1,
    text: '1 hour'
  },
  {
    value: 2,
    text: '2 hours'
  },
  {
    value: 3,
    text: '3 hours'
  },
  {
    value: 4,
    text: '4 hours'
  },
  {
    value: 5,
    text: '5 hours'
  },
  {
    value: 6,
    text: 'Over 5 hours'
  }
];

export const HoursSelector = ({ onHoursChanges }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(dataSource[0]);

  const handleHoursChanges = e => {
    const selectedValue = parseInt(e.target.dataset.value);
    setIsSelected({ value: selectedValue, text: e.target.textContent });
    setIsActive(!isActive);
    onHoursChanges(selectedValue);
  };
  return (
    <DropdownInput
      onClick={e => {
        setIsActive(!isActive);
      }}
    >
      {selected.text}
      <DropdownButton aria-label="select period">
        <Svg w={28} h={28} icon="arrow" />
      </DropdownButton>
      <DropdownContent className={isActive ? '' : 'hidden'}>
        {dataSource.map(({ value, text }) => (
          <DropdownItem
            key={value}
            data-value={value}
            onClick={e => {
              handleHoursChanges(e);
            }}
            selected={value === selected.value}
            className={value === selected.value ? 'selected' : ''}
          >
            {text}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownInput>
  );
};
