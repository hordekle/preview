import React from 'react';
import { FiMenu, FiX} from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ navBarLinks }) => {
  return (
    <nav className='navbar'>
        <span className='navbar_logo'>Bahu</span>
        <ul className='navbar_list'>
            {navBarLinks.map((item) => {
                return (
                <li className='navbar_item' key={item.title}>
                    <a className='navbar_link' href={item.link}>
                        {item.title}
                    </a>
                </li>
                );
            })}
        </ul>
    </nav>
  )
}

export default Navbar