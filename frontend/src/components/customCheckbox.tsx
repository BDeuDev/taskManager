import React, { useState } from 'react';

function CustomCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={toggleCheckbox}>
      <div className={`w-6 h-6 rounded-full border border-gray-400 mr-2 flex-shrink-0 transition-all duration-300 ease-in-out ${isChecked ? 'bg-gray-400' : ''}`}>
        {isChecked && (
          <svg className="w-4 h-4 m-auto fill-current text-white" viewBox="0 0 24 24">
            <path d="M5.293 10.293L3.88 8.88a1 1 0 0 1 0-1.414l1.414-1.414a1 1 0 0 1 1.414 0l2.293 2.293 6.293-6.293a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0z" />
          </svg>
        )}
      </div>
      <span className="text-gray-700">Check</span>
    </div>
  );
}

export default CustomCheckbox;