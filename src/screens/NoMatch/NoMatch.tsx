import React from 'react'
import errorBack from '../../assets/warning.png'
const NoMatch: React.FC = () => {
    return (
        <div style={{backgroundColor: "#555", width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img style={{ width: '20%', height: "40%"}} src={errorBack} alt="error_img" />
            <h1 style={{color: 'white'}}>Error 401. Page not found</h1>
        </div>
    )
}

export default NoMatch