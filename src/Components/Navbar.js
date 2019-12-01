import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleSetActive = (to)=>console.log(to);
  
  render() {
    const {setActiveSection} =this.props;
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=>setActiveSection('section1')}
                onSetActive={(to)=> setActiveSection(to)}
              >
                Section 1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=>setActiveSection('section2')}
                onSetActive={(to)=> setActiveSection(to)}
              >
                Section 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=>setActiveSection('section3')}
                onSetActive={(to)=> setActiveSection(to)}
              >
                Section 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=>setActiveSection('section4')}
                onSetActive={(to)=> setActiveSection(to)}
              >
                Section 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={()=>setActiveSection('section5')}
                onSetActive={(to)=> setActiveSection(to)}
              >
                Section 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
