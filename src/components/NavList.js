import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default ({ open }) => {
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState('');

  const handleClick = (e) => {
    setClick(!click);
    setSelected(e.currentTarget.dataset.id);
  };

  return (
    <ul className={open ? 'nav__list open' : 'nav__list'}>
      <li className={open ? 'search open' : 'search'}>
        <input type='text' className='search__input' placeholder='Search' />
        <i className='fa fa-search search__icon'></i>
      </li>
      <li className='nav__item' onClick={(e) => handleClick(e)} data-id='0'>
        <div className='nav__item__link'>
          Creativity & Design
          <i
            className={
              selected === '0' && click
                ? 'fas fa-angle-down open'
                : 'fas fa-angle-down'
            }
          />
        </div>
        {selected === '0' && click && <Dropdown />}
      </li>
      <li className='nav__item' onClick={(e) => handleClick(e)} data-id='1'>
        <div className='nav__item__link'>
          Marketing & Commerce
          <i
            className={
              selected === '1' && click
                ? 'fas fa-angle-down open'
                : 'fas fa-angle-down'
            }
          />
        </div>
        {selected === '1' && click && <Dropdown />}
      </li>
      <li className='nav__item' onClick={(e) => handleClick(e)} data-id='2'>
        <div className='nav__item__link'>
          PDF & E-signatures
          <i
            className={
              selected === '2' && click
                ? 'fas fa-angle-down open'
                : 'fas fa-angle-down'
            }
          />
        </div>
        {selected === '2' && click && <Dropdown />}
      </li>
      <li className='nav__item' onClick={(e) => handleClick(e)} data-id='3'>
        <div className='nav__item__link'>
          Business Solutions
          <i
            className={
              selected === '3' && click
                ? 'fas fa-angle-down open'
                : 'fas fa-angle-down'
            }
          />
        </div>
        {selected === '3' && click && <Dropdown />}
      </li>
      <li className='nav__item' onClick={(e) => handleClick(e)} data-id='4'>
        <div className='nav__item__link'>
          Support
          <i
            className={
              selected === '4' && click
                ? 'fas fa-angle-down open'
                : 'fas fa-angle-down'
            }
          />
        </div>
        {selected === '4' && click && <Dropdown />}
      </li>
    </ul>
  );
};
