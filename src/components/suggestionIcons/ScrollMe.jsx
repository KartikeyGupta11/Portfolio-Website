import React, { useState, useEffect } from 'react';
import './ScrollMe.css';
import ScrollMeIcon from '../../icons/ScrollMe.gif';

const ScrollMe = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="suggestion-icon" 
            style={{ opacity: scrollY > 100 ? 0 : 1 }}
        >
            <img src={ScrollMeIcon} alt='Scroll Me'></img>
        </div>
    );
};

export default ScrollMe;
