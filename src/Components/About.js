import React from "react";
import "./About.css";
import {FaPeopleCarry} from "react-icons/fa";
import {Col, Container, Row} from "react-grid-system";
import {IoLanguage, MdLightbulbOutline} from "react-icons/all";
import Portrait from '../IMG-20211004-WA0002.jpg';

function About(){
    return<div className={"aboutBody"}>
        <div className={"about"}>
            <div className={"aboutHead"}>
                <p style={{textDecoration: "underline", textDecorationColor:"#5c488e", textDecorationThickness:"3px"}}>
                    About me
                </p>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className={"qualityBox"}>
                            <div className={"circle"}>
                                <FaPeopleCarry className={"circleIcon"}/>
                            </div>
                            <div style={{fontSize:"3vh"}}>
                                <b>Team Player</b>
                            </div>
                            <div style={{textAlign:"center"}}>I'm socially skilled and <br/>always ready to help others.</div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className={"qualityBox"}>
                            <div className={"circle"}>
                                <IoLanguage className={"circleIcon"}/>
                            </div>
                            <div style={{fontSize:"3vh"}}>
                                <b>Language Skills</b>
                            </div>
                            <div style={{textAlign:"center"}}>I speak fluent English <br/>and Dutch and know some <br/> Spanish, German and French.</div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <div className={"qualityBox"}>
                            <div className={"circle"}>
                                <MdLightbulbOutline className={"circleIcon"}/>
                            </div>
                            <div style={{fontSize:"3vh"}}>
                                <b>Quick Learner</b>
                            </div>
                            <div style={{textAlign:"center"}}>It takes me a short time to <br/> get to know new technologies.</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}/>
                    <Col sm={12} md={12} lg={5}>
                        <div className={"profileBox"}>
                            <img className={"profilePic"} style={{height:"40vh"}} src={Portrait}/>
                            <div className={"profileDescription"}>
                                I'm a Software Developer who's studying at Fontys who always strives for improvement.
                                I have a serious passion for problem-solving, helping others and programming.
                            </div>
                        </div>

                    </Col>
                    <Col sm={2} md={2.5} lg={1}/>
                    <Col sm={10} md={9.5} lg={5}>
                        <div style={{fontSize:"40px", textDecorationThickness:"3px", textDecoration: "underline", textDecorationColor:"#5c488e", marginTop:"2vh", marginLeft:"2vw"}}>
                            Programming Skills
                        </div>
                        <div style={{marginLeft:"2vw", marginTop:"1vh"}}>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> C#</div>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> JavaScript</div>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> React</div>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> HTML</div>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> CSS</div>
                            <div style={{fontSize:"30px"}}><span className={"dot"}>➤</span> PHP</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>

}
export default About;