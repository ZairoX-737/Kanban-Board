import React from 'react'
import { useState } from 'react';
import userAvatar from '../images/user-avatar.png'
import userArrow_Down from '../images/user-arrow.png'

import '..//App.css'

function Header() {
    const initialState = window.localStorage.getItem('KANBAN_BOARD_TITLE') || 'Awesome Kanban Board'
    const [isMenuVisible, setMenuVisible] = useState(false)
    const [boardName, setBoardName] = useState(initialState);

    const BoardNameHandleChange = (e) => {
        if (boardName === '') {
            setBoardName(e.target.value);
            window.localStorage.setItem('KANBAN_BOARD_TITLE', boardName);
            document.querySelector('.title').style.border = '1px solid red'
            document.querySelector('.title').placeholder = 'Name your board!'
        } else {
            setBoardName(e.target.value);
            window.localStorage.setItem('KANBAN_BOARD_TITLE', boardName);
            document.querySelector('.title').style.border = 'none'
        }
    }

    const handleClick = () => {
        setMenuVisible(!isMenuVisible)
    }


    return (
        <div className="kanban-title">
            <input
                type='text'
                className="title"
                spellCheck='false'
                onChange={BoardNameHandleChange}
                onBlur={BoardNameHandleChange}
                value={boardName}>
            </input>

            <div className='profile-wrapper' onClick={handleClick}>
                <div className='profile-wrapper-info'>
                    <div className='profile-picture'>
                        <img src={userAvatar} alt='profile_picture'></img>
                    </div>
                    <div className={isMenuVisible ? 'profile-arrow-down' : 'profile-arrow'}>
                        <img src={userArrow_Down} alt='open_profile_settings '></img>
                    </div>
                </div>
                {isMenuVisible && (
                    <div className='profile-wrapper-menu'>
                        <div className='menu-item'>Profile</div>
                        <div className='menu-item'>Log Out</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;