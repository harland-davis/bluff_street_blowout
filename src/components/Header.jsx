import React from 'react'
import './Header.css'
import Running from '../images/people_running.jpg'

export default function Header() {
  return (
    <div className="header-container">
      <img src={Running} />
      <h1 className="header-text"><span className="first-annual">The First annual, </span><span className="bluff-street-blowout">"Bluff Street Blowout"</span><br></br>GARAGE<br></br>SALE!<br></br><span>⬇<br></br></span><span className="date-and-time">2341 21st Street, Boulder Colorado. Friday, July 1st.</span></h1>
    </div>
  )
}
