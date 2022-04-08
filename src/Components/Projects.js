import React from "react";
import "./Projects.css";
import {Col, Container, Row} from "react-grid-system";
import Personal from '../personal.png';
import AnteUp from '../ante-up.png';
import ASAM from '../asam.png';
import ProjectCard from "./ProjectCard";

function Projects(){
    const projects = [
        {name: "Ante-Up", language:"React JS/C#",link:"development", image:AnteUp},
        {name: "Personal Website", language:"React JS", link:"personalsite", image:Personal},
        {name: "Project Lead of ASAM", language:"Cyber Security & Angular/C#", link:"https://asamng.test.fhict.nl", image:ASAM}
    ];

    return<div>
        <div className={"projectsHead"}>
            <p style={{textDecoration: "underline", textDecorationColor:"#ad4f83", textDecorationThickness:"3px"}}>
                Projects
            </p>
        </div>
        <Container>
            <Row style={{marginBottom:'4vh'}}>
                {projects.map((project) => <Col sm={12} md={6} lg={4}>
                   <ProjectCard name={project.name} language={project.language} link={project.link} image={project.image}/>
                </Col>)}
            </Row>
        </Container>
    </div>
}
export default Projects;
