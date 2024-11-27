import {Component} from "react"
import { FaArrowLeft } from "react-icons/fa";
//import {Link} from "react-router-dom"

import UserDetailsForm from "../UserDetailsForm";
import Header from "../Header"
import CartContext from "../../context/CartContext"
import "./index.css"

 const sample_data = {
    "title": "Designing Across Senses",
    "subtitle": "A Multimodal Approach to Product Design",
    "isbn13": "9781491954249",
    "price": "$27.59",
    "image": "https://itbook.store/img/books/9781491954249.png",
    "url": "https://itbook.store/books/9781491954249"
}

const {title, image, price} = sample_data 

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
                {/* <div className="checkout-page-container">
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
                                        <img src={image} alt={title} className="summary-item-image" />
                                        <p className="summary-item-title">{title}</p>
                                        <p className="summary-item-price">{price}</p>
                                    </div>
                                    <div className = "summary-item-container">
                                        <p className="summary-total-title">Total</p>
                                        <p className="summary-total-price">{"Rs. XYZ/-"}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>                                    
                </div> */}
            </CartContext.Consumer>

        );
    }
}

export default Checkout