import React, {useState} from 'react'
import '../assets/header.css'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <header>
            <div id = 'logo'>kasa</div>
            <div id = 'headerLinksContainer'>
                <Link to = '/'>accueil</Link> 
                <p>A Propos</p>
            </div>

        </header>
    )
}

export default Header