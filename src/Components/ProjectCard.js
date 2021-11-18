import React from "react";

function ProjectCard(props) {

    return (<div className={"projectCard"}>
        <div className={"projectDescription"}>
            <div style={{fontSize: "26px"}}>
                {props.name}
            </div>
            <div style={{fontSize: "20px", color: "#ad4f83"}}>
                {props.language}
            </div>
            {props.link ? <div/>
                : <div className={"learnMoreButtonDisabled"}>Under Development</div>}
        </div>
        <img alt={"Missing"} className={"projectImage"} src={props.image}/>
    </div>)
}
export default ProjectCard;
