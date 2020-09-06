import React, { Fragment } from 'react';
import Menu from './Menu';
import { Divider } from '@adobe/react-spectrum';

export default () => (
  <div className='nav__item__menu'>
    <div>
      <Menu />
    </div>
    <Divider className='divider--desktop' size='M' orientation='vertical' />
    <Divider className='divider--mobile' size='M' />
    <div>
      <Menu />
    </div>
  </div>
);
