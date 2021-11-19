import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Logo from '../../assets/LOGO.png'
import { Dropdown } from 'semantic-ui-react'
import "../../styles/Marketplace/Marketplace.css"
import ListItem from './ListItem'
import 'semantic-ui-css/semantic.min.css'

const items = [
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #1",
        subtitle: "Subtitle for item #1",
        price: 4.5,
        backgroundColor: 'purple',
        eye: "Red",
        head: "Chef Hat",
        accessory: "Camera",
        skin: "Purple",
        top: "Red Puffer"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #2",
        subtitle: "Subtitle for item #2",
        price: 3.9,
        backgroundColor: "Orange",
        eye: "Orange",
        mouth: "Bone",
        skin: "Albino",
        top: "Cargo Vest"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #3",
        subtitle: "Subtitle for item #3",
        price: 4.3,
        backgroundColor: "Purple",
        accessory: "Camera",
        eye: "Red",
        head: "Chef Hat",
        skin: "Purple",
        top: "Red Puffer"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #4",
        subtitle: "Subtitle for item #4",
        price: 5.6,
        backgroundColor: "Orange",
        eye: "Blue",
        head: "Fur Bucket Hat",
        mouth: "Sneakers",
        skin: "Purple"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #5",
        subtitle: "Subtitle for item #5",
        price: 3.5,
        backgroundColor: "green",
        eye: "Opera Mask",
        skin: "Black",
        top: "Red Tracksuit"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #6",
        subtitle: "Subtitle for item #6",
        price: 3.8,
        backgroundColor: "Trippy",
        accessory: "Bone Necklace",
        eye: "Ski Goggles",
        skin: 'Purple',
        top: "Red Tracksuit"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #7",
        subtitle: "Subtitle for item #7",
        price: 5.2,
        backgroundColor: "Brown",
        eye: "Orange",
        head: "Chef Hat",
        mouth: "Pipe",
        nose: "Bull Ring",
        skin: "Purple",
        top: "Green T-Shirt"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #8",
        subtitle: "Subtitle for item #8",
        price: 3.7,
        backgroundColor: "Brown",
        accessory: "Camera",
        eye: "Orange",
        mouth: "Bone",
        nose: "Bull Ring",
        skin: "Purple",
        top: "Green Tracksuit"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #9",
        subtitle: "Subtitle for item #9",
        price: 5.6,
        backgroundColor: "Matrix",
        eye: "Orange",
        skin: "Black",
        top: "Red Puffer"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #10",
        subtitle: "Subtitle for item #10",
        price: 5.3,
        backgroundColor: "Grey",
        eye: "Aviators",
        head: "Fur Bucket Hat",
        mouth: "Stitched",
        skin: "Blue",
        top: "Purple Shirt"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #11",
        subtitle: "Subtitle for item #11",
        price: 4.7,
        backgroundColor: "Yellow",
        eye: "Vipers",
        nose: "Stud",
        skin: "Blue",
        top: "Purple Shirt"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #12",
        subtitle: "Subtitle for item #12",
        price: 5.2,
        backgroundColor: "Orange",
        eye: "Eye Patch",
        head: "Fur Bucket Hat",
        mouth: "Mouse",
        skin: "Albino",
        top: "Tank Top"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #13",
        subtitle: "Subtitle for item #13",
        price: 4.1,
        backgroundColor: "Blue",
        accessory: "Diamond Chain",
        eye: "Orange",
        skin: "Zebra",
        top: 'Green Puffer'
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #14",
        subtitle: "Subtitle for item #14",
        price: 5.0,
        backgroundColor: "Green",
        accessory: "Camera",
        eye: "White",
        head: "Sombrero",
        skin: "Purple"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #14",
        subtitle: "Subtitle for item #14",
        price: 4.9,
        backgroundColor: "Sand",
        accessory: "Binoculars",
        eye: "Green",
        head: "Cowboy Hat",
        skin: "Purple"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #15",
        subtitle: "Subtitle for item #15",
        price: 4.6,
        backgroundColor: "Brown",
        eye: "Orange",
        head: "Pirate Hat",
        mouth: "Bone",
        skin: "Lizard",
        top: "Blue Puffer"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #16",
        subtitle: "Subtitle for item #16",
        price: 3.7,
        backgroundColor: "Brown",
        eye: "Red",
        head: "Fur Bucket Hat",
        mouth: "Cigar",
        skin: "Blue",
        top: "Yellow Tracksuit"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #17",
        subtitle: "Subtitle for item #17",
        price: 3.6,
        backgroundColor: "Grey",
        accessory: "Camera",
        eye: "White",
        head: "Sombrero",
        mouth: "Flower",
        skin: "Blue",
        top: "Cream Puffer"
    },
    {
        url: "https://images.unsplash.com/photo-1620912909703-6d16f0bf0412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #18",
        subtitle: "Subtitle for item #18",
        price: 4.5,
        backgroundColor: "Matrix",
        eye: "Eye Patch",
        head: "Blue Fitted Cap",
        mouth: "Sneakers",
        nose: "Bull Ring",
        skin: "Purple"
    }, 
    {
        url: "https://images.unsplash.com/photo-1620912189886-93c84c54f7bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
        title: "item #19",
        subtitle: "Subtitle for item #19",
        price: 3.4,
        backgroundColor: "Matrix",
        eye: "Orange",
        head: "Chef Hat",
        mouth: "Knife",
        skin: "Purple",
        top: "Yellow T-Shirt"
    },
]

interface options {
    text: string
    value: string
}

interface Iitems {
    url: string
    title: string
    subtitle: string
    price: number
    backgroundColor: string
    eye?: string
    head?: string
    mouth?: string
    skin?: string
    top?: string
    accessory?: string
    nose?: string
}
const options: options[] = [
    { text: 'Price: Low to High', value: 'price: Low to High' },
    { text: 'Price: High to Low', value: 'price: Hight to Low' },
    { text: "Name: A to Z", value: "name: A to Z"},
    { text: "Name: Z to A", value: "name: Z to A"}
  ];
const Marketplace: React.FunctionComponent = () => {
    let history = useHistory()
    const [filter, setFilter] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>()

    const renderFilterList = React.useMemo(() => {
        let secArray: Iitems[] = JSON.parse(JSON.stringify(items))
        if(filter === "price: low to high") {
            secArray.sort((a, b) => a.price - b.price)
        } else if (filter === "price: high to low") {
            secArray.sort((a, b) => b.price - a.price)
        } else if (filter === "name: a to z") {
            secArray.sort()
        } else if (filter === "name: z to a") {
            secArray.sort()
            items.reverse()
        } else if (filter === "name") {
            if(searchTerm === "") {
                secArray.sort((a, b) => a.price - b.price)
                return secArray.map((item, index) => {
                    return <ListItem 
                             url={item.url} 
                             title={item.title}
                             subtitle={item.subtitle} 
                             accessory={item.accessory ? item.accessory : undefined}
                             price={item.price}
                             backgroundColor={item.backgroundColor}
                             eye={item.eye ? item.eye : undefined}
                             skin={item.skin ? item.skin : undefined}
                             mouth={item.mouth ? item.mouth : undefined}
                             head={item.head ? item.head : undefined}
                             nose={item.nose ? item.nose : undefined}
                             key={index}
                         />
                    })
            } 

            return secArray.map(item => {
                if(item.title === searchTerm) {
                    return <ListItem 
                     url={item.url} 
                     title={item.title}
                     subtitle={item.subtitle} 
                     accessory={item.accessory ? item.accessory : undefined}
                     price={item.price}
                     backgroundColor={item.backgroundColor}
                     eye={item.eye ? item.eye : undefined}
                     skin={item.skin ? item.skin : undefined}
                     mouth={item.mouth ? item.mouth : undefined}
                     head={item.head ? item.head : undefined}
                     nose={item.nose ? item.nose : undefined}
                 />
                }
            })
            
        }
        return secArray.map((item, index) => {
            return <ListItem 
                     url={item.url} 
                     title={item.title}
                     subtitle={item.subtitle} 
                     accessory={item.accessory ? item.accessory : undefined}
                     price={item.price}
                     backgroundColor={item.backgroundColor}
                     eye={item.eye ? item.eye : undefined}
                     skin={item.skin ? item.skin : undefined}
                     mouth={item.mouth ? item.mouth : undefined}
                     head={item.head ? item.head : undefined}
                     nose={item.nose ? item.nose : undefined}
                     key={index}
                 />
            })
    }, [filter])

    const changeHandler = (e: any) => setFilter(e.target.textContent.toLowerCase())

    const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value)
        console.log(searchTerm)
    }
    
    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFilter('name')
    }

    const formButtonHandler = (e: any) => {
        e.preventDefault()
        setFilter('name')
    }
    return (
        <div className="marketplace">  
            <div className="header">
                <div className="header_first_part">
                    <div className="marketplace_header_logo" onClick={() => history.push('/')}>
                        <img src={Logo} alt="logo" width={80} height={50} />
                    </div>
                    <div className="header_list">
                        <div className="header_item">
                            <div className="header_link" onClick={() => history.push('/')}>Home</div>
                            </div>
                    </div>
                </div>
            </div>
                
            {/* <div className="banner_media">
                <div className="banner_media_main">
                    <h2 className="banner_media_main_title">Robotos Shop</h2>
                    <h4 className="banner_media_main_subtitle">Cotton-based clothing, about silicon-based botos, for your carbon-based body.</h4>
                    <button className="banner_media_main_button" onClick={() => history.push('/marketplace/catalog')}>Shop all</button>
                </div>
            </div> */}
            <div className={filter === "name" ? "main_collection_oneElem": "main_collection"}>
                <h1 className='main_collection_title'>Robotos</h1>
                <div className="main_collection_filters">
                    <div className="main_collection_dropdown">
                        <Dropdown
                        options={options}
                        onChange={(e) => changeHandler(e)}
                        selection
                        placeholder="Select an filter options"
                    />
                    
                    </div>
                    <div className="main_collection_search">
                        <form
                            onSubmit={formHandler}
                        >
                          <input
                            type="text"
                            className="main_collection_input"
                            value={searchTerm}
                            onChange={searchHandler}
                            />  
                            <button 
                                className="main_collection_submit_button"
                                onClick={formButtonHandler}
                            >
                                Search
                            </button>
                            
                        </form>
                        
                    </div>
                </div>
                <div className={"main_collection_list"}>
                   {
                        renderFilterList
                   }
                </div>
            </div>
            <div className="footer">
                <h4 className="footer_title">© {new Date().getFullYear()}, Robotos Shop</h4>
            </div>
        </div>
    )
}

export default Marketplace