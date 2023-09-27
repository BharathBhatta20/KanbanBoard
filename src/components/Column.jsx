import "./Column.css";
import Task from "./Task";

const Column = ({ status }) => {
  return (
    <div className="column">
      <p>{status}</p>
      <Task title='Todo'/>
    </div>
  );
};

export default Column;
