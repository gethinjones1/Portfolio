import React from "react"
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1></h1>
                <Typed
                    className="type-text"
                    strings={["Gethin Jones", "22 Years Old", "Aspiring Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="/contact" className="btn-main-offer">Contact Me</a>
            </div>           
        </div>
    )
}

export default Header
