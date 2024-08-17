import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const [typedText, setTypedText] = useState('');
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [result, setResult] = React.useState("");

    const textArray = ["..."];
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 1000;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9f7aa1a3-7b11-40c9-adbd-d1ed4d42a3f7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Message Sent Successfully...")
            toast.success("Message Sent Successfully...");
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>

        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's Talk{typedText}</h1>
                <p>You can feel free to contact me...</p>
                <div className='contact-details'>
                    <div className='detail'>
                        <img src={mail_icon} alt=''></img>
                        <p>g.kartikey.1104@gmail.com</p>
                    </div>

                    <div className='detail'>
                        <img src={call_icon} alt=''></img>
                        <p>+91 9336275101</p>
                    </div>

                    <div className='detail'>
                        <img src={location_icon} alt=''></img>
                        <p>Uttar Pradesh, India</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name...</label>
                <input type='text' placeholder='Enter Your Name...' name='name'></input>

                <label htmlFor=''>Your Email...</label>
                <input type='text' placeholder='Enter Your Email...' name='email'></input>

                <label htmlFor=''>Comment here...</label>
                <textarea name='message' rows='8' placeholder='Enter your message...'></textarea>

                <button type='submit' className='contact-submit'>Send</button>
            </form>
        </div>
    </div>
  )
}
export default Contact