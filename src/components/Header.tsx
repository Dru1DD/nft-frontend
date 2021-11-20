import React from "react";
import "../styles/Header.css"
import navbarBack from '../assets/TopBarWithoutText.png'

interface HeaderProps {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FunctionComponent<HeaderProps> = ({isModal, setIsModal}) => {

  return (
    <nav className="navbar_container">
      <img className="navbar_back" src={navbarBack} alt="navbar_back" />
      <div className="navbar">
 <ul
        className="navbar__list"
      >
            <li className="navbar__item" >
              <p className="navbar__link">MARKETPLACE</p>
            </li>
            <li className="navbar__item" >
              <p className="navbar__link">GALLERY</p>
            </li>
            <li className="navbar__item" >
              <p className="navbar__link">MY STUFF</p>
            </li>
            <li className="navbar__item" >
              <p 
                className="navbar_btn"
                onClick={() => setIsModal(!isModal)}
              >CONNECT WALLET</p>
            </li>
      </ul>
      </div>
    </nav>
  );
};

export default Header;