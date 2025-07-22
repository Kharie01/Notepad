import React from 'react'
import './Sidebar.css'
import Arrowicon from '../../assets/arrowdown.svg'
import Profile from '../../assets/profile.svg'
import Search from '../../assets/search.svg'
import Dots from '../../assets/dots.svg'
import NPicon from '../../assets/notebook.svg'
import Sicon from '../../assets/settings.svg'



function Sidebar() {
  return (
    <div className='Container' transition-style="in:wipe:right">
        <div className="leftbtn">
            <div className="profile">
                <img id='profile1' src={Profile} alt="" />
                <h6>Kharie Ladignon</h6>
                <img id='arrow' src={Arrowicon} alt="" />
            </div>
            <div className="searchbar">
                <img src={Search} alt="" />
                <input className='searchinput' type="text" placeholder='Search notes' />
            </div>
            <div className="features">
                <div className="btnFunction">
                    <img src={NPicon}alt="" />
                    <h5>My Notes</h5>
                    <img src={Dots} alt="" />
                </div>
            </div>
        </div>
        <div className="rigthbtn">
            <div className="settings">
                <img src={Sicon} alt="" />
                <h5>Settings</h5>
            </div>
        </div>
    </div>
  )
}

export default Sidebar