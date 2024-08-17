import './Footer.css';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <hr></hr>

        <div className="footer">
            <p className="footer-left">
                Developed by Kartikey Gupta
            </p>

            <div className="footer-right">
                <a href='https://www.instagram.com/kartikey_gupta1822/' target='_blank'>
                  <GrInstagram className='instagram'/>
                </a>
                <a href='https://www.linkedin.com/in/kartikey-gupta-087b99236/' target='_blank'>
                  <FaLinkedin className='linkedIn'/>
                </a>
                <a href='https://github.com/KartikeyGupta11' target='_blank'>
                  <FaGithub className='github'/>
                </a>
                <a href='' target='_blank'>
                  <FaSquareTwitter className='twitter'/>
                </a>
                <a href='' target='_blank'>
                  <FaFacebook className='facebook'/>
                </a>
            </div>
        </div>
    </div>
  )
}
export default Footer