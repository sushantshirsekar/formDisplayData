import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <ul>
            <li> <NavLink to="/"> Form </NavLink></li>
            <li><NavLink to="/data"> Data </NavLink></li>
        </ul>
    </div>
  )
}

export default Navigation
