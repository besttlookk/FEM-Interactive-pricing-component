import React from "react";

const Toggle = ({ isToggleActive, setIsToggleActive, setBillType }) => {
  const handleChange = () => {
    if (isToggleActive) {
      //
      setBillType("monthly");
    } else {
      setBillType("yearly");
    }
    setIsToggleActive((prev) => !prev);
  };
  return (
    <div>
      <input
        type="checkbox"
        id="switch"
        className="hidden toggle__input"
        checked={isToggleActive}
        onChange={handleChange}
      />
      <label htmlFor="switch" className="toggle"></label>
    </div>
  );
};

export default Toggle;
