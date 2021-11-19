import React, { useState } from 'react'
import Header from '../../components/Header'
import Gallery from 'react-photo-gallery'

import '../../styles/Gallery/Gallery.css'


const items = [
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 4,
        height: 2,
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 5, 
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2, 
        height: 1
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3,
        height: 5
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3, 
        height: 2
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3, 
        height: 1
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3, 
        height: 4
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3,
        height: 2
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2,
        height: 4
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2,
        height: 2
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2, 
        height: 4
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2,
        height: 3
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 2, 
        height: 5
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 3, 
        height: 2
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        width: 1, 
        height: 4
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        height: 5, 
        width: 2
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        height: 4,
        width: 2
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        height: 2, 
        width: 3,
    },
    {
        src: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        height: 3, 
        width: 1
    }, 
    {
        src: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        height: 5,
        width: 2
    },
]

const GalleryComponent: React.FunctionComponent = () => {
    const [isModal, setIsModal] = useState<boolean>(false)

    return (
        <div>
            <Header isModal={isModal} setIsModal={setIsModal}/>
            <FirstPart />
            <SecondPart />
        </div>
    )
}

const FirstPart: React.FunctionComponent = () => {
    return (
        <div className="gallery_first_part"> 
            <div className="gallery_first_main">
                <div className="gallery_first_entry_list">
                    <Gallery photos={items}/>
                </div>
            </div>
        </div>
    )
}

const SecondPart: React.FunctionComponent = () => {
    return (
        <div className="gallery_second_part">
            <div className="gallery_second_title">
                <div className="pr">DOMO</div>
                <div className="yellow">ARIGATO</div>
            </div>
            <div className="gallery_btn">
                <button className="gallery_second_button">
                    View on OpenSea
                </button>
            </div>
        </div>
    )
}

export default GalleryComponent