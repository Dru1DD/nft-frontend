import React from 'react'
import { Line } from "react-chartjs-2";
import { BsXLg } from 'react-icons/bs'
import '../../styles/Marketplace/ModalPriceInfo.css'

interface IModalPriceProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPriceInfo: React.FunctionComponent<IModalPriceProps> = ({
    isOpen, 
    setIsOpen 
    }) => {
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "First dataset",
                data: [3, 3.5, 2.7, 3.4, 7.2, 6.5],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
              },
            ]
          };
    return <div className="modal-item-chart-info">
        <div className="modal-item-chart-exit">
            <BsXLg className="md-item-chart-icon" size={24} color='white' onClick={() => setIsOpen(!isOpen)}/>
        </div>
        
        <div className="modal-item-chart-line">
             <Line data={data} /> 
        </div>
        
        </div>
}


export default ModalPriceInfo
