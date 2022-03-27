import React, { useState } from "react";

const Slider = ({
  handleChange,
  thumbLeftPosition,
  progressbarWidth,
  rangeval,
}) => {
  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={rangeval}
        onChange={handleChange}
        step="25"
        className="slider__input"
      />
      <div
        className="slider__rangeThumb"
        style={{ left: `${thumbLeftPosition}%` }}
      ></div>
      <div
        className="slider__progressbar"
        style={{ width: `${progressbarWidth}%` }}
      ></div>
    </div>
  );
};

export default Slider;
