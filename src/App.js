import React,{useState} from 'react'
import './app.scss'
// import './style.css'


function App() {
    const[count,setCount] = useState(0)
    console.log(`count ==> ${count}`);

    function plus() {
        setCount(count + 1)
    }

    function unplus() {
        setCount(count - 1)
    }
    return (
        <div className="container root">
            <h1>Webpack with autoprefixer.</h1>
            <div className="dop"></div>
            <span>{count}</span>
            <button onClick={plus}>click</button>
            <button onClick={unplus}>click</button>
        </div>
    )
}
export default App;