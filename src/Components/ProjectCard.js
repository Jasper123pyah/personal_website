import React from "react";
import './Projects.css';

function ProjectCard(props) {
    function URL() {
        window.open(props.link, '_blank').focus();
    }
    if(props.link === "personalsite"){
        return <div className={"projectCardNoPointer"}>
            <div className={"projectDescription"}>
                <div style={{fontSize: "26px"}}>
                    {props.name}
                </div>
                <div style={{fontSize: "20px", color: "#ad4f83"}}>
                    {props.language}
                </div>
            </div>
            <img alt={"Missing"} className={"projectImage"} src={props.image}/>
        </div>
    } else if (props.link ==="development"){
        return <div className={"projectCardNoPointer"}>
            <div className={"projectDescription"}>
                <div style={{fontSize: "26px"}}>
                    {props.name}
                </div>
                <div style={{fontSize: "20px", color: "#ad4f83"}}>
                    {props.language}
                </div>
                <div className={"learnMoreButtonDisabled"}>Under Development</div>
            </div>
            <img alt={"Missing"} className={"projectImage"} src={props.image}/>
        </div>
    } else {
        return <div onClick={URL} className={"projectCard"}>
            <div className={"projectDescription"}>
                <div style={{fontSize: "26px"}}>
                    {props.name}
                </div>
                <div style={{fontSize: "20px", color: "#ad4f83"}}>
                    {props.language}
                </div>
                <div>
                    Click to view the project!
                </div>
            </div>
            <img alt={"Missing"} className={"projectImage"} src={props.image}/>
        </div>
    }
}
export default ProjectCard;



