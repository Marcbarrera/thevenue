import React from 'react'

 const Location = () => {
    return (
        <div className="location_wrapper">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.460994083535!2d-96.80142858488922!3d32.780033891138956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia%20Dallas%20Downtown!5e0!3m2!1sca!2ses!4v1573748007496!5m2!1sca!2ses" 
        width="100%" 
        height="500px" 
        frameborder="0" 
        allowFullScreen
        ></iframe>

        <div className="location_tag">

        <div>Location</div>
 
        </div>

        </div>
    );
};

export default Location