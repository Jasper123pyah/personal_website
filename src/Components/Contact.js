import React from "react";
import "./Contact.css";
import {BsGithub, BsLinkedin, FiMail} from "react-icons/all";
function Contact(){
    return<div>
        <div className={"contactHead"}>
            <p style={{textDecoration: "underline", textDecorationColor:"#5491bc", textDecorationThickness:"3px"}}>
                Find Me
            </p>
        </div>
        <div style={{display:"flex", justifyContent:'center'}}>
            <a rel="noreferrer" href={"https://www.linkedin.com/in/jaspervandenmeiracker/"} target="_blank">
                <BsLinkedin className={"contactIcon"}/>
            </a>
            <a rel="noreferrer" href={"https://github.com/Jasper123pyah"} target="_blank">
                <BsGithub className={"contactIcon"}/>
            </a>
            <a rel="noreferrer" href='mailto:jaspervandenmeiracker99@gmail.com' target="_blank">
                <FiMail className={"contactIcon"}/>
            </a>
        </div>

    </div>
}
export default Contact;
