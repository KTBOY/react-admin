/*
 * @Author: zlc
 * @Date: 2024-11-22 19:23:25
 * @LastEditTime: 2025-01-15 19:43:32
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\Vwvh.tsx
 */
import React, { useRef } from "react";
import ScreenHeader from "./components/ScreenHeader/ScreenHeader";
import TodayPopulation from "./components/TodayPopulation/TodayPopulation";
import PassingMedium from "./components/PassingMedium/PassingMedium";
import AccessList from "./components/AccessList/AccessList";
import PassengerTraffic from "./components/PassengerTraffic/PassengerTraffic";

import "./Vwvh.scss";

const bigScreenVh: React.FC<any> = (props) => {
  return (
    <div className="bigScreenVh-Vwvh">
      <div className="screen-container">
        <div className="screen-content" id="screen">
          <ScreenHeader />

          <div className="model-one">
            <div className="one-left">
              <TodayPopulation />
              <PassingMedium />
            </div>
            <div className="one-right">
              {" "}
              <AccessList />
            </div>
          </div>
          <PassengerTraffic />
        </div>
      </div>
    </div>
  );
};

export default bigScreenVh;
