import React from "react"
import Typed from "react-typed"
import { Button } from 'reactstrap';

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
            <Button href="mailto:gethinjackjones@gmail.com" variant="primary" className="btn-main-offer">Contact Me</Button>
            </div>           
        </div>
    )
}

export default Header
