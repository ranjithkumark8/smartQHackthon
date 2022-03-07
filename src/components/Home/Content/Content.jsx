import React from "react";
import "./Content.css"
export const Content = ({ menuItem, data }) => {
    const [menuItems, setMenuItems] = React.useState([])
    React.useEffect(() => {
        setMenuItems(data.menu.filter((item) => item.category === menuItem))
    }, [data, menuItem])
    console.log(menuItem, data)
    if (data.extras) {
        return (
            <div className="contentContainer">
                <div className="bannerImage" style={{ backgroundImage: `url(${data.extras.categories[menuItem].bannerImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <h1>{menuItem}</h1>
                    <p>When you have every favourite dishes in a plate</p>
                    {/* <img src={data?.extras.categories[menuItem].bannerImage} alt={menuItem} /> */}
                </div>
                <div className="menuContent">
                    {menuItems?.map((item) => (
                        <>
                            <div className="menuContentContentContainer" >
                                <div className="menuContentContainerImg">
                                    <img src={item.imageurl} alt={item.foodid} />
                                </div>
                                <div className="menuContentContainerDes">
                                    <h3>{item.foodname}</h3>
                                    <p>{item.fooddescription}</p>
                                    <button>Addons</button>
                                </div>
                                <div className="menuContentContainerPrice">
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            <div className="menuContentDetails">
                                <div className="menuContentDetailsQty">
                                    <p>Quality</p>
                                    <input type="text" placeholder="Qty" />
                                </div>
                                <div className="menuContentDetailssession">
                                    <p>Session</p>
                                    <select value="">
                                        <option value=""></option>
                                        {item.sessionlist.map((option, index) => (
                                            <option value={index}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <p>Sub Total</p>
                                    <input type="number" />
                                </div>
                            </div>
                            <div className="menuContentCart">
                                <div className="menuContentCartNotes">
                                    <p>Note to the kitchen</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div >
        )
    } else {
        return null
    }
}