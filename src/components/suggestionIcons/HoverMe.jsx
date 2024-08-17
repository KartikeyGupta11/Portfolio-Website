import React, { useState, useEffect } from 'react';
import './HoverMe.css';
import HoverMeIcon from '../../icons/HoverMe.gif';

const HoverMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const skillsSection = document.getElementById('skills');
        const skillsSectionTop = skillsSection.offsetTop;
        const skillsSectionBottom = skillsSectionTop + skillsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= skillsSectionTop && window.scrollY < skillsSectionBottom) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div 
                className="suggestion-icon" 
                onClick={() => alert('Suggestions will go here!')}
            >
                <img src={HoverMeIcon} alt='Hover Me'></img>
                <span> Hover Skills</span>
            </div>
        )
    );
};

export default HoverMe;
