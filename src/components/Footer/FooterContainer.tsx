import React from 'react';
import {Footer} from './Footer'
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";


const FooterContainer = () => {
    return (
        <Footer>
            <div className='links'>
                <p><a href="#">About us</a></p>
                <p><a href="#">Contact</a></p>
            </div>
            <div>
                <div className='social-media'>
                    <BsTwitter/>
                     <a href="#">Twitter</a></div>
                <div className='social-media'>
                    <AiFillFacebook/>
                     <a href="#">Facebook</a>
                </div>
            </div>
            
        </Footer>
    )
    }

export default FooterContainer