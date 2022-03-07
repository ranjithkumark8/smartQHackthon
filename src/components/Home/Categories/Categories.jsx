import React from "react";
import "./Categories.css"
export const Categories = ({ data, setActiveMenuItem }) => {
    // const handleActiveMenu = () => {

    // }
    return (
        Object.keys(data).map((cat, index) => {
            return (
                <div className="categoriesContainer" key={cat} onClick={() => setActiveMenuItem(index)}>
                    <img src={data[cat].icon} alt={cat} />
                    <p>{cat}</p>
                </div>
            )
        })
    )
}