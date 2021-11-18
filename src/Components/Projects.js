import React, {useState} from "react";
import "./Projects.css";
import {Col, Container, Row} from "react-grid-system";
import Personal from '../personal.png';
import AnteUp from '../ante-up.png';
import ProjectCard from "./ProjectCard";

function Projects(){
    const projects = [
        {name: "Ante-Up", language:"React JS/C#",link:"", image:AnteUp},
        {name: "Personal Website", language:"React JS", link:"/", image:Personal},
    ];

    return<div>
        <div className={"projectsHead"}>
            <p style={{textDecoration: "underline", textDecorationColor:"#ad4f83", textDecorationThickness:"3px"}}>
                Projects
            </p>
        </div>
        <Container>
            <Row>
                <Col lg={2}/>
                {projects.map((project) => <Col sm={12} md={6} lg={4}>
                   <ProjectCard name={project.name} language={project.language} link={project.link} image={project.image}/>
                </Col>)}
                <Col lg={2}/>
            </Row>
        </Container>
    </div>
}
export default Projects;