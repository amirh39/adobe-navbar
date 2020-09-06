import React from 'react';
import MenuItems from './MenuItems';
import { Button } from '@adobe/react-spectrum';

export default () => [
  MenuItems.map(({ type, title, className }, index) => {
    if (type === 'link') {
      return (
        <li key={index} className={className}>
          {title}
        </li>
      );
    } else
      return (
        <Button key={index} variant='cta'>
          {title}
        </Button>
      );
  }),
];
