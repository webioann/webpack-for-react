import React,{useState} from 'react'
import './app.scss'

function App() {
    const [statez,setStatez] = useState("HELLO")
    console.log("HELP");

    return (
        <div className="cont">
            <h1> {statez} </h1>
        </div>
    )
}
export default App;