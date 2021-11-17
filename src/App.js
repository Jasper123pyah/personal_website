import './App.css';
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Projects from "./Components/Projects";
import background from "./background.png"
function App() {


    return (<div className={"backGround"}>
            <Welcome/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;
