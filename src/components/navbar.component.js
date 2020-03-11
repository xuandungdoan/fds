import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link to="/" className="navbar-brand">ExerciseBrand</Link>
                <div className="collapse navbar-collapse"></div>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                       <Link to= "/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="nav-item">
                       <Link to= "/add" className="nav-link">Create Exercises</Link>
                    </li>
                    <li className="nav-item">
                       <Link to= "/user/add" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
