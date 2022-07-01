import React from 'react'
import pic from '../images/pic.png'
import mail from '../images/Mail.png'
import linkedin from '../images/linkedin.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={pic} alt="pic"/>
            <p className='name'>Laura Smith</p>
            <p className='role'>Frontend Developer</p>
            <p className='website'>laurasmith.website</p>
            <div className ='row'>
                <div className='column'>
                    <img src={mail} alt="email-logo" />
                    <p>Email</p>
                </div>
                <div className='column second'>
                    <img src={linkedin} alt="linkedin-logo" />
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    )
}