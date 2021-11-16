import React from "react"
// import Redux from "../../Redux"
import "./homepage.css"
import Red from '../../Red'
const Homepage = ({setLoginUser}) => {
    return (
        <div className="">
            <Red/>
            <button className="LogoutButton" onClick={() => setLoginUser({})} >Logout</button>
        </div>
    )
}

export default Homepage