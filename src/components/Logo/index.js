import React from 'react'
import './styles.css'
import collectory from '../../images/collectory.png'

export default function Logo(){
    return(
        <div className="logo">
            <img src={collectory} alt='Collectory' />
        </div>
    )
}