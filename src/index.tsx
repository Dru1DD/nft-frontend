import React from 'react'
import ReactDOM from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import RouterHandler from './RouterHandler'

function getLibrary(provider: any) {
    return new Web3(provider)
}

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <RouterHandler />
        </Web3ReactProvider>
    </React.StrictMode>,
    document.querySelector('#root')
)