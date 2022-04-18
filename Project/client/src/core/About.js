import React from "react";
import Menu from "./Menu";



const About = () => {
    return (
        <div className="about">
            <Menu/>
            <h1 style={{textAlign:"center", textDecoration:"underline"}}>
                Developed By
            </h1>
           <div className="card" style={{display:"inline", marginLeft:"500px"}}>
            <div className = "card h-50" style={{width:"200px"}}>
                    <div className = "card-header bg-dark text-white">Garvit Rajput</div>
                </div>
                <div className = "card h-50" style={{width:"200px"}}>
                    <div className = "card-header bg-dark text-white">Divyanshu Gahlot</div>
                </div>
                <div className = "card h-50" style={{width:"200px"}}>
                    <div className = "card-header bg-dark text-white">Bhupendra Singh Gola</div>
                </div>
                <div className = "card h-50" style={{width:"200px"}}>
                    <div className = "card-header bg-dark text-white">Harsh Chaudhary</div>
                </div>
                <div className = "card h-50" style={{width:"200px"}}>
                    <div className = "card-header bg-dark text-white">Abhishek Rana</div>
                </div>
           </div>
         </div>
    )
}

export default About
