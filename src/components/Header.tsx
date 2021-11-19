import React from "react";
import "../styles/Header.css"

interface HeaderProps {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FunctionComponent<HeaderProps> = ({isModal, setIsModal}) => {

  return (
    <nav className="navbar">
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