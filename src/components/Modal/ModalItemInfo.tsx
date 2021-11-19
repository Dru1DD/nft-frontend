import React from 'react'
import { BsXLg } from 'react-icons/bs'
import { BiWalletAlt } from 'react-icons/bi'
import "../../styles/Marketplace/ModalItemInfo.css"
interface ModalItemInfoProps {
    url: string,
    title: string,
    accessory?: string,
    eye?: string,
    skin?: string,
    mouth?: string,
    head?: string,
    nose?: string,
    price: number,
    backgroundColor: string,
    isModal: boolean
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalItemInfo: React.FunctionComponent<ModalItemInfoProps> = ({
    url,
    title,
    eye,
    accessory,
    skin,
    mouth,
    head,
    nose,
    price,
    backgroundColor,
    isModal, 
    setIsModal,
    isOpen,
    setIsOpen
}) => {
    return (
        <div className="modal-item-info">
            <div className="modal-item-first-part">
                <img className="modal-item-img" src={url} alt="modal-item-info" />
            </div>
            <div className="modal-item-second-part">
                <h3 className="modal-item-title">{title}</h3>
                <div className="modal-item-owned">
                    <span>Owned by FSFSF...sff(UserID)</span>
                </div>
                <div className="modal-item-attributes">
                    {eye ? <span className="modal-item-attribute">{eye}</span> : null}
                    {accessory ? <span className="modal-item-attribute">{accessory}</span> : null}
                    {skin ? <span className="modal-item-attribute">{skin}</span> : null}
                    {mouth ? <span className="modal-item-attribute">{mouth}</span> : null}
                    {head ? <span className="modal-item-attribute">{head}</span> : null}
                    {nose ? <span className="modal-item-attribute">{nose}</span> : null}
                </div>
                <h3 className="modal-item-background">Background: {backgroundColor}</h3>
                <div className="modal-item-price">
                    <span>Price: {price}</span>
                </div>
                <div className="modal-item-btn">
                    <button className="modal-item-close" onClick={() => setIsModal(!isModal)} ><BsXLg className="modal-container-icon"/> Close </button>
                    <button className="modal-item-chart" onClick={() => setIsOpen(!isOpen)} > Show Price Line </button>
                    <button className="modal-item-buy" onClick={() => console.log('Buy')}><BiWalletAlt size={20} className="modal-container-icon"/> Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ModalItemInfo