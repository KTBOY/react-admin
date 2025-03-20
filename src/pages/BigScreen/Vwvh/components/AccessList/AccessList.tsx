/*
 * @Author: zlc
 * @Date: 2024-12-31 18:10:02
 * @LastEditTime: 2025-02-13 17:51:06
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
import ReactSeamlessScroll, {
  SeamlessScrollInctance,
} from "rc-seamless-scroll";
const listData = [
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },

  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
  {
    title: "name",
    date: Date.now(),
  },
];

const itemStyle = {
  color: "#fff",
  height: "50px",
  width: "100%",
  marginRight: "15px",
  marginBottom: "10px",
  background:
    "linear-gradient(94deg, rgba(92, 243, 255, 0.48) 4%, rgba(92, 243, 255, 0) 97%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: styleUtil.px2font(18),
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
  const ref = React.useRef(null);
  const Item = (item: {
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }) => {
    return (
      <div style={itemStyle}>
        <div>{item.title}</div>
        <div>进</div>
        <div>{formatToDate(dayjs(), "YYYY年MM月DD日")}</div>
      </div>
    );
  };
  return (
    <>
      <div className="accessList">
        <Title>今日同行人数</Title>
        <div className="marquee">
          <ReactSeamlessScroll
            list={listData}
            ref={ref}
            isAutoScroll={true}
            singleHeight={60}
          >
            {listData.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </ReactSeamlessScroll>
        </div>
      </div>
    </>
  );
};

export default AccessList;
