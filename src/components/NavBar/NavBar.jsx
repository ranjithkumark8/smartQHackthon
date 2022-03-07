import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="navBarOuterContainer">
            <div className="navBarContainer">
                <div className="navBarImage">
                    <Link to="/">
                        <img src="/Logo.png" alt="Logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}