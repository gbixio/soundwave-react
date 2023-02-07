import React from 'react';
import './mainContent.module.css';
import covers  from '../../assets/covers.jpg';
import { TbMicrophone2 } from "react-icons/tb";
import { FaBuffer } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";



const MainContent = () => {
    return (
        <main>
            <h1>Discover new music</h1>
            <div className='mini-card'> 
                <p>Charts</p>
                <div className='icons'> <TbMicrophone2/></div> 
            </div>
            <div className='mini-card'> 
                <p>Charts</p>
                <div className='icons'> <FaBuffer/></div> 
            </div>
            <div className='mini-card'> 
                <p>Charts</p>
                <div className='icons'> <BiRightArrowCircle/></div> 
            </div>
            <p>By joining you can benefit by listening the latest albums released</p>
            <div>
                <img src={covers} alt="covers" />
            </div>
         </main>
    )
    }

export default MainContent

           
