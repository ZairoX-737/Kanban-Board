import React from 'react'
import { LIST_TYPES, LIST_COPY } from '../config'
import List from './List'
import '..//App.css'
import uniqid from 'uniqid'


const Board = props => {
    const {tasks, setTasks} = props

    const addNewTask = (title, description) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className='board'>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                const selectTasks = tasks.filter(task => { 
                    if(type === 'ready') {
                        return(
                            task.status === 'backlog'
                        )
                    } else if (type === 'inProgress') {
                        return(
                            task.status === 'ready'
                        )
                    } else if (type === 'finished') {
                        return(
                            task.status === 'inProgress'
                        )
                    }
                })
                return(
                    <List key={type} title={LIST_COPY[type]} type={type} allTasks={tasks} tasks={listTasks} setTasks={setTasks} selectTasks={selectTasks} addNewTask={addNewTask} />
                )
            })}
        </div>
    )
}

export default Board;