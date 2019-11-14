import React from 'react'
import Carrousel from './Carrousel'; 
import TimeCountDown from './TimeCountDown';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeCountDown/>
        </div>
    );
};

export default Featured;