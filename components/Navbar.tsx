import React from 'react'
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
/*   {
      text: 'Contact',
      href: '/contact'
  }, */
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ styles.menu }>
      {
        menuItems.map( m => 
          <ActiveLink 
            key={ m.text} 
            text={ m.text } 
            href={ m.href } 
          />
        )
      }
    </nav>
  )
}