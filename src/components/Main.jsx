import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Board from './Board'
import TaskDetail from './TaskDetail'
import '..//App.css'


const Main = props => {
    return (
        <main className='kanban-main'>
            <Routes>
                <Route exact path ={'/Kanban-Board'} element={<Board {...props}/>}>
                </Route>

                <Route path ={'/tasks/:taskID'} element={<TaskDetail {...props} />}>
                </Route>
            </Routes>

        </main>
    )
}

export default Main;