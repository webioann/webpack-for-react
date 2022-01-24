import React,{ useState } from "react";
import { useSelector } from "react-redux";
import "./container.scss";

function Container(props) {
    const theme = useSelector(state => state.redux.theme) 

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const client = () => {
        console.log(`event ==> `);
        setX(window.event.clientX)
        setY(window.event.clientY)

    }

    return (
        <div id='top' className={`container-fluid-${theme}`}  onMouseMove={client}>
            <div className={`container-${theme}`}>
                <span> EVENT  X: {x} == Y: {y}</span>
                {props.children}
            </div>
        </div>
    );
}
export default Container;
