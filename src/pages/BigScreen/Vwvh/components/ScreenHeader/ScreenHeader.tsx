/*
 * @Author: zlc
 * @Date: 2024-11-22 19:46:26
 * @LastEditTime: 2024-12-05 19:30:37
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\components\ScreenHeader\ScreenHeader.tsx
 */

import React from "react";
import dayjs from "dayjs";
import { imageList } from "../../data/Vwnh.data";
import "./ScreenHeader.scss";
import { formatToDate } from "@utils/dateUtil";
interface Props {
  region?: string;
}

const timeInfo = {
  setInterval: "0",
  time: "0",
};

const ScreenHeader: React.FC<any> = () => {
  const [timeDate, setTimeDate] = React.useState();
  const handleTime = () => {
    timeInfo.setInterval = window.setInterval(() => {
      timeInfo.time = formatToDate(dayjs(), "YYYY年MM月DD日 dddd HH: mm: ss");
      setTimeDate(timeInfo.time);
    }, 1000);
  };
  React.useEffect(() => {
    handleTime();
    return () => {
      clearInterval(timeInfo.setInterval);
    };
  }, []);
  return (
    <div className="BigScreen-Vwvh-ScreenHeader">
      <div className="screen-header">
        <div className="screen-header-top-section">
          <div className="left">
            <img src={imageList.dpdw} alt="" className="left-image" />
            <div>
              <span>测试</span>
            </div>
          </div>

          <div className="center">通行数据大屏</div>
          <div className="right">{timeDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeader;
