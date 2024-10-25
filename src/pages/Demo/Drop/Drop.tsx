import { ProCard } from "@ant-design/pro-components";
import {
  STATUS_TODO,
  STATUS_DOING,
  STATUS_DONE,
  STATUS_CODE,
  tasks,
} from "./data/Drop.data";
import React from "react";
import "./Drop.scss";
const DropCol: React.FC<any> = (props) => {
  const [isIn, setIsIn] = React.useState(false);
  console.log(props);
  // 监听当前拖动的item是否已经进入了目标区域
  const handleDrop = (e) => {
    console.log("handleDrop");

    e.preventDefault();
    props.updateStatus(props.status); // 告诉父组件，更新状态
  };
  const onDragEnter = (e) => {
    e.preventDefault();
    console.log("监听当前拖动的item是否已经进入了目标区域xxxxxxxxxx");
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    console.log("onDragLeave");
  };
  const onDragOver = (e) => {
    e.preventDefault();
    console.log("onDragOver");
  };
  return (
    <div
      className="drop-col"
      id={`col-${props.status}`}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={handleDrop}
    >
      <header className="col-header">{STATUS_CODE[props.status]}</header>
      <main className={"col-main" + (isIn ? " active" : "")}>
        {props.children}
      </main>
    </div>
  );
};

const DropItem: React.FC<any> = (props) => {
  const handleDragStart = (e) => {
    props.onDragStart(props.id);
  };

  return (
    <div
      onDragStart={handleDragStart}
      onDragEnd={props.onDragEnd}
      id={`item-${props.id}`}
      className={"item" + (props.active ? " active" : "")}
      draggable="true"
    >
      <header className="item-header">
        <span className="item-header-username">{props.username}</span>
        <span className="item-header-point">{props.point}</span>
      </header>
      <main className="item-main">{props.title}</main>
    </div>
  );
};

const Drop: React.FC = () => {
  const [activeId, setActiveId] = React.useState(0);
  const [tasksList, setTasks] = React.useState(tasks);
  const onDragStart = (id) => {
    setActiveId(id);
  };
  const onDragEnd = () => {
    setActiveId(null);
  };
  const handleUpdate = (status) => {
    // 更新状态

    const findIndexTask = tasksList.findIndex((t) => t.id === activeId);
    if (findIndexTask != -1) {
      tasksList[findIndexTask].status = status;

      console.log(tasksList);

      setTasks(tasksList);
    }
  };
  return (
    <ProCard>
      <div className="drop-container">
        <div className="task-wrapper">
          {Object.keys(STATUS_CODE).map((key) => {
            return (
              <DropCol status={key} key={key} updateStatus={handleUpdate}>
                {tasksList
                  .filter((t) => t.status === key)
                  .map((item) => {
                    {
                      return (
                        <DropItem
                          username={item.username}
                          point={item.point}
                          key={item.id}
                          title={item.title}
                          active={item.id === activeId}
                          id={item.id}
                          onDragStart={onDragStart}
                          onDragEnd={onDragEnd}
                        />
                      );
                    }
                  })}
              </DropCol>
            );
          })}
        </div>
      </div>
    </ProCard>
  );
};

export default Drop;
