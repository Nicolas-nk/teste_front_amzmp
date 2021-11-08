import React from 'react'
import HeroSection from '../../HeroSection/HeroSection.js'
import HeroSection1 from '../../HeroSection/HeroSection1.js'
import {mainObjone, mainObjtwo, mainObjthree} from './Data'

export function Vantagens() {
    return (
        <>  
            <HeroSection1 {...mainObjone}/>
        </>
    )
}
export function VisaoCliente() {
    return (
        <>  
            <HeroSection1 {...mainObjtwo}/>
        </>
    )
}
export function ComoFunciona() {
    return (
        <>  
            <HeroSection {...mainObjthree}/>
        </>
    )
}