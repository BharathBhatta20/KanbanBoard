import classNames from 'classnames';
import './Task.css';

export default function Task({ title }){
    const Status = 'DONE';
    return <div className='task'>
        <div>{title}</div>
        <div className='bottomWrapper'>
            <div></div>
            <div className={classNames("status",Status)}>{Status}</div>
        </div>
    </div>
}