import React from 'react'
import SecondPart from '../components/HomePage/SecondPart'
import "../styles/HomePage/HomePage.css"
import backgroundColor from '../assets/background.jpg'

const HomePage: React.FunctionComponent = () => {
    return (
        <div className="homePage">
            <div className="first_part">
            <img className="first__img" src={backgroundColor} alt="first_img"/>
            {/* <div className="first_title">
                <div className="first_red">
                    N
                </div>
                <div className="first_blue">
                    am
                </div>
                <div className="first_yellow">
                    e
                </div>
            </div>
            <button className="first_button">
                Mint
            </button>
            <div className="first_subtitle">0 to 10.000 left</div> */}
            </div>
            <SecondPart 
                title="Story"
            />
        </div>
    )
}

export default HomePage