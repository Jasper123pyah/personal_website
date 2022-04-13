import React from "react";
import "./About.css";
import {FaPeopleCarry} from "react-icons/fa";
import {Col, Row} from "react-grid-system";
import {IoLanguage, MdLightbulbOutline} from "react-icons/all";
import Portrait from '../IMG-20211004-WA0002.jpg';

function About() {
    return <div className={"about"}>
        <div className={"aboutHead"}>
            <p style={{textDecoration: "underline", textDecorationColor: "#5c488e", textDecorationThickness: "3px"}}>
                About me
            </p>
        </div>
        <div className={'aboutContainer'}>
            <Row>
                <Col sm={12} md={12} lg={3}>
                    <div className={"profileBox"}>
                        <img alt={"Not Found"} className={"profilePic"} style={{height: "40vh"}} src={Portrait}/>
                    </div>
                </Col>
                <Col md={12} lg={3}>
                    <div className={"profileDescription"}>
                        I'm a software developer studying at Fontys who always strives for improvement.
                        I have a serious passion for problem-solving, helping others and programming.
                        I am currently in my fourth semester doing the excellence programme of Fontys called <a
                        style={{color: '#5c488e'}} rel="noreferrer" target="_blank"
                        href={'https://deltafhict.nl/'}>Delta</a>.
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className={'centerSkills'}>
                        <div style={{textDecorationThickness: "3px"}} className={"programmingSkills"}>
                            Programming Skills
                        </div>
                        <div style={{ marginTop: "1vh"}}>
                            <div className={"skillSize"}><span className={"dot"}>●</span> Back-end Development</div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> ASP.NET
                            </div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> NodeJS
                            </div>
                            <div className={"skillSize"}><span className={"dot"}>●</span> Front-end Development</div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> TypeScript
                            </div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> React JS
                            </div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> HTML
                            </div>
                            <div className={"skillSize"} style={{marginLeft: "5vh"}}><span
                                className={"dot"}>➤</span> CSS
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: "5vw"}}>
                <Col sm={12} md={6} lg={4}>
                    <div className={"qualityBox"}>
                        <div className={"circle"}>
                            <FaPeopleCarry className={"circleIcon"}/>
                        </div>
                        <div style={{fontSize: "3vh"}}>
                            <b>Team Player</b>
                        </div>
                        <div style={{textAlign: "center"}}>I'm socially skilled and <br/>always ready to help others.
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <div className={"qualityBox"}>
                        <div className={"circle"}>
                            <IoLanguage className={"circleIcon"}/>
                        </div>
                        <div style={{fontSize: "3vh"}}>
                            <b>Language Skills</b>
                        </div>
                        <div style={{textAlign: "center"}}>I speak fluent English <br/>and Dutch and know
                            some <br/> Spanish, German and French.
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={4}>
                    <div className={"qualityBox"}>
                        <div className={"circle"}>
                            <MdLightbulbOutline className={"circleIcon"}/>
                        </div>
                        <div style={{fontSize: "3vh"}}>
                            <b>Quick Learner</b>
                        </div>
                        <div style={{textAlign: "center"}}>It takes me a short time to <br/> get to know new
                            technologies.
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}

export default About;
