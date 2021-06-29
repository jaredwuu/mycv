// import {FaTimes} from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.taskReminder ? 'reminder' : ''} container border-2 `} onDoubleClick={() => onToggle(task._id)} >
            <div className='text-4xl center pl-2'>
                {task.taskName}{' '}
                <i className="fa fa-times text-red-500 hover:text-red-900 right pr-20" onClick={() => onDelete(task._id)} />

            </div>
            
            <div className='text-2xl center'>{task.taskDate} at {task.taskTime}</div>
        </div>
    )
}

export default Task

