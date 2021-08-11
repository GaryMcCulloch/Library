// Font Awesome used for menu icons 
//<script src="https://kit.fontawesome.com/b616ef5313.js" crossorigin="anonymous"></script> *** to be placed in html head

// styled components used - must install to work *** npm install --save styled-components

// map used to display nav links


import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import styled from 'styled-components';


function Navbar() {
    const [navToggle, setNavToggle] = useState(false);

    return (
        
        <NavbarStyled>
            <div className="navbar-items">
                <h1 className="navbar-logo">Navbar</h1>
                <div className="menu-icon" onClick={() => setNavToggle(!navToggle)}>
                    <i className={navToggle ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={navToggle ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <button>Shop Now</button>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    .navbar-items{
    background: linear-gradient(90deg, rgb(110 ,94, 254) 0%, rgba(73, 63,252,1) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  .navbar-logo{
    color: white;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
  }
  .nav-menu{
      display: grid;
      grid-template-columns: repeat(5, auto);
      grid-gap: 10px;
      list-style: none;
      text-align: center;
      width: 70vw;
      justify-content: end;
      margin-right: 2rem;
  }
  .nav-links{
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
  }
  .nav-links:hover{
      background-color: #6d76f7;
      border-radius: 4px;
      transition: all 0.2 ease-out;
  }

  .fa-bars {
      color: #fff;
  }
  .nav-links-mobile{
    display: none;
  }
  .menu-icon{
      display: none;
  }

  button{
      padding: 8px 20px;
      border-radius: 4px;
      outline: none;
      border: none;
      cursor: pointer;
      background: rgb(163,225,238);
      color: #fff;
      margin: 0 20px;
  }
  button:hover{
      padding: 8px 20px;
      transition: all 0.3s ease-out;
      background: #fff;
      color: #6568F4;
      transition: 250ms;
  }

  @media screen and (max-width: 790px) {
      .navbar-items {
          position: relative;
      }
      .nav-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 500px;
          position: absolute;
          top: 80px;
          left: -100%;
          opacity: 1;
          transition: all 0.5s ease;
          margin: 0;
          padding: 0;
          justify-content: space-evenly;
      }
      .nav-menu.active {
          background: #6668f4;
          left: 0;
          opacity: 1;
          transition: all 0.5s ease;
          z-index: 1;
          justify-content: space-evenly;
          
      }
      
      .nav-links {
          text-align: center;
          width: 100%;
          display: table;
          
      }
      .nav-links:hover {
          background: #7577fa;
          border-radius: 4px;
          
      }
      .navbar-logo {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(25%, 60%);
      }
      .menu-icon {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, 60%);
          font-size: 1.8rem;
          cursor: pointer;
      }
      .fa-times {
          color: #fff;
          font-size: 2rem;
      }
      .nav-links-mobile {
          display: block;
          text-align: center;
          padding: 1.5rem;
          margin: 2rem auto;
          border-radius: 4px;
          width: 80%;
          background: #3acbf7;
          text-decoration: none;
          color: #fff;
          font-size: 1.5rem;
      }
      .nav-links-mobile:hover {
          background: #fff;
          color: #6568F4;
          transition: 250ms;
      }
      button {
          display: none;
      }
  }
`;

export default Navbar
