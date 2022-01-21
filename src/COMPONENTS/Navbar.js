import React,{useState, useEffect} from 'react'
import LangButton from './LangButton/LangButton';

import ThemeToggler from './ThemeToggler'//===== ?????

import useTranslator from '../hooks/useTranslator'
import { navbar } from '../data/multiLang'
import './navbar.scss'


function Navbar() {

    const resumeLink = "https://drive.google.com/file/d/1Lr05RkXCVdrd4yoEPv1a5fQ3rwu-sVMN/view?usp=sharing"

    return (
        <nav className="navbar">
          <div className="row gy-0">
            <li className="col-3">
              <a name="home" href="#">
                {useTranslator(navbar.home)}
              </a>
            </li>
            <li className="col-3">
              <a href="#contacts">
                {useTranslator(navbar.contacts)}
              </a>
            </li>
            <li className="col-3">
              <a href={resumeLink} target="_blank">
                {useTranslator(navbar.resume)}
              </a>
            </li>
            <LangButton/>
            <li className="sun-moon col-1">
              <ThemeToggler/>
            </li>

          </div>
        </nav>
    );
}
export default Navbar;
