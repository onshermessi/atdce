import React, { useState } from "react";
import "./FilterButton.css";

export default function FilterButton({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };
  return (
    <div className="filter-button-container">
      <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
        {" "}
        Filter
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
