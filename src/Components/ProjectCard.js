import React from "react";

function ProjectCard(props) {

    return (<div className={"projectCard"}>
        <div className={"projectDescription"}>
            <div style={{fontSize: "1.5vw"}}>
                {props.name}
            </div>
            <div style={{fontSize: "1vw", color: "#ad4f83"}}>
                {props.language}
            </div>
            {props.link ? <a className={"learnMoreButton"} href={props.link}>View site</a>
                : <div className={"learnMoreButtonDisabled"}>Under Development</div>}
        </div>
        <img alt={"Missing"} className={"projectImage"} src={props.image}/>
    </div>)
}
export default ProjectCard;