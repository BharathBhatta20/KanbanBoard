import classNames from "classnames";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { useState } from "react";
import React from 'react';

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setdrop] = useState(false);

  const tasks = useStore((store) => {
    return store.tasks.filter((task) => task.state === state);
  });
  const addTasks = useStore((store) => store.addTasks);
  const setDraggedTasks = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const movetasks = useStore((store) => store.moveTasks);

  return (
    <div
      className={classNames("column",{drop:drop})}
      onDragOver={(e) => {
        setdrop(true);
        e.preventDefault()
      }
        }
        onDragLeave={e => {
          setdrop(false);
          e.preventDefault()
        }}
      onDrop={(e) => {
        console.log(draggedTask);
        setdrop(false);
        movetasks(draggedTask, state);
        setDraggedTasks(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks?.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTasks(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
