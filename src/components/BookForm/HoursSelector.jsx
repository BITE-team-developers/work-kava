import { useState } from 'react';
import './styles.css';

export const HoursSelector = ({ onHoursChanges }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('1');
  function handleBlur(e) {
    console.log(e);
  }

  const handleHoursChanges = e => {
    setIsSelected(e.target.textContent);
    setIsActive(!isActive);
    onHoursChanges(parseInt(e.target.textContent));
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
          {selected}
          <span
            className={isActive ? 'fas fa-caret-up' : 'fas fa-caret-down'}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <div
            onClick={e => {
              handleHoursChanges(e);
            }}
            className="item"
          >
            1
          </div>
          <div
            className="item"
            onClick={e => {
              handleHoursChanges(e);
            }}
          >
            2
          </div>
          <div
            className="item"
            onClick={e => {
              handleHoursChanges(e);
            }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};
