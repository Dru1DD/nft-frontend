import React from 'react'
import "../../styles/HomePage/FirstPart.css"
import background from "../../assets/background.jpg"

interface FirstPartProps {
    link: string
}

const FirstPart: React.FunctionComponent<FirstPartProps> = ({ link }) => {
    return (
        <div className="first_part">
            <img className="first__img" src={background} alt="first_img"/>
            {/* <div className="first_title">
                <div className="first_red">
                    <span className="letter">N</span>N
                    </div>
                <div className="first_blue">
                    <span className="letter">a</span>
                    <span className="letter">m</span></div>
                <div className="first_yellow">
                    <span className="letter">e</span>
                    </div>
            </div>
            <button className="first_button">
                Mint
            </button>
            <div className="first_subtitle">0 to 10.000 left</div> */}
        </div>
    )
}

export default FirstPart