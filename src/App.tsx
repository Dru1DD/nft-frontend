import React, { useState } from 'react'
import HomePage from './screens/HomePage'
import Header from './components/Header'
import Modal from 'react-modal'
import "./styles/App.css"
import { useWeb3React } from '@web3-react/core'
import { injected } from './components/connection/connection'
import { GoAlert } from "react-icons/go";

const App: React.FunctionComponent = () => {
    const [isModal, setIsModal] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const { active, library, connector, account, activate, deactivate } = useWeb3React()

    const connect: () => void = async () => {
        try {
            await activate(injected)
        } catch(e) {
            setIsError(!isError)
        }
    }

    const disconnect: () => void = async () => {
        try {
            await deactivate()
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="App">
            <Header isModal={isModal} setIsModal={setIsModal}/>

            <Modal
                isOpen={isModal}
                className="modal"
                ariaHideApp={false}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >

                <div className="modal-container">
                    <h1 className="modal-title">Connect Wallet</h1>
                    
                    <div className="modal-main">
                        {   isError ? (
                            <>
                            <p className="modal-main-text">
                                <GoAlert color="red" fontSize="2rem"/>
                            </p>
                            <p className="modal-main-text">
                                Something went wrong, try later!
                            </p>
                            </>
                        ) 
                            : active ? 
                                <p className="modal-main-text">{account}</p> : 
                                <p className="modal-main-text">Would u want to connect? Just click connect</p>
                            }
                    </div>

                    <div className="modal-btn">
                        <button
                            className="btn-connect"
                            onClick={connect}
                        >Connect</button>
                        <button
                            className="btn-disconnect"
                            onClick={disconnect}
                        >Disconnect</button>
                    </div>
                    
                </div>
            </Modal>
            <HomePage />
        </div>
    )
}

export default App