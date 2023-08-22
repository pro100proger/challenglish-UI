import "./custom-password-input.style.css"
import {useState} from "react";
import { ReactComponent as PasswordEye } from "../../icons/Eye.svg";


const CustomPasswordInput = ({rectangle_color, label, value, placeholder, handleChange, ...otherProps}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passwordShown, setPasswordShown] = useState(false);
    const v = value?.length ? "block" : "none";

    return (
        <div className={"custom-password-input-component"}>
            <div className={rectangle_color ? "custom-password-input-rectangle-transparent" :
                "custom-password-input-rectangle"}/>

            <div className="custom-password-input-container">
                <label className="custom-password-input-label" htmlFor="input">{label}</label>
                <br/>
                <div className={"custom-password-input-position"}>
                    <input className="custom-password-input-input" id="input" type={passwordShown ? "text" : "password"} value={value} placeholder={placeholder} onChange={handleChange} {...otherProps}/>
                    <PasswordEye
                        className={label ? "eye eye-with-label" : "eye"}
                        style={{ display: v }}
                        onClick={() => setPasswordShown(!passwordShown)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomPasswordInput;