import React from "react";
import "./Cart.css"

export const Cart = () => {
    return (
        <div className="cartContainer">
            <div className="cartHeader">
                <p>cartSummary</p>
            </div>
            <div>
                Your Cart is Empty
            </div>
        </div>
    )
}