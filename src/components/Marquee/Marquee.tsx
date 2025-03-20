import { ReactElement, useEffect } from "react";
import * as React from "react";
import "./Marquee.scss";

interface ItemProps {
  num: number;
}
interface Props {
  Item: (item: ItemProps) => ReactElement;
  showNum: number;
  speed: number;
  containerWidth: number;
  containerHeight: number;
  data: Array<any>;
  hoverStop?: boolean;
  direction?: "left" | "right" | "up" | "down";
  itemWidth: number;
}
const fillArray = (arr: any[], length: number): any[] => {
  const result: any[] = [];
  while (result.length < length) {
    result.push(...arr);
  }

  console.log("result", result);
  return result.concat(result);
};
// 普通版跑马灯
const Marquee: React.FC<Props> = (props) => {
  const showData = fillArray(props.data, props.showNum);
  const length = showData.length;

  const itemWidth = props.containerWidth / props.showNum;
  const itemHeight = props.containerHeight / props.showNum;

  console.log("showData", itemWidth, itemHeight);
  const style = document.createElement("style");
  const initDataX = () => {
    let start = "0";
    let end = `-${(itemWidth * length) / 2}`;
    if (props.direction === "right") {
      start = end;
      end = "0";
    }
    style.innerText = `
        @keyframes templates-partner-moving {
          0% {
             transform: translateX(${start}px);
          }
          100% {
            transform: translateX(${end}px);
          }
        }
      `;
    if (props.hoverStop) {
      style.innerText += `.list:hover {
        /*鼠标经过后，动画暂停*/
        animation-play-state: paused !important;
      }`;
    }
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  };

  const initDataY = () => {
    const start = "0";
    const end = `-${(itemHeight * length) / 2}`;
    style.innerText = `
        @keyframes templates-partner-moving {
          0% {
             transform: translateY(${start}px);
          }
          100% {
            transform: translateY(${end}px);
          }
        }
      `;
    if (props.hoverStop) {
      style.innerText += `.list:hover {
        /*鼠标经过后，动画暂停*/
        animation-play-state: paused !important;
      }`;
    }
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  };

  useEffect(() => {
    if (props.direction === "left") {
      initDataX();
    } else {
      initDataY();
    }
  }, []);
  return (
    <>
      <div
        style={{
          width: `${props.containerWidth}px`,
          height: `${props.containerHeight}px`,
        }}
        className="wrap"
        id="scrollDom"
      >
        <div
          className={`${props.direction === "left" ? "direction" : "list"}`}
          style={{
            width: `${
              props.direction === "left"
                ? itemWidth * length
                : props.containerWidth
            }px`,
            height: `${
              props.direction === "up"
                ? itemHeight * length
                : props.containerHeight
            }px`,
            animation: `templates-partner-moving ${
              (length / props.showNum / 2) * props.speed
            }s infinite linear`,
          }}
        >
          {showData.map((item) => (
            <div
              style={{
                width: `${props.itemWidth}px`,
                height: `${itemHeight}px`,
              }}
              key={item.num}
              className="prop-pre"
            >
              <props.Item {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee;
