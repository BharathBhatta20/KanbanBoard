import { create } from "zustand";
import {devtools,persist} from "zustand/middleware";

const store = (set) => ({
    tasks: [{ title: 'TestTask', state: 'DONE' }],
    draggedTask :null,
    addTasks: (title,state) =>set(
    (store) => ({ tasks: [...store.tasks, { title, state }] }),false,"addtAsk"
    ),
    deleteTasks : (title) => set(
        (store) => ({tasks: store.tasks.filter(task => task.title !== title)})
    ),
    setDraggedTask : (title) => set ({draggedTask : title}),
    moveTasks : (title,state) => set(store => ({tasks: store.tasks.map((task) =>
        task.title === title ? {title, state} :task
        )}))    
});

export const useStore = create((devtools(store)));