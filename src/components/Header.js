import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { toggleMenu } from '../redux/mobileMenu/mobileMenuSlice';
import './Header.css';

const Header = () => {
  const menu = useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <NavLink to="/">
        <div className="fantastic-logo" />
        <h1 className="logo">Space Travelers&apos; Hub</h1>
      </NavLink>
      <nav className="navig">
        <button type="button" onClick={() => dispatch(toggleMenu(menu))}>
          {menu ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}
        </button>
        <ul className={`${menu ? 'menuNav showMenu mobile-navig' : 'navBar desktop-navig'}`}>
          <li className="nav-link">
            <NavLink
              to="/"
              onClick={() => dispatch(toggleMenu(true))}
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link missions">
            <NavLink
              to="missions"
              onClick={() => dispatch(toggleMenu(true))}
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="myProfile"
              onClick={() => dispatch(toggleMenu(true))}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
