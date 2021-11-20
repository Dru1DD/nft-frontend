import React, { useEffect } from "react";
import "../styles/Header.css"
import navbarBack from '../assets/TopBarWithoutText.png'
import WebFont from "webfontloader";
import { useHistory } from 'react-router'
import unispace_bd from '../assets/fonts/unispace bd.ttf'

interface HeaderProps {
  isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FunctionComponent<HeaderProps> = ({isModal, setIsModal}) => {

  let history = useHistory()

  useEffect(() => {
    try {
      WebFont.load({
      custom: {
        families: ['Unispace-Bold'],
        urls: [`${unispace_bd}`]
      }
    })
    } catch(e) {
      console.log(e)
    }
    
  }, [])
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

  return (
    <nav className="navbar_container">
      <img className="navbar_back" src={navbarBack} alt="navbar_back" />
      <div className="navbar">
 <ul
        className="navbar__list"
      >
            <li className="navbar__item" onClick={() => pageHandler(0)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace-Bold'}}>MARKETPLACE</p>
            </li>
            <li className="navbar__item" onClick={() => pageHandler(1)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace-Bold'}}>GALLERY</p>
            </li>
            <li className="navbar__item" onClick={() => pageHandler(2)}>
              <p className="navbar__link" style={{ fontFamily: 'Unispace-Bold'}} >MY STUFF</p>
            </li>
            <li className="navbar__item" >
              <p 
                className="navbar_btn"
                onClick={() => setIsModal(!isModal)}
                style={{ fontFamily: 'Unispace-Bold'}}
              >CONNECT WALLET</p>
            </li>
      </ul>
      </div>
    </nav>
  );
};

export default Header;