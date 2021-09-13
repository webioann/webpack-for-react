import React from 'react'
import './app.scss'

function Contacts() {
    return (
        <section className="contacts row">
            <a name="contacts" href="#"></a>
            <div className="col-sm-6 col-lg-3">
                <div className="row">
                    <div className="viber-icon col-2"></div>
                    <div className="col-10">Contact with information</div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="row">
                    <div className="linkedin-icon col-2"></div>
                    <div className="col-10">Contact with information</div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-3">
                <div className="row">
                    <div className="gmail-icon col-2"></div>
                    <div className="col-10">Contact with information</div>
                </div>
            </div>
            <div className="git-hub col-sm-6 col-lg-3">
                <div className="row">
                    <div className="git-hub-icon col-2"></div>
                    <div className="col-10">Contact with information</div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
