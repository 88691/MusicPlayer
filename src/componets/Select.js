import React from 'react';
import './Select.css'; 

function Select({ options, setSelection }) {
  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className="select-container">
      <select className="select-dropdown" onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
