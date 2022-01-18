import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';
import "../css/nav.css"

const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/pokemon'>
        <img className='img-logo' src={require('../images/pokemon.png')} alt='logo' style={{height: '15vh'}}/>
      </NavLink>
      <NavMenu>
        <NavLink to='/pokemon' >
          <div className='div-icon'>
            <img src={require('../images/compass.png')} alt='logo' style={{height: '6.5vh'}}/>
            <h5>Search</h5>
          </div>
        </NavLink>
        <NavLink to='/mylist' >
          <div className='div-icon'>
            <img src={require('../images/backpack.png')} alt='logo' style={{height: '6.5vh'}}/>
            <h5>My Pokemon</h5>
          </div>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;