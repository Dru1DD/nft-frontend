import React from "react";
import "../styles/Header.css"
import Logo from '../assets/LOGO.png'

interface HeaderProps {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FunctionComponent<HeaderProps> = ({isModal, setIsModal}) => {

  return (
    <nav className="navbar">
        <div className="logo">
            <img className="navbar_logo mb2" src={Logo} alt="logo"/>
        </div>
      
      <ul
        className="navbar__list"
      >
            <li className="navbar__item" >
              <p className="navbar__link">Marketplace</p>
            </li>
            <li className="navbar__item" >
              <p className="navbar__link">Gallery</p>
            </li>
            <li className="navbar__item" >
              <p className="navbar__link">My stuff</p>
            </li>
      </ul>
      <button 
        onClick={() => setIsModal(!isModal)}
        className="walletButton"
      >Connect Wallet</button>
    </nav>
  );
};

export default Header;
