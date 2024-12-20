/*
 * @Author: zlc
 * @Date: 2024-11-22 19:23:25
 * @LastEditTime: 2024-12-06 15:58:44
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\Vwvh.tsx
 */
import React, { useRef } from "react";
import ScreenHeader from "./components/ScreenHeader/ScreenHeader";
import TodayPopulation from "./components/TodayPopulation/TodayPopulation";

import "./Vwvh.scss";

const bigScreenVh: React.FC<any> = (props) => {
  return (
    <div className="bigScreenVh-Vwvh">
      <div className="screen-container">
        <div className="screen-content" id="screen">
          <ScreenHeader />

          <TodayPopulation />
        </div>
      </div>
    </div>
  );
};

export default bigScreenVh;
