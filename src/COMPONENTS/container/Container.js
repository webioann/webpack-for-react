import React from "react";
import { useSelector } from "react-redux";
import "./container.scss";

function Container(props) {
    const theme = useSelector(state => state.redux.theme) 

    return (
        <div className={`container-fluid-${theme}`}>
            <div className={`container-${theme}`}>
                {props.children}
            </div>
        </div>
    );
}
export default Container;
