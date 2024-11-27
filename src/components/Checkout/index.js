import {Component} from "react"
import { FaArrowLeft } from "react-icons/fa";
//import {Link} from "react-router-dom"

import UserDetailsForm from "../UserDetailsForm";
import Header from "../Header"
import CartContext from "../../context/CartContext"
import "./index.css"

class Checkout extends Component {
    render(){
        return (
            <CartContext.Consumer>
                {value=>{
                   const { cartList } = value;
                   const isCartEmpty = cartList.length === 0
                   let total = 0
                   if (!isCartEmpty) {
                      cartList.map((eachCartItem) => {
                       return total += parseInt(eachCartItem.price.slice(1))
                       }
                     )
                   }
            
                   return(
                    <div className="checkout-page-container">
                    <Header/>
                    <div className = "checkout-form">
                        <div className = "checkout-content-container">
                            <h1 className = "checkout-heading">Checkout</h1>
                            <button className = "back-button">
                                <FaArrowLeft className = "back-icon"/>
                            </button>
                            <div className = "form-and-summary">
                                <UserDetailsForm/>
                                <div className = "summary-container">
                                    <div className = "summary-item-container">
                                        <p className="total">Total Books</p>
                                        <p className="total"> {cartList.length}</p>
                                    </div>
                                    <div className = "summary-item-container">
                                        <p className="total">Amount</p>
                                        <p className="total">{total}/-</p>
                                    </div>
                                    <div className = "summary-item-container">
                                        <p className="summary-total-title">Total Amount</p>
                                        <p className="summary-total-price">Rs. {total}/-</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>                                    
                </div>
                   )
                }}
            </CartContext.Consumer>

        );
    }
}

export default Checkout