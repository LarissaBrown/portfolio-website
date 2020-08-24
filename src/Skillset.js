import React from 'react';
import skillsetData from "./skillsetData"



function Skillset (props) {
    
    return (
        <div >
            <div className="slider"> 
                <h2 className="title">{props.title}</h2>
            </div >
                <div className="skillset">
            {
             
                skillsetData.map(item =>
                
                <div className="skill">
                    <img alt="skill" src={item.logoImage}/>
                </div>
               
                
                )
           
            }   
        </div>
        </div>
    
    )
        }





export default Skillset;

                    