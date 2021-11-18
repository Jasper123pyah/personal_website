import React from "react";
import "./Welcome.css";
function Welcome(){
    function scrollDown(){
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        })
    }
    return<div className={"welcomeBox"}>
            <div style={{textAlign: 'center', fontSize: "4vh"}}>
                <div style={{marginBottom: "2vh"}}>
                    Hello, I'm <span className={"name"}><span style={{color:"#5491bc"}}> Jasper</span></span> van den Meiracker.
                    <br/>
                    I'm a soon-to-be software developer.
                </div>
                <button style={{color:"white"}}onClick={scrollDown}>Get to know me!
                    <div className="arrow down"></div>
                </button>
            </div>
        </div>
}
export default Welcome;