import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navabar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar scroll</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px;"}}>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">
                            {({isActive})=>(
                                <>{isActive ? "👉" : ''}Home</>
                            )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                {({isActive})=>(
                                    <>
                                        {isActive ? "👉" : ''}About
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                    <div className="checkbox-wrapper-5">
                        <div className="check">
                            <input id="check-5" onClick={props.changeMode} type="checkbox" />
                            <label htmlFor="check-5"></label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

