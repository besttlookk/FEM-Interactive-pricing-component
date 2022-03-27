import React from "react";
import CirclePattern from "../images/pattern-circles.svg";

const Header = () => {
  return (
    <header className="relative">
      {/* background-pattern */}
      <CirclePattern className="absolute z-10 transform -translate-x-1/2 -top-9 left-1/2" />
      <div className="relative z-20">
        <h1 className="mb-3 text-2xl font-bold text-head md:text-3xl">
          Simple, traffic-based pricing
        </h1>
        <p className="text-sm text-para">
          Sign-up for our 30-day trail.{" "}
          <span className="block mt-1 md:inline-block md:mt-0">
            No credit card required.
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
