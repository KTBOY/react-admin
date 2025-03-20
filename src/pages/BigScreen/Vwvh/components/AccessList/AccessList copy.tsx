/*
 * @Author: zlc
 * @Date: 2024-12-31 18:10:02
 * @LastEditTime: 2025-01-15 19:15:38
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\components\AccessList\AccessList.tsx
 */

import React from "react";
import styled from "styled-components";
import Marquee from "@components/Marquee/Marquee";
import { imageList } from "@pages/BigScreen/Vwvh/data/Vwnh.data";
import styleUtil from "@pages/BigScreen/utils/styleUtil";
import { fitChartSize } from "@pages/BigScreen/utils/dataUtils";
import "./AccessList.scss";
import { formatToDate } from "@utils/dateUtil";
import dayjs from "dayjs";
const data = new Array(5).fill(0).map((item, index) => {
  return { num: index };
});
console.log("data", data);
const itemStyle = {
  color: "#fff",
  height: "50px",
  width: "100%",
  marginRight: "15px",
  background:
    "linear-gradient(94deg, rgba(92, 243, 255, 0.48) 4%, rgba(92, 243, 255, 0) 97%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
const Title = styled.div`
  width: ${styleUtil.px2vw(300)};
  height: ${styleUtil.px2vh(40)};
  line-height: ${styleUtil.px2vh(40)};
  color: rgb(255, 255, 255);
  font-weight: 500;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  font-size: ${styleUtil.px2font(18)};
  //background: url(https://img.hzanchu.com/acimg/8b5c4e8d5e6a9e7f6f5e8e7e6e7e7e7e.png) no-repeat;
  background: url(${imageList.mjxtTitle2}) no-repeat;
  background-size: 100% 100%;
`;
const AccessList: React.FC = (props) => {
  const Item = (item: { num: number }) => {
    return (
      <div style={itemStyle}>
        <div>{item.num}</div>
        <div>进</div>
        <div>{formatToDate(dayjs(), "YYYY年MM月DD日 dddd HH: mm: ss")}</div>
      </div>
    );
  };
  return (
    <>
      <div className="accessList">
        <Title>今日同行人数</Title>
        <div className="marquee">
          <Marquee
            Item={Item}
            containerWidth={500}
            containerHeight={520}
            showNum={5}
            speed={8}
            hoverStop={true}
            direction={"up"}
            itemWidth={fitChartSize(340)}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default AccessList;
