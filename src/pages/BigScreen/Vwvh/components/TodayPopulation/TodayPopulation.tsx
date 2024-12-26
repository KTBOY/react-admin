/*
 * @Author: zlc
 * @Date: 2024-12-05 19:32:56
 * @LastEditTime: 2024-12-26 19:26:30
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\components\TodayPopulation\TodayPopulation.tsx
 */

import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { imageList } from "@pages/BigScreen/Vwvh/data/Vwnh.data";
import styleUtil from "@pages/BigScreen/utils/styleUtil";

import "./TodayPopulation.scss";
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

const ChartHeight = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));
const ChartHeightStyle = styled(ChartHeight)`
  width: 100%;
  height: 100%;
`;
const getsyzl = ["2014", "2015", "2016", "2017", "2018", "2019"];
const getwkrs = [826, 673, 588, 782, 779, 855]; // 进
const getlkrs = [686, 703, 788, 882, 779, 785]; // 出

const TodayPopulation: React.FC = () => {
  const main2 = useRef(null);
  let chartInstance = null;
  const renderChart = () => {
    const myChart = echarts.getInstanceByDom(
      main2.current as unknown as HTMLDivElement
    );
    if (myChart) chartInstance = myChart;
    else
      chartInstance = echarts.init(main2.current as unknown as HTMLDivElement);
    chartInstance.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: (e) => {
          if (e.length > 1) {
            return (
              e[0].axisValue +
              ":<br>出:" +
              e[e.length - 2].value +
              "<br>进:" +
              e[e.length - 1].value
            );
          }
        },
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "0%",
        top: "30%",
        containLabel: true,
      },
      legend: {
        data: ["出", "进"],
        left: "center",
        top: "5%",
        textStyle: {
          color: "#00ffff",
          fontSize: 14,
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
        color: "#242424",
      },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#21658f",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#164e81",
            },
          },
          data: getsyzl,
        },
      ],
      yAxis: {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#21658f",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#164e81",
          },
        },
      },
      series: [
        {
          type: "pictorialBar",
          symbolSize: [10, 4],
          symbolOffset: [-6, -2],
          symbolPosition: "end",
          z: 12,
          color: "#1e8bf8",
          data: getwkrs,
        },
        {
          type: "pictorialBar",

          symbolSize: [10, 4],
          symbolOffset: [6, -2],
          symbolPosition: "end",
          z: 12,
          color: "#5cf3ff",
          data: getlkrs,
        },
        {
          type: "pictorialBar",
          symbolSize: [10, 4],
          symbolOffset: [-6, 2],
          z: 12,
          color: "rgba(126,192,238,0.6)",
          data: getwkrs,
        },
        {
          name: "",
          type: "pictorialBar",
          symbolSize: [10, 4],
          symbolOffset: [6, 2],
          color: "rgba(92, 243, 255,0.6)",
          z: 12,
          data: getlkrs,
        },
        {
          name: "出",
          type: "bar",
          barWidth: "10",
          itemStyle: {
            normal: {
              opacity: 0.7,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: "#1e8bf8",
                },
                {
                  offset: 0,
                  color: "#0d499c",
                },
              ]),
              barBorderRadius: 0,
            },
          },

          data: getwkrs,
        },
        {
          name: "进",
          type: "bar",
          barWidth: "10",
          itemStyle: {
            normal: {
              opacity: 0.7,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#58ecf9",
                },

                {
                  offset: 1,
                  color: "#0c3b75",
                },
              ]),
              barBorderRadius: 0,
            },
          },

          data: getlkrs,
        },
      ],
    });
  };

  useEffect(() => {
    renderChart();
    // 监听
    window.addEventListener("resize", () => {
      chartInstance.resize();
    });
    // 销毁
    // return () => window.removeEventListener("resize", renderChart);
  });

  return (
    <div className="today-population">
      <Title>今日同行人数</Title>
      <ChartHeightStyle ref={main2}>
        {/* <div style={{ height: 400 }} ref={main2} /> */}
      </ChartHeightStyle>
    </div>
  );
};

export default TodayPopulation;
