import React from 'react'
import facebook from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import instagram from '../images/Instagram.png'
import github from '../images/GitHub.png'

export default function Footer(){
    return(
        <div className='footer'>
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
        </div>
    )
}