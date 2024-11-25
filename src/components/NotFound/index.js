import {Component} from "react"

//import notFoundImage from "../../assets/not-found-image.webp"
import Header from "../Header";

import "./index.css"

class NotFound extends Component {
    render(){
        return (
            <>
                <Header/>
                <div className = "not-found-container">
                    <div>
                        <img src='https://raw.githubusercontent.com/mahesh-j90/book-store/refs/heads/master/src/assets/not-found-image.webp' alt = "Not Found" className = "not-found-image"/>
                    </div>
                    <h1> Oops!!!  Something went wrong!</h1>
                </div>
            </>            
        );
    }
}

export default NotFound