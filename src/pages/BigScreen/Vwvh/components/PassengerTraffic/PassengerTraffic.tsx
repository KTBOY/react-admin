/*
 * @Author: zlc
 * @Date: 2025-01-15 19:22:19
 * @LastEditTime: 2025-02-13 16:23:06
 * @LastEditors: zlc
 * @Description:
 * @FilePath: \react-template-admin\src\pages\BigScreen\Vwvh\components\PassengerTraffic\PassengerTraffic.tsx
 */
import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import LeftCount from "./LeftCount/LeftCount";
import "./PassengerTraffic.scss";

const PassengerTraffic: React.FC = () => {
  const main2 = useRef(null);
  const todayPersonTimeStatisticsCount = useRef(0);
  let chartInstance: echarts.ECharts | null = null;

  const renderChart = () => {
    const myChart = echarts.getInstanceByDom(
      main2.current as unknown as HTMLDivElement
    );
    const fontColor = "#30eee9";
    if (myChart) chartInstance = myChart;
    else
      chartInstance = echarts.init(main2.current as unknown as HTMLDivElement);
    chartInstance.setOption({
      grid: {
        left: "5%",
        right: "5%",
        top: "20%",
        bottom: "10%",
        containLabel: true,
      },
      tooltip: {
        show: true,
        trigger: "item",
      },
      legend: {
        show: true,
        x: "center",
        y: "10",
        icon: "stack",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "#1bb4f6",
        },
        data: ["出门", "进门"],
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: fontColor,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#397cbc",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#195384",
            },
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "人数",
          min: 0,
          max: 1000,
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#2ad1d2",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#27b4c2",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#11366e",
            },
          },
        },
      ],
      series: [
        {
          name: "出门",
          type: "line",
          stack: "总量",
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: "#0092f6",
              lineStyle: {
                color: "#0092f6",
                width: 1,
              },
              areaStyle: {
                //color: '#94C9EC'
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(7,44,90,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,146,246,0.9)",
                  },
                ]),
              },
            },
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: "red",
              },
            },
          },
          data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        },
        {
          name: "进门",
          type: "line",
          stack: "总量",
          symbol: "circle",
          symbolSize: 8,

          itemStyle: {
            normal: {
              color: "#00d4c7",
              lineStyle: {
                color: "#00d4c7",
                width: 1,
              },
              areaStyle: {
                //color: '#94C9EC'
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(7,44,90,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,212,199,0.9)",
                  },
                ]),
              },
            },
          },
          data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
        },
      ],
    });
  };
  useEffect(() => {
    renderChart();
    // 监听
    window.addEventListener("resize", () => {
      if (chartInstance) {
        chartInstance.resize();
      }
    });
    // 销毁
    // return () => window.removeEventListener("resize", renderChart);
  });
  return (
    <>
      <div className="passenger-traffic">
        <div className="today-population">
          <div className="title">
            <span>今日通行人次</span>
          </div>
          <div className="content">
            <LeftCount
              todayPersonTimeStatisticsCount={todayPersonTimeStatisticsCount}
            />
            <div className="chart wh-full" ref={main2}>
              {" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerTraffic;
