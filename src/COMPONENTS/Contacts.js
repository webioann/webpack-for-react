import React from 'react'
import './app.scss'

function Contacts() {
    return (
        <div className="contacts row">
            <a name="contacts" href="#"></a>

            <div className="viber col-sm-6 col-lg-3">
                <div className="row py-2">
                    <div className="viber-icon col-2"></div>
                    <div className="col-10">+380(96)842-25-72</div>
                </div>
            </div>

            <div className="linkedin col-sm-6 col-lg-3">
                <a href="https://linkedin.com/in/alexander-veles" target="_blank" className="row py-2">
                    <div className="linkedin-icon col-2"></div>
                    <div className="col-10">linkedin./alexander-veles</div>
                </a>
            </div>

            <div className="gmail col-sm-6 col-lg-3">
                <div className="row py-2">
                    <div className="gmail-icon col-2"></div>
                    <div className="col-10">ioannn7777@gmail.com</div>
                </div>
            </div>

            <div className="git-hub col-sm-6 col-lg-3">
                <a href="https://github.com/webioann" target="_blank" className="row py-2">
                    <div className="git-hub-icon col-2"></div>
                    <div className="col-10">github.com/webioann</div>
                </a>
            </div>
        </div>
    )
}

export default Contacts;
