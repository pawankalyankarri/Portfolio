import './navbar.css'
import name from '../../assets/name.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';
import logo from '../../assets/menu.jpg'
import cross from '../../assets/cross.jpg'
import { useRef } from 'react';
const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right= '0';
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px'
    }
    return(
        <div className='navbar'>
              <p className='name'>PAWAN KALYAN</p>
            <img src={logo} alt="" onClick={openMenu} width={'45px'} className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={cross} onClick={closeMenu} alt="" width={'25px'} className='nav-mob-close' />
                <li><AnchorLink className='anchor-link'  href='#home' ><p onClick={() => setMenu('home')}>Home</p> </AnchorLink></li>
                <li><AnchorLink className='anchor-link'  href='#skills' ><p onClick={() => setMenu('skills')}>Skills</p> </AnchorLink></li>
                <li><AnchorLink className='anchor-link' href='#projects' ><p onClick={() => setMenu('projects')}>Projects</p> </AnchorLink></li>
                <li><AnchorLink className='anchor-link' href='#education' ><p onClick={() => setMenu('education')}>Education</p> </AnchorLink></li>
                <li><AnchorLink className='anchor-link' href='#contact' ><p onClick={() => setMenu('contact')}>Contact</p> </AnchorLink></li>
            </ul>
            {/* <div className="nav-connect">Connect with me</div> */}
        </div>
        
    )
}
export default Navbar;