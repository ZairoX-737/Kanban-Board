import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Board from './Board'
import TaskDetail from './TaskDetail'
import '..//App.css'


const Main = props => {
    return (
        <main className='kanban-main'>
            <Routes>
                <Route exact path ={'/Kanban-Board'} element={<Board {...props} key='board'/>}>
                </Route>

                <Route path ={'/tasks/:taskID'} element={<TaskDetail {...props} key='detail' />}>
                </Route>
            </Routes>

        </main>
    )
}

export default Main;