import React,{ useState } from "react";
import "./container.scss";

function Container(props) {

    const [pos,setPos] = useState({
        posX: 0,
        posY: 0,
        time: 0
    })
    let data = []

    const client = () => {
        setPos({
            posX: window.event.clientX,
            posY: window.event.clientY,
            time: Date.now(),
        })
    }

    return (
        <div id='top' className='container-fluid'  onMouseMove={client}>
            {/* <span> EVENT  X: {pos.posX} == Y: {pos.posY} == TIME: {pos.time}</span>  */}

            <div className='container'>
                {props.children}
            </div>
        </div>
    );
}
export default Container;
