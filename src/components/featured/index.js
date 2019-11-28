import React from 'react'
import Carrousel from './Carrousel'; 
import TimeCountDown from './TimeCountDown';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Thom Yorke
                </div>
            </div>
            <TimeCountDown/>
        </div>
    );
};

export default Featured;