import { useState } from 'react';
import './styles.css';

export const HoursSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState('1 hour');
  function handleBlur(e) {
    console.log(e);
  }
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
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
          >
            One
          </div>
          <div
            className="item"
            onClick={e => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Two
          </div>
          <div
            className="item"
            onClick={e => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Three
          </div>
        </div>
      </div>
    </div>
  );
};
