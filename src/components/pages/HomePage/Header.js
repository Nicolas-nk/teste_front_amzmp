import React from 'react'
import HeroSection from '../../HeroSection/HeroSection.js'
import {headerObj} from './Data'

function Header() {
    return (
        <>
            <HeroSection {...headerObj}/>
        </>
    )
}

export default Header
