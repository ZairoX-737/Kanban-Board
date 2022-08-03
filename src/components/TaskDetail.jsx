import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { LIST_COPY, LIST_COLORS, LIST_TYPES } from '../config'
import { formatDate } from '../utils'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import ChangeForm from './ChangeForm'
import '..//App.css'


const TaskDetail = props => {
    const navigate = useNavigate();
    const match = useParams()
    const {taskID} = match
    const {tasks, setTasks} = props
    const [isChangeFormVisible, setChangeFormVisible] = useState(false);

    const Mytask = tasks.find(task => task.id === taskID)

    const handleClickForm = () => {
        setChangeFormVisible(!isChangeFormVisible)
    }

    const handleClickFormDelete = (e) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            const updatedTasks = tasks.filter(task => {
                return task.id !== taskID;
            });
            setTasks(updatedTasks)
            navigate('/')
        }
    }

    const ChangeTask = (title, description) => {
        const updatedTask = tasks.map(task => {
            if(task.id === taskID){
                return {...task, 
                     title: title,
                     description: description
                    }
            }
            return task;
        })
        setTasks(updatedTask)
    }

    const handleChange = (e) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskID){
                return {...task, status: e.target.value}
            }
            return task;
        })
        setTasks(updatedTasks)
    }
    
    return (
        <div className='wrapper'>
        {Mytask ? (
            <>
                <div className='Detail-header'>
                    <h2 className='Detail-title'>{Mytask.title}</h2>
                    <div className='Detail-header-info'>
                        <div className='status status-pc' style={{background: LIST_COLORS[Mytask.status]}}>{LIST_COPY[Mytask.status]}</div>
                        <Link to='/' className='close-detail-btn'></Link>
                    </div>
                </div>
                <p className='createdAt'>{formatDate(Mytask.created)}</p>
                <p>{Mytask.description || 'This task has no description'}</p>
                <div className='detail-funcs'>
                    <button onClick={handleClickForm} className="change-button">Change Task</button>
                    <button onClick={handleClickFormDelete} className="change-button delete-button">Delete Task</button>
                </div>
                {isChangeFormVisible && (
                    <ChangeForm 
                        task={Mytask} 
                        setChangeFormVisible={setChangeFormVisible} 
                        changeTask={ChangeTask} 
                        title={Mytask.title} 
                        description={Mytask.description}>
                    </ChangeForm>
                )}
                <p>Change status:</p>
                <div className='detail-pc'>
                    <select className={'kanban-select-description'} value={Mytask.status} onChange={handleChange}>
                        {Object.values(LIST_TYPES).map(type => {
                            return (
                                <option value={type}>{LIST_COPY[type]}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='detail-mobile'>
                    <select className={'kanban-select-description'} value={Mytask.status} onChange={handleChange}>
                        {Object.values(LIST_TYPES).map(type => {
                            return (
                                <option value={type}>{LIST_COPY[type]}</option>
                            )
                        })}
                    </select>
                    <div className='status status-mobile' style={{background: LIST_COLORS[Mytask.status]}}>{LIST_COPY[Mytask.status]}</div>
                </div>
            </>
        ) : (
            <>
                <div className='Detail-header'>
                    <h2>Task with ID {taskID} not found</h2>
                    <Link to='/' className='close-detail-btn'></Link>
                </div>
            </>
        )}
        </div>  
        
    )
}

export default TaskDetail;