import "./custom-sign-in-up-input.style.css"
import React from "react";


const CustomSignInUpInput = ({rectangle_color, label, value, placeholder, handleChange, ...otherProps}) => {

    return (
        <div className={"custom-sign-in-up-input-component"}>
            <div className={rectangle_color ? "custom-sign-in-up-input-rectangle-transparent" :
                "custom-sign-in-up-input-rectangle"}/>

            <div className="custom-sign-in-up-input-container">
                <label className="custom-sign-in-up-input-label" htmlFor="input">{label}</label>
                <br/>
                <input className="custom-sign-in-up-input-input" id="input" value={value} placeholder={placeholder} onChange={handleChange} {...otherProps}/>
            </div>
        </div>
    );
}

export default CustomSignInUpInput;