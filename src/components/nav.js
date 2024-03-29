import React from 'react'
// import { Link } from "gatsby"
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'

// import logo from '../assets/images/logo.png'

export default props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <div className="logo-wrapper">
      <a href="http://www.calvano.com">
        <img
          src={require('../assets/images/header-logo.png')}
          alt="Calvano Logo"
          className="header-logo"
        />
      </a>
    </div>
    <Scrollspy
      items={[
        // 'top',
        'overview',
        'get-involved',
        'plan',
        // 'renderings',
        'news',
        'contact-us',
      ]}
      currentClassName="is-active"
      offset={250}
    >
      {/* <div className="logo-wrapper-inner">
        <a href="http://www.calvano.com">
          <img
            src={require('../assets/images/header-logo.png')}
            alt="Calvano Logo"
            className="header-logo"
          />
        </a>
      </div> */}
      <li>
        <Scroll type="id" element="overview" offset={0}>
          <a href="#overview">Overview</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="get-involved" offset={0}>
          <a href="#get-involved">Get Involved</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="plan" offset={0}>
          <a href="#plan">Plan and Renderings</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="news" offset={0}>
          <a href="#news">News</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact-us" offset={0}>
          <a href="#contact-us">Contact Us</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)
