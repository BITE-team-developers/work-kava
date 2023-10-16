import { useState } from 'react';
import './styles.css';

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
  //   function handleBlur(e) {
  //     console.log(e);
  //   }

  const handleHoursChanges = e => {
    const selectedValue = parseInt(e.target.dataset.value);
    setIsSelected({ value: selectedValue, text: e.target.textContent });
    setIsActive(!isActive);
    onHoursChanges(selectedValue);
  };
  return (
    <div className="App">
      <div className="dropdown">
        <div
          onClick={e => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected.text}
          <span
            className={isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          {dataSource.map(({ value, text }) => (
            <div
              key={value}
              data-value={value}
              onClick={e => {
                handleHoursChanges(e);
              }}
              className="item"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
