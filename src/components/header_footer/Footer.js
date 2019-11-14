import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer classname="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"></div>
                <div className="footer_copyright">
                    <span className="autor">Marc Barrera</span>
                    <span>2019</span>
                </div>
            </Fade>

        </footer>
    )
}

export default Footer
