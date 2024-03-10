import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import data from "../../data.json";
import ConsumptionChart from "./ConsumptionChart";
import ConsumptionTable from "./ConsumptionTable";

const cardStyle = "flex flex-col gap-2 p-4 m-2";
const buttonStyle =
  "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ";
const dividerStyle = "border-r-2 h-40 border-gray-200";

const ConsumptionData = () => {
  const [timeframe, setTimeframe] = useState(data.timeframes[0]);
  const [showDataTable, setShowDataTable] = useState(false);

  const changeTimeframe = (newTimeframe) => {
    const selectedTimeframe = data?.timeframes.find(
      (tf) => tf?.type === newTimeframe
    );
    setTimeframe(selectedTimeframe);
  };

  const renderCard = (category, includeDivider) => (
    <div className={`flex ${includeDivider ? dividerStyle : ""}`}>
      <div className={cardStyle}>
        <div className="heading font-semibold">{category.name}</div>
        <div className="font-extralight">Total</div>
        <div className="font-bold">{category.total} kWh</div>
      </div>
    </div>
  );

  const renderChart = (categories) => {
    const chartData = categories.reduce((acc, category) => {
      category.data.forEach((value, index) => {
        if (!acc[index]) {
          acc[index] = { name: `${index}:00` };
        }
        acc[index][category.name.replace(/\s+/g, "")] = value;
      });
      return acc;
    }, []);

    return <ConsumptionChart data={chartData} />;
  };

  useEffect(() => {
    renderChart(timeframe?.categories);
  }, [timeframe]);

  return (
    <div className="p-6">
      <h4 className="text-xl font-semibold">Consumption</h4>
      <div className="flex justify-end my-2 text-black sticky top-2 z-10">
        <select
          value={timeframe.type}
          onChange={(e) => changeTimeframe(e.target.value)}
          className="custom-select rounded-lg border-gray-300 px-7 py-2 bg-white shadow-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-gray-700"
        >
          {data.timeframes.map((tf) => (
            <option key={tf.type} value={tf.type}>
              {tf.type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-between">
        {timeframe.categories.map((category, index) =>
          renderCard(category, index !== timeframe.categories.length - 1)
        )}
      </div>
      {renderChart(timeframe.categories)}

      <div className="flex justify-center my-7">
        <button
          className={buttonStyle}
          onClick={() => setShowDataTable(!showDataTable)}
        >
          {showDataTable ? (
            <span className="flex items-center">
              Close Table <AiOutlineClose className="ml-3 text-black" />
            </span>
          ) : (
            <span className="flex items-center">
              Show More <IoIosArrowDown className="ml-3 text-black" />
            </span>
          )}
        </button>
      </div>

      {showDataTable && <ConsumptionTable categories={timeframe.categories} />}
    </div>
  );
};

export default ConsumptionData;
