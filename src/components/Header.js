import React, { useState } from 'react';
import NavList from './NavList';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          <div className='nav__toggle' onClick={() => setOpen(!open)}>
            <i className={open ? 'fas fa-bars open' : 'fas fa-bars'}></i>
            <i className={open ? 'fas fa-times open' : 'fas fa-times'}></i>
          </div>

          <a className='nav__logo'>
            <img src='favicon.svg' alt='logo' className='nav__logo__img' />
          </a>

          <NavList open={open} />

          <div className='nav__account'>
            <i className='fas fa-search' onClick={() => setOpen(!open)}></i>
            <span>Sign In</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
