import { useRef, useState } from 'react';
import './NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const NavBar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <div className='nav-connect'>
          <a href='https://www.linkedin.com/in/kartikey-gupta-087b99236/' target='_blank'>Connect With Me</a>
        </div>

        <img src={menu_open} onClick={openMenu} alt='' className='menu-open'></img>
        
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} onTap alt='' className='menu-close'></img>
            <li>
              <AnchorLink className='anchor-link' href='#home'>
                <p onClick={() => setMenu("home")}>Home</p>
              </AnchorLink>
              {menu === 'home' ? <div className='selected'></div>: <></>}
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#about'>
                <p onClick={() => setMenu("about")}>About Me</p>
              </AnchorLink>
              {menu === 'about' ?<div className='selected'></div>: <></>}
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#projects'>
                <p onClick={() => setMenu("projects")}>Projects</p>
              </AnchorLink>
              {menu === 'projects' ? <div className='selected'></div> : <></>}
            </li>
            <li>
              <a className='anchor-link' offset={50} href='https://drive.google.com/file/d/1pCOYricFbWt_W7Q0DhOFqNeSToTAwiQK/view?usp=sharing' target='_blank'>
                <p onClick={() => setMenu("resume")}>Resume</p>
              </a>
              {menu === 'resume' ? <div className='selected'></div> : <></>}
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p onClick={() => setMenu("contact")}>Contact Me</p>
              </AnchorLink>
              {menu === 'contact' ? <div className='selected'></div> : <></>}
            </li>
        </ul>
    </div>
  )
}
export default NavBar