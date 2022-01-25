import React,{ useState } from "react";
import { useSelector } from "react-redux";
import "./container.scss";

function Container(props) {
    const theme = useSelector(state => state.redux.theme) 

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
        <div id='top' className={`container-fluid-${theme}`}  onMouseMove={client}>
            <div className={`container-${theme}`}>
                {/* <span> EVENT  X: {pos.posX} == Y: {pos.posY} == TIME: {pos.time}</span>  */}
                
                {props.children}
            </div>
        </div>
    );
}
export default Container;
