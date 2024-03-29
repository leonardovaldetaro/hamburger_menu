import Styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/simbol_lv_branco.svg';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header () {

const rotaLogo = [{
  label: <Logo className={Styles.header__img} />,
  to: '/'
}];

const headerName = [{
  label: <span className={Styles.header__name}>Leonardo Valdetaro</span>,
  to: '/'
}];

const rotasNav = [{
  label: 'Projects',
  to: '/'
},{
  label: 'About',
  to: '/about'
},{
  label: 'Contact',
  to: '/contact'
}]

const [isActive, setActive] = useState(false);

const [isMenuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
};

  return (
    <header className={Styles.header}>

      <div className={Styles.header__logo}>
          {rotaLogo.map((rota, index) => (
              <figure key={index}>
                <Link to={rota.to}>{rota.label}</Link>
              </figure>
          ))}
      </div>
      
      <div className={Styles.header__title}>
        {headerName.map((rota, index) => (
          <div key={index}>
            <Link to={rota.to}>{rota.label}</Link>
          </div>
        ))}
      </div>

      <div className={Styles.header__menuContainer}>

      <p className={classNames({
          [Styles.header__menu__nameMenu]: !false, 
          [Styles.hiden]: isMenuOpen
        })}>Menu</p>

      <p className={classNames({
          [Styles.header__menu__nameClose]: !false, 
          [Styles.show]: isMenuOpen
        })}>Close</p>

      <div className={Styles.header__menu} onClick={toggleMenu}> 
        <div className={classNames({
          [Styles.header__menu__bar]: !false, 
          [Styles.header__menu__bar__barTop]: isMenuOpen
        })}>
        </div>

        <div className={classNames({
          [Styles.header__menu__bar]: !false, 
          [Styles.header__menu__bar__barMidle]: isMenuOpen
        })}></div>

        <div className={classNames({
          [Styles.header__menu__bar]: !false, 
          [Styles.header__menu__bar__barBotton]: isMenuOpen
        })}></div>
      </div>

      </div>

      <nav 
        className={classNames({
          [Styles.header__nav]: !false, 
          [Styles['header__nav--open']]: isMenuOpen
        })}
      >
        <h5 className={Styles.header__nav__title}>Menu</h5>
            
        <ul className={Styles.header__nav__list}>
          {rotasNav.map((rota, index) =>(
            <li className={Styles.header__nav__list__item} 
            key={index}>
              <NavLink 
              className={classNames({
                [Styles.header__nav__list__item__link]: !false, 
                [Styles['header__nav__list__item__link--ativo']]: isMenuOpen,
                [Styles.active]: isActive
              })}
                onClick={toggleMenu}
                to={rota.to}
              >
                {rota.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className={Styles.copyright}>LeonardoValdetaro © Copyright 2024</span>
      </nav>

    </header>
  );
}