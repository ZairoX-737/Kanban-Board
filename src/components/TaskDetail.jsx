import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import ChangeForm from './ChangeForm'
import '..//App.css'


const TaskDetail = props => {
    const match = useParams()
    const {taskID} = match
    const {tasks, setTasks} = props
    const [isChangeFormVisible, setChangeFormVisible] = useState(false);

    const Mytask = tasks.find(task => task.id === taskID)

    const handleClickForm = () => {
        setChangeFormVisible(!isChangeFormVisible)
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
    
    return (
        <div className='wrapper'>
        {Mytask ? (
            <>
                <div className='Detail-header'>
                    <h2 className='Detail-title'>{Mytask.title}</h2>
                    <div className='Detail-header-info'>
                        <Link to='/Kanban-Board' className='close-detail-btn'></Link>
                    </div>
                </div>
                <p>{Mytask.description || 'This task has no description'}</p>
                <button onClick={handleClickForm} className="change-button">Change Task</button>
                {isChangeFormVisible && (
                    <ChangeForm 
                        task={Mytask} 
                        setChangeFormVisible={setChangeFormVisible} 
                        changeTask={ChangeTask} 
                        title={Mytask.title} 
                        description={Mytask.description}>
                    </ChangeForm>
                )}
            </>
        ) : (
            <>
                <div className='Detail-header'>
                    <h2>Task with ID {taskID} not found</h2>
                    <Link to='/Kanban-Board' className='close-detail-btn'></Link>
                </div>
            </>
        )}
        </div>  
        
    )
}

export default TaskDetail;