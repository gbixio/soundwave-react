import React from 'react';
import './mainContent.css';
import covers  from '../../assets/covers.jpg';
import  microphone  from '../../assets/microphone.svg';
import albums from '../../assets/albums.svg';
import more from '../../assets/more.svg';



const MainContent = () => {
    return (
        <main id='mainContent'>
            <div id='mainContent__container'>
                <h1>Discover new music</h1>
                <div id='mainContent__cards'>
                    <div id='mainContent__mini-card'> 
                        <img src={microphone} alt="" />            
                        <p>Charts</p>
                    </div>
                    <div id='mainContent__mini-card'> 
                        <img src= {albums} alt="" />
                        <p>Albums</p>
                    </div>
                    <div id='mainContent__mini-card'> 
                        <img src={more} alt="" />
                        <p>More</p>
                    </div>
                    </div>
                <p>By joining you can benefit by listening the latest albums released</p>
            </div>
            <img id='mainContent__img' src={covers} alt="covers" />    
         </main>
    )
    }

export default MainContent

           
