import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import "./PassingMedium.scss";
import * as echarts from "echarts";
import {
  imageList,
  trafficWay,
  echartsColor,
} from "@pages/BigScreen/Vwvh/data/Vwnh.data";
import { fitChartSize } from "@pages/BigScreen/utils/dataUtils";
import LengendItem from "./LengendItem/LengendItem";

const data = [];
const getMockData = () => {
  for (let i = 0; i < trafficWay.length; i++) {
    data.push(
      {
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: echartsColor[i],
            shadowColor: echartsColor[i],
          },
        },
      },
      {
        value: 2,
        name: "",
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: "rgba(0, 0, 0, 0)",
            borderColor: "rgba(0, 0, 0, 0)",
            borderWidth: 0,
          },
        },
      }
    );
  }
};
const ChartHeight = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props} />);
ChartHeight.displayName = "ChartHeight";
const ChartHeightStyle = styled(ChartHeight)`
  width: 100%;
  height: 100%;
`;
const PassingMedium: React.FC = () => {
  const main2 = useRef(null);
  let chartInstance: echarts.ECharts | null = null;

  const renderChart = () => {
    const myChart = echarts.getInstanceByDom(
      main2.current as unknown as HTMLDivElement
    );
    if (myChart) chartInstance = myChart;
    else
      chartInstance = echarts.init(main2.current as unknown as HTMLDivElement);
    const eChartsOptions = {
      center: ["79%", "50%", "50%", "50%"],
      animation: false,
      series: {
        hover: {
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          emphasis: {
            itemStyle: {
              show: false,
            },
          },

          animation: false,
          tooltip: {
            show: false,
          },
        },
      },
    };
    chartInstance.setOption({
      color: echartsColor,
      // title: {
      //   text: "交通方式",
      //   top: "46%",
      //   textAlign: "center",
      //   left: "49.5%",
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: fitChartSize(15),
      //     fontWeight: "400",
      //   },
      // },
      // graphic: {
      //   left:'60%',
      //   elements: [
      //     {
      //       type: "image",
      //       z: 3,
      //       style: {
      //         image: imageList.chartBg,
      //         width: fitChartSize(105),
      //         height: fitChartSize(105),
      //       },
      //       center: eChartsOptions.center,
      //       position: [100, 100],
      //     },
      //   ],
      // },
      tooltip: {
        show: false,
      },
      legend: {
        data: ["火车", "飞机", "客车"],
        type: "scroll",
        orient: "vertical",
        right: "10%",
        left: "left",
        top: "35%",
        icon: "rect",
        itemWidth: fitChartSize(25),
        itemGap: -10,
        // backgroundColor: {
        //     image: mxbg,

        //   },
        // backgroundImage: mxbg,
        //className: "custom-legend",
        formatter: (name) => {
          let target;
          for (let i = 0; i < trafficWay.length; i++) {
            if (trafficWay[i].name === name) {
              target = trafficWay[i].value;
            }
          }

          if (name) {
            let p = ((target / 100) * 100).toFixed(2);
            const arr = [`{a|${name}}`, `{b|${p === "NaN" ? "0" : p}%}`];
            return arr.join("");
          }
        },
        textStyle: {
          // 添加
          padding: [1, 0, 0, 0],
          rich: {
            a: {
              fontSize: fitChartSize(20),
              width: fitChartSize(120),
              height: 35,
              lineHeight: 35,
              color: "#ffffff",
              padding: [0, 10, 0, 20],
            },

            b: {
              fontSize: fitChartSize(20),
              color: "#ffffff",
            },
          },
        },
      },
      toolbox: {
        show: false,
      },
      series: [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["60%", "68%"],
          hoverAnimation: false,
          data,
          center: eChartsOptions.center,
        },
      ],
    });
  };
  useEffect(() => {
    getMockData();
    renderChart();
    // 监听
    window.addEventListener("resize", () => {
      // renderChart();
      console.log("resize", chartInstance.resize);
    });
    // 销毁
    // return () => window.removeEventListener("resize", renderChart);
  });
  window.addEventListener("resize", () => {
    // bug: chartInstance.resize() is not a function   无法调用resize方法
    //if (chartInstance) chartInstance.resize();

    renderChart();
    console.log("resize", chartInstance.resize());
  });
  return (
    <div className="page-passing-medium">
      <div className="today-population">
        <div className="title">
          <span>今日通行介质统计</span>
        </div>
        <div className="chart-box">
          {/* <div ref={main2} className="chart"></div> */}
          <ChartHeightStyle ref={main2}>
            {/* <div style={{ height: 400 }} ref={main2} /> */}
          </ChartHeightStyle>
          <div className="legend">
            <LengendItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassingMedium;
