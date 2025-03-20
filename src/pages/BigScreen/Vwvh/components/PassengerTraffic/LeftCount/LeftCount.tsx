/*
 * @Author: zlc
 * @Date: 2025-01-15 19:49:23
 * @LastEditTime: 2025-02-13 15:38:31
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\components\PassengerTraffic\LeftCount\LeftCount.tsx
 */
import React, { useEffect, useRef, useState } from "react";
import "./LeftCount.scss";
import { imageList } from "@pages/BigScreen/Vwvh/data/Vwnh.data";

const list = [
  {
    icon: imageList.inIcon,
    bg: imageList.inBg,
    name: "进门人次",
    titleIcon: imageList.inTitle,
    count: 234,
  },
  {
    icon: imageList.ountIcon,
    bg: imageList.ountBg,
    name: "出门人次",
    titleIcon: imageList.ountTitle,
    count: 1110,
  },
];

const LeftCount: React.FC = () => {
  return (
    <>
      <div className="left-count-module">
        {list.map((item, index) => (
          <div
            key={index}
            className="in-count"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            <div className="icon">
              <img src={item.icon} alt="" />
            </div>
            <div className="icon-name">
              <img src={item.titleIcon} alt="" />
              {item.name}
            </div>
            <div className="count">{item.count}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftCount;
