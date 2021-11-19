import React, { useState } from 'react'
import Modal from 'react-modal'
import ModalItemInfo from '../../components/Modal/ModalItemInfo'
import ModalPriceInfo from '../../components/Modal/ModalPriceInfo'
interface ListItemProps {
    url: string,
    title: string,
    subtitle: string,
    price: number,
    accessory?: string
    eye?: string,
    skin?: string,
    mouth?: string,
    head?: string,
    nose?: string,
    backgroundColor: string,
}
const ListItem: React.FunctionComponent<ListItemProps> = ({ 
    url, 
    title, 
    subtitle, 
    price,
    eye,
    skin,
    mouth,
    head,
    nose,
    accessory,
    backgroundColor,
}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
        <div className="main_collection_list_item" onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className="main_collection_list_item_firstPart">
                <img src={url} alt="backImage"/>
            </div>
            <div className="main_collection_list_item_secondPart">
                <h2 className="main_collection_list_item_title">{title}</h2>
                <h5 className="main_collection_list_item_subtitle">{subtitle}</h5>
                <div className="main_collection_list_item_price">{price}</div>
            </div>
        </div>
        <Modal
            isOpen={isModalOpen}
            className="modal"
            onRequestClose={() => setIsModalOpen(!isModalOpen)}
            preventScroll={true}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <ModalItemInfo
                url={url}
                price={price}
                title={title} 
                accessory={accessory ? accessory : undefined}
                eye={eye ? eye : undefined}
                skin={skin ? skin : undefined}
                mouth={mouth ? mouth : undefined}
                head={head ? head : undefined}
                nose={nose ? nose : undefined}
                backgroundColor={backgroundColor}
                isModal={isModalOpen}
                setIsModal={setIsModalOpen}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </Modal>
        <Modal
                isOpen={isOpen}
                className="modal"
                onRequestClose={() => setIsOpen(!isOpen)}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
            >
                <ModalPriceInfo isOpen={isOpen} setIsOpen={setIsOpen} />
            </Modal>
        </>
    )
}

export default ListItem