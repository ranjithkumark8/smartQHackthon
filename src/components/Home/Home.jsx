import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../Redux/action"
import { Categories } from "./Categories/Categories"
import { Content } from "./Content/Content"
import "./Home.css"

export const Home = () => {
    const dispatch = useDispatch()
    const [categories, setCategories] = React.useState([])
    const [activeMenuItemIndex, setactiveMenuItemIndex] = React.useState(0)
    const [menuItem, setMenuItem] = React.useState("")
    const data = useSelector((state) => state.data)
    // console.log(menuItem)
    React.useEffect(() => {
        dispatch(getData())
    }, [])
    React.useEffect(() => {
        if (Object.keys(data).length > 0) {
            // console.log(data.extras.categories)
            setCategories(data.extras.categories)
        }
    }, [data])
    React.useEffect(() => {
        if (Object.keys(data).length > 0) {

            setMenuItem(Object.keys(data?.extras.categories)[activeMenuItemIndex])
        }
    }, [activeMenuItemIndex, data])
    return (
        <div className="homeOuterContainer">
            <div className="homeContainer">
                <div className="homeHeader">
                    <h1>Build Your Menu</h1>
                </div>
                <div className="homeItems">
                    <div className="homeItemsMenu">
                        {data && <Categories data={categories} setActiveMenuItem={setactiveMenuItemIndex} />}
                    </div>
                    <div className="homeContent">
                        {data && menuItem && <Content menuItem={menuItem} data={data} />}
                    </div>
                </div>
            </div>
        </div>
    )
}