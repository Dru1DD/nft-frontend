import React, { useState } from 'react'
import Header from '../../components/Header'
import Modal from 'react-modal'
import ModalCustom from '../../components/Modal/ModalCustom'

import '../../styles/MyStuff/MyStuff.css'

const MyStuff: React.FunctionComponent = () => {
    const [isModal, setIsModal] = useState<boolean>(false)
    return (
        <div>
            <Header isModal={isModal} setIsModal={setIsModal} />
            <Modal
                isOpen={isModal}
                className="modal"
                ariaHideApp={false}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <ModalCustom isModal={isModal} setIsModal={setIsModal} />
            </Modal>
            <FirstPart isModal={isModal} setIsModal={setIsModal} />
            <SecondPart />
        </div>
    )
}

interface FirstPartProps {
    isModal: boolean
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}
const FirstPart: React.FunctionComponent<FirstPartProps> = ({ isModal, setIsModal }) => {
    return (
        <div className="stuff_first_part">

            <div className="stuff_first_main">
                <h1 className="stuff_first_main_title">Robotos</h1>
                <h3 className="stuff_first_main_subtitle">Connect a wallet that has Robotos to view your stuff.</h3>
                <div className="stuff_first_main_items">
                    
                    <div className="stuff_first_main_items_title">Robotos</div>
                    {/* Это для того случае если нету роботов */}
                    <div className="stuff_first_entry_list">
                        <div className="stuff_first_main_error_img">
                            <img src="https://www.robotos.art/_next/image?url=%2Fimages%2Fplaceholder-roboto.png&w=640&q=75" alt="error_img"/>
                        </div>
                        <div className="stuff_first_main_btn">
                            <button className="stuff_first_main_button" onClick={() => setIsModal(!isModal)}>Connect a wallet</button>
                        </div>
                        <div className="stuff_first_entry_subtitle">
                        Seems like that wallet doesn't have any Robotos. Try a different wallet or get a Roboto on OpenSea
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SecondPart: React.FunctionComponent = () => {
    return (
        <div className="stuff_second_part">
            <div className="stuff_second_title">
                <div className="pr">DOMO</div>
                <div className="yellow">ARIGATO</div>
            </div>
            <div className="stuff_btn">
                <button className="stuff_second_button">
                    View on OpenSea
                </button>
            </div>
        </div>
    )
}

export default MyStuff