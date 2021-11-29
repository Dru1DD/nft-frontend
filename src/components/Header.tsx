import React, { useState } from "react";
import "../styles/Header.css"
import navbarBack from '../assets/TopBarWithoutText.png'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useWindowSize } from '../hooks/useWindowSize'

interface HeaderProps {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FunctionComponent<HeaderProps> = ({isModal, setIsModal}) => {

  let history = useHistory()
  const [screenWidth] = useWindowSize()
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);
  const pageHandler: (num: number) => void = (num) => {
    switch(num) {
      case 0: 
        return history.push('/marketplace')
      case 1:
        return history.push('/gallery')
      case 2: 
        return history.push('/mystuff')
    }
  }
 if ( screenWidth <= 1000) {
    return  (
      <>
        <Burger  
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
        />
        <Menu 
          isMenuOpen={isMenuOpen} 
          pageHandler={pageHandler} 
          setIsModal={setIsModal} 
          isModal={isModal} 
          screenWidth={screenWidth}
        /> 
      </>
    )
  } else {
    return (
    <nav className="navbar_container">
      <img className="navbar_back" src={navbarBack} alt="navbar_back" />
      <div className="navbar">
 <ul
        className="navbar__list"
      >
            <li className="navbar__item" onClick={() => pageHandler(0)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace'}}>MARKETPLACE</p>
            </li>
            <li className="navbar__item" onClick={() => pageHandler(1)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace'}}>GALLERY</p>
            </li>
            <li className="navbar__item" onClick={() => pageHandler(2)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace'}} >MY STUFF</p>
            </li>
            <li className="navbar__item" >
              <p 
                className="navbar_btn"
                onClick={() => setIsModal(!isModal)}
                style={{ fontFamily: 'Unispace'}}
              >CONNECT WALLET</p>
            </li>
      </ul>
      </div>
    </nav>
    );
  };  
};

interface IStyledBurger {
  open: boolean
}
const StyledBurger = styled.button<IStyledBurger>`
  position: ${({ open }) => open ? 'sticky' : 'absolute'};
  top: 5%;
  margin-bottom: ${({ open }) => open ? '-5%': "0px"};
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`


interface IBurger {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger:React.FunctionComponent<IBurger> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <StyledBurger  open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div />
        <div />
        <div />
    </StyledBurger>
  )
}


interface IStyledMenu {
  isMenuOpen: boolean,
  screenWidth: number
}

const StyledMenu = styled.nav<IStyledMenu>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:  #EFFFFA;
  transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: ${({screenWidth}) => screenWidth <= 547 ? "100%": "50%"};
  text-align: left;
  overflow-x: hiden;
  margin-bottom: -100vh;
  padding: 2rem;
  z-index: 10;
  position: ${({ isMenuOpen }) => isMenuOpen ? 'sticky' : 'absolute'};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }
`


interface IMenu {
  isMenuOpen: boolean,
  pageHandler: (page:number) => void,
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
  isModal: boolean,
  screenWidth: number
}

const Menu:React.FunctionComponent<IMenu> = ({ isMenuOpen, pageHandler, setIsModal, isModal, screenWidth }) => {
  return (
    <StyledMenu isMenuOpen={isMenuOpen} screenWidth={screenWidth}>
      <a href="/" onClick={() => pageHandler(0)}>
        Marketplace
      </a>
      <a href="/" onClick={() => pageHandler(1)}>
        Gallery
      </a>
      <a href="/" onClick={() => pageHandler(2)}>
        My Stuff
      </a>
      <a href="/" onClick={() => setIsModal(!isModal)}>
        Connect Wallet
      </a>
        {/* <span
          className="styled-menu-link"
          onClick={() => pageHandler(0)}
        >
         Marketplace 
        </span>
        <span
          className="styled-menu-link"
          onClick={() => pageHandler(1)}  
        >
          Gallery
        </span>
        <span
          className="styled-menu-link"
          onClick={() => pageHandler(2)}
        > My Stuff</span> */}
      </StyledMenu>
  )
}
export default Header;