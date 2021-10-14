import React from 'react'
import { useInView } from 'react-intersection-observer'
import "../../styles/HomePage/SecondPart.css"

interface SecondPartProps {
    title: string
}

const SecondPart: React.FunctionComponent<SecondPartProps> = ({ title }) => {

    return (
        <div>
            <>
                <FirstContent title={title} />
                <SecondContent />
                <div className="fourth__part">
                    {/* <div className="fourth__img" /> */}
                    <div className="fourth__title">
                        <div className="pr">DOMO</div>
                        <div className="yellow">ARIGATO</div>
                    </div>
                    <div className="btn">
                        <button className="fourth_button">
                            View on OpenSea
                        </button>
                    </div>

                </div>
            </>
        </div>
    )
}

interface FirstContentProps {
    title: string
}
const FirstContent: React.FunctionComponent<FirstContentProps> = ({ title }) => {
    const { inView, ref } = useInView({
        threshold: 0.4
    })
    return (
        <div className="second_part">
            <div className="second_img" />
            <div className="second_main" ref={ref}>
                <div className="second_title">{title}</div>
                <p className={inView ? "second-text text-anim" : "second-text"}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more
                    obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature,
                    discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                    (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </div>
        </div>
    )
}

const SecondContent: React.FunctionComponent = () => {
    const { inView, ref } = useInView({
        threshold: 0.4
    })
    return (
        <div className="third__part">
            {/* <div className="third__img"/> */}
            <div className="third__container" ref={ref}>
                <div className="first_content">
                    <p className={inView ? "third-text-title anim-first-text" : "third-text-title"}>
                        What`s an NFT?</p>
                    <p className={inView ? "third-text anim-first-text" : "third-text"}>
                        NFT stands for "Non-fungible token", which
                        means that it`s a unique, digital item with blockchain-managed
                        ownership that users
                        can buy, own, and trade. Some NFT`s fundamental function is to
                        be digital art. But they can also
                        offer additional benefits like exclusive access to websites,
                        event tickets, game items, and
                        ownership records for physical objects. Think of it as a
                        unique piece of art that can
                        also work as a "members-only" card.
                    </p>
                </div>
            <div className="second_content" ref={ref}>
                <p className={inView ? "third-text-title anim-second-text" : "third-text-title"}>How do I NFT?</p>
                <p className={inView ? "third-text anim-second-text" : "third-text"}>
                    Download the metamask.io extension for the Chrome/Brave browser
                    or app on mobile. This will allow you to make purchases with Ethereum
                    and can be found in the extensions tab. If you are on mobile, you must
                    use the Metamask App Browser
                    You can purchase Ethereum through the Metamask
                    Wallet using Wyre or Send Ethereum from an exchange like Coinbase.
                    Click on Connect at the top of the page and connect your Metamask.
                    Once joined, you will be able to purchase the NFTs in the mint
                    section. You will be prompted to sign your transaction. FYI, there
                    will be a fee associated with every transaction related to gas
                    prices.
                    Once you have made your purchase, your Roboto NFTs will be viewable
                    in your wallet and on OpenSea.
                </p>
            </div>
            <div className="third_content" ref={ref}>
                <p className={inView ? "third-text-title anim-third-text" : "third-text-title"}>How do I NFT?</p>
                <p className={inView ? "third-text anim-third-text" : "third-text"}>
                    Download the metamask.io extension for the Chrome/Brave browser
                    or app on mobile. This will allow you to make purchases with Ethereum
                    and can be found in the extensions tab. If you are on mobile, you must
                    use the Metamask App Browser
                    You can purchase Ethereum through the Metamask
                    Wallet using Wyre or Send Ethereum from an exchange like Coinbase.
                    Click on Connect at the top of the page and connect your Metamask.
                    Once joined, you will be able to purchase the NFTs in the mint
                    section. You will be prompted to sign your transaction. FYI, there
                    will be a fee associated with every transaction related to gas
                    prices.
                    Once you have made your purchase, your Roboto NFTs will be viewable
                    in your wallet and on OpenSea.
                </p>
            </div>
        </div>
        </div>
    )
}

export default SecondPart