import React from 'react'
import '..//App.css'
import { useState } from 'react'
import { LIST_TYPES } from '../config'

const Footer = props => {
    const initialStateN = window.localStorage.getItem('KANBAN_BOARD_INFO_NAME') || 'NAME'
    const initialStateY = window.localStorage.getItem('KANBAN_BOARD_INFO_YEAR') || 'YEAR'
    const [name, setName] = useState(initialStateN);
    const [year, setYear] = useState(initialStateY);
    const { tasks } = props

    const handleChangeName = (e) => {
        setName(e.target.value);
        window.localStorage.setItem('KANBAN_BOARD_INFO_NAME', name);
    }
    const handleChangeYear = (e) => {
        setYear(e.target.value);
        window.localStorage.setItem('KANBAN_BOARD_INFO_YEAR', year);
    }

    return (
        <footer className="kanban-footer">
            <div className='tasks-info'>
                {Object.values(LIST_TYPES).map(type => {
                    if(type === 'inProgress'){
                        const listCount = tasks.filter(task => task.status === 'backlog')
                        if (!listCount.length) return <div key={type} className='error-count'> No Active tasks</div>
                        return (
                        <div key={type}>Active tasks: {listCount.length}</div>
                         )
                    } 
                    if (type === 'finished'){
                        const listCount = tasks.filter(task => task.status === 'finished')
                        if (!listCount.length) return <div key={type} className='error-count'> No Finished tasks</div>
                        return (
                        <div key={type}>Finished tasks: {listCount.length}</div>
                         )
                    } 
                })}

            </div>
            <div className='board-author'>
                Kanban board by 
                <input className='board-info' id='1' onChange={handleChangeName} onBlur={handleChangeName} value={name}></input>, 
                <input className='board-info' onChange={handleChangeYear} onBlur={handleChangeYear} value={year}></input>
            </div>
        </footer>
    )
}

export default Footer;