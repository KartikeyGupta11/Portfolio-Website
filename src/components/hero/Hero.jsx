import './Hero.css';
import profile_img from '../../images/my image.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

const Hero = () => {

    const [typedText, setTypedText] = useState('');
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const textArray = ["Hi! ", "I am Kartikey Gupta "];
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 1000;

    useEffect(() => {
        const handleTyping = () => {
            if(isDeleting){
                if(charIndex > 0){
                    setCharIndex(prev => prev - 1);
                    setTypedText(textArray[textArrayIndex].substring(0,charIndex-1));
                }
                else{
                    setIsDeleting(false);
                    setTextArrayIndex(prev => (prev + 1) % textArray.length);
                }
            }
            else{
                if(charIndex < textArray[textArrayIndex].length){
                    setCharIndex(prev => prev + 1);
                    setTypedText(textArray[textArrayIndex].substring(0,charIndex+1));
                }
                else{
                    setIsDeleting(true);
                }
            }   
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? erasingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    },[charIndex,isDeleting,textArrayIndex]) 

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='profile_img'></img>
        <h1>
            <span>{typedText}</span>
            <span>|</span>
        </h1>
        <p>I am final year B.Tech Student from ABES Engineering College by Computer Science Branch...</p>
        <div className='hero-action'>
            <div className='hero-connect'>
                <a href='https://www.linkedin.com/in/kartikey-gupta-087b99236/' target='_blank'>Connect</a>
            </div>
            <div className='hero-resume'>
                <a href='https://drive.google.com/file/d/1pCOYricFbWt_W7Q0DhOFqNeSToTAwiQK/view?usp=sharing' target='_blank'>Resume</a>
            </div>
        </div>
    </div>
  )
}
export default Hero