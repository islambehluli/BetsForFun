import React from "react"
import {loader, spinner} from "../styles/loader.module.css"
const Loader = () =>{
    return(
        <div className={loader}>
            <div className={spinner}></div>
        </div>
    )
}
export default Loader