import React, { useState, useEffect } from "react";
import Head from "next/head";
import Slider from "../components/Slider";
import Toggle from "../components/Toggle";
import Button from "../components/Button";

const sliderObject = [
  { sliderValue: 0, data: { pageViews: "10K", monthlyPrice: 8 } },
  { sliderValue: 25, data: { pageViews: "50K", monthlyPrice: 12 } },
  { sliderValue: 50, data: { pageViews: "100K", monthlyPrice: 16 } },
  { sliderValue: 75, data: { pageViews: "500K", monthlyPrice: 24 } },
  { sliderValue: 100, data: { pageViews: "1M", monthlyPrice: 36 } },
];

export default function Home() {
  const [pageView, setPageView] = useState("100k");
  const [price, setPrice] = useState("16.00");
  const [billType, setBillType] = useState("monthly");
  const [rangeval, setRangeval] = useState(50);
  const [progressbarWidth, setProgressbarWidth] = useState(50);
  const [thumbLeftPosition, setThumbLeftPosition] = useState(50);
  const [isToggleActive, setIsToggleActive] = useState(false);

  const handleChange = (e) => {
    const currentRangeValue = e.target.value;
    setRangeval(currentRangeValue);
    setProgressbarWidth(currentRangeValue);
    setThumbLeftPosition(currentRangeValue);

    getResult(currentRangeValue);
  };

  const getResult = (currentRangeValue) => {
    const { data } = sliderObject.find(
      (item) => Number(item.sliderValue) === Number(currentRangeValue)
    );

    setPageView(data.pageViews);
    if (billType === "monthly") {
      setPrice(data.monthlyPrice.toFixed(2));
    } else {
      const yearPrice = data.monthlyPrice - data.monthlyPrice * 0.25;
      setPrice(yearPrice.toFixed(2));
    }
  };

  useEffect(() => {
    getResult(rangeval);
  }, [billType]);

  // const calculateYearly
  return (
    <>
      <Head>
        <title>Interective-Pricing Comp. | FEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* card */}
      <div className="relative z-40 max-w-4xl mx-auto text-center bg-white rounded-lg shadow-2xl w-90w ">
        <div className="px-8 py-8 md:px-12 md:py-10">
          {/* top row */}
          <div className="mb-6 md:flex md:justify-between md:items-center">
            <p className="text-xs font-bold tracking-widest uppercase text-para md:text-xl">
              {pageView} pageviews
            </p>

            <p className="hidden text-4xl font-bold text-head md:block">
              <span>$</span>
              {price}{" "}
              <span className="text-lg font-medium text-para">/ month</span>
            </p>
          </div>

          {/* slider */}
          <div className="md:px-10 md:my-12">
            <Slider
              handleChange={handleChange}
              rangeval={rangeval}
              progressbarWidth={progressbarWidth}
              thumbLeftPosition={thumbLeftPosition}
            />
          </div>

          <div className="mt-8 md:hidden">
            <p className="text-3xl font-bold text-head">
              <span>$</span>
              {price}{" "}
              <span className="text-sm font-medium text-para ">/ month</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 mt-6 md:mt-20 md:gap-12">
            <p className="text-sm font-medium text-para md:text-base">
              Monthly Billing
            </p>
            <Toggle
              setIsToggleActive={setIsToggleActive}
              isToggleActive={isToggleActive}
              setBillType={setBillType}
            />
            <p className="text-sm text-para md:text-base">
              Yearly Billing{" "}
              <span className="px-1 py-1 text-xs rounded-lg bg-secondaryLight text-secondary">
                -25% <span className="hidden md:inline-block">Discount</span>
              </span>
            </p>
          </div>
        </div>
        {/* divider */}
        <div
          className="w-full mt-10 bg-emptySlider"
          style={{ height: "1px" }}
        ></div>
        <div className="px-8 py-8 md:flex md:items-center md:justify-between md:px-20 md:pt-6 md:pb-14">
          {/* list */}
          <ul className="list">
            <li>Unlimited websites</li>
            <li>100% data ownership</li>

            <li>Email reports</li>
          </ul>

          {/* button */}
          <div className="mt-8">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
