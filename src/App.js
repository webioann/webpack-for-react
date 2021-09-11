import {useState} from 'react'
import './app.scss'

function App() {
    const [statez,setStatez] = useState("HELLO")

    return (
        <div className="cont">
            <h1> {statez} </h1>
        </div>
    )
}
export default App;