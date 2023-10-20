import classNames from 'classnames';
import './Task.css';
import { useStore } from '../store';
import trashIcon from '../assets/trash.svg'

export default function Task({ title }){
    const task = useStore(store => store.tasks.find(task => task.title === title))
    const deleteTasks = useStore((store) => store.deleteTasks)
    const setDraggedTask = useStore((store) => store.setDraggedTask)
    return <div className='task' draggable onDragStart={() => setDraggedTask(task.title)}>
        <div>{task.title}</div>
        <div className='bottomWrapper'>
            <div className='deleteTask'>
                <img src={trashIcon} onClick={() => deleteTasks(task.title)}/>
            </div>
            <div className={classNames("status",task.state)}>{task.state}</div>
        </div>
    </div>
}