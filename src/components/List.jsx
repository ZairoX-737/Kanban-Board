import React from 'react'
import '..//App.css'
import { LIST_COLORS, LIST_TYPES } from '../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormAddNewTask from './FormAddNewTask'


const Board = props => {
    const {title, type, tasks, allTasks, setTasks, selectTasks, addNewTask} = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setSelectVisible] = useState(false)
    
    const handleClickBacklog = () => {
        setFormVisible(!isFormVisible)
    }

    const handleClickSelect = () => {
        setSelectVisible(!isSelectVisible)
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
                            addNewTask={addNewTask}
                            style={ {background: LIST_COLORS[type], border: `7px solid ${LIST_COLORS[type]}` }}
                        > 
                            {task.title}  
                        </div>
                    </Link>
                )
            })}
            {type === LIST_TYPES.BACKLOG && (
                <button className='kanban-add' onClick={handleClickBacklog}>+ Add card</button>
            )}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
            )}
            {type !== LIST_TYPES.BACKLOG && (
                <>
                    {selectTasks.length === 0 
                        ? <button className='kanban-add kanban-add-disabled' onClick={handleClickSelect} disabled='disabled'>No tasks to add</button>
                        : <button className='kanban-add' onClick={handleClickSelect} >+ Add card</button>
                    }
                    {selectTasks.length > 0 && isSelectVisible && (
                        <select className='kanban-select' >
                            {selectTasks.map(task => {
                                return(
                                    <option onClick={selectHandleChange}>{task.title}</option> 
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