import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-100 p-2 shadow-md rounded-lg border border-gray-400">
        <p className="text-xs font-bold text-purple-800 mb-1">
          {payload[0].name}
        </p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            ₹ {payload[0].value}/-
          </span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
