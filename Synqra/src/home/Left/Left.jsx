import React from 'react'
import Search from './Search'
import User from './User'
import UserList from './UserList'

function Left() {
  return (
    <div className = "w-[30%] bg-black text-white">
        <h1 className = "font-bold text-3xl p-2">Chats</h1>
        <Search/>
        <hr></hr>
        <UserList/>
    </div>
  )
}

export default Left