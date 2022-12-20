import React from 'react'
import "./Layout.css";
import bgimg1 from "../assets/images/bg-desktop-dark.jpg"
import sun from "../assets/images/icon-sun.svg"

function Layout() {
  return (
    <div className='container'>
        <div className='header-wrapper'>
            <img src={bgimg1} alt="backgroundImage"/>
            <div className='heading'>
                <h1>TODO</h1>
                <img src={sun} alt="theme-icon"/>
            </div>
        </div>
        <div className='down-wrapper'>
          <div className='form-input'>
            <form>
              <input placeholder='Create a new todo' className='form-input'/>
            </form>
          </div>
          <div className='todo-items'>

          </div>
        </div>
    </div>
  )
}

export default Layout
