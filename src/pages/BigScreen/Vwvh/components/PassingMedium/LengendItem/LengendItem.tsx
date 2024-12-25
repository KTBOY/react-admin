import React, { useEffect, useRef, useState } from "react";

import * as echarts from "echarts";
import {
  imageList,
  trafficWay,
  echartsColor,
} from "@pages/BigScreen/Vwvh/data/Vwnh.data";
import { fitChartSize } from "@pages/BigScreen/utils/dataUtils";
import "./LengendItem.scss";

const LengendItem: React.FC = () => {
  return (
    <>
      {trafficWay.map((item, index) => {
        return (
          <div className="lengend-item" key={index}>
            <div className="header-title">
              <div className="tip">
                <div
                  className="tip2"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
              <span className="name">{item.name}（人数）</span>
            </div>
            <div
              className="header-content"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="count">{item.value}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LengendItem;
