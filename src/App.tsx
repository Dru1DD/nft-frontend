import React, { useState } from 'react'
import HomePage from './screens/HomePage'
import Header from './components/Header'
import Modal from 'react-modal'
import "./styles/App.css"
import ModalCustom from './components/Modal/ModalCustom'

const App: React.FunctionComponent = () => {
    const [isModal, setIsModal] = useState<boolean>(false)

  
    return (
        <div className="App">
            <Header isModal={isModal} setIsModal={setIsModal}/>

            <Modal
                isOpen={isModal}
                className="modal"
                ariaHideApp={false}
                onRequestClose={() => setIsModal(!isModal)}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <ModalCustom isModal={isModal} setIsModal={setIsModal} />
            </Modal>
            <HomePage />
        </div>
    )
}

export default App