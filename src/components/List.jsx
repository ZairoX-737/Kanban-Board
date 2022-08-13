import React from 'react'
import '..//App.css'
import { LIST_TYPES } from '../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormAddNewTask from './FormAddNewTask'


const Board = props => {
    const {title, type, tasks, allTasks, setTasks, selectTasks, addNewTask} = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [isButtonVisible, setButtonVisible] = useState(true)
    const [isSelectButtonVisible, setSelectButtonVisible] = useState(true)
    const [isSelectVisible, setSelectVisible] = useState(false)
    
    const handleClickBacklog = () => {
        setFormVisible(!isFormVisible)
        setButtonVisible(!isButtonVisible)
    }

    const handleClickSelect = () => {
        setSelectVisible(!isSelectVisible)
        setSelectButtonVisible(!isSelectButtonVisible)
    }

    const selectHandleChange = (e) => {
        console.log('name', e.target.status)
        const updatedTasks = allTasks.map(task => {
            if(e.target.value === task.title) {
                return {...task, status: type}
            }
            return task
        })
        setTasks(updatedTasks)
        setSelectVisible(!isSelectVisible)
        setSelectButtonVisible(!isSelectButtonVisible)
    }

    return (
        <div className='kanban-block'>
            <h2 className='subtitle'>{title}</h2>
            {tasks.map(task => {
                return(
                    <Link to={`/tasks/${task.id}`} className='taskLink'>
                        <div 
                            key={task.id} 
                            className='kanban-item' 
                        > 
                            {task.title}  
                        </div>
                    </Link>
                )
            })}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} setButtonVisible={setButtonVisible} />
            )}
            {type === LIST_TYPES.BACKLOG && isButtonVisible && (
                <button className='kanban-add' onClick={handleClickBacklog}>+ Add card</button>
            )}          
            {type !== LIST_TYPES.BACKLOG && (
                <>
                    {selectTasks.length === 0 && (
                        <button className='kanban-add kanban-add-disabled' disabled='disabled'>No tasks to add</button>
                    )}
                    {selectTasks.length !== 0 && isSelectButtonVisible && (
                        <button className='kanban-add' onClick={handleClickSelect} >+ Add card</button>
                    )}
                    {selectTasks.length > 0 && isSelectVisible && (
                        <select className='kanban-select' onChange={selectHandleChange} >
                            <option selected> Select task </option>
                            {selectTasks.map(task => {
                                return(
                                        <option value={task.title}>{task.title}</option> 
                                )
                            })}

                        </select>
                    )}
                    
                </>
            )}
        </div>
    )
}

export default Board;