import React from "react"


function Navbar (){

    return (
    <div>
        <ul className="navbar">
            <li>contact</li>
            <li>portfolio</li>
            <li>skillset</li>
            <li>resumé</li>
            <li><img className="github"  src={process.env.PUBLIC_URL + 'githubcat.png'} alt="github"/></li>
            <li><img className="linkedIn" src={process.env.PUBLIC_URL + 'linkedin.png'} alt="linkedin"/></li>
        </ul>
    </div>
    
    )
    
}

export default Navbar