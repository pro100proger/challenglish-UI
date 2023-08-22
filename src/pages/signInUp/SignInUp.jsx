import "./sign-in-up.style.css"
import React, {useState, useEffect} from "react";
import {ReactComponent as Logo} from "../../icons/logo.svg";
import CustomSignInUpInput from "../../components/CustomSignInUpInput/CustomSignInUpInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import {ReactComponent as Arrow} from "../../icons/Arrow.svg";
import Language from "../../icons/language.png";


const SignInUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    }

    const handleClick = event => {
        event.preventDefault()
    }

    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () =>
            container.classList.add("right-panel-active"));

        signInButton.addEventListener('click', () =>
            container.classList.remove('right-panel-active'));
    }, []);


    return (
        <div className={"sign-in-up-page container"} id="container">
            <div className="form-container sign-up-container">
                <form action="#">

                    <div className={"sign-up-logo-text"}>
                        <div className={"sign-up-logo"}>
                            <Logo/>
                        </div>
                        <div className={"sign-up-site-name"}>
                            ChallEnglish
                        </div>
                    </div>

                    <div className={"sign-up-slogan"}>
                        Overcome the challenges and learn English with us.
                    </div>
                    <div className={"sign-up-additional-text"}>
                        Welcome! Please create an account to continue.
                    </div>

                    <CustomSignInUpInput
                        rectangle_color={false}
                        type="text"
                        label={"First Name"}
                        name={"firstName"}
                        placeholder={"Enter First Name"}
                        value={user.firstName}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <CustomSignInUpInput
                        rectangle_color={false}
                        type="text"
                        label={"Last Name"}
                        name={"lastName"}
                        placeholder={"Enter first name"}
                        value={user.lastName}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <CustomSignInUpInput
                        rectangle_color={false}
                        type="text"
                        label={"Email Address"}
                        name={"email"}
                        placeholder={"Enter email"}
                        value={user.email}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <CustomPasswordInput
                        rectangle_color={true}
                        label={"Password"}
                        name={"password"}
                        placeholder={"Enter password"}
                        value={user.password}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <CustomPasswordInput
                        rectangle_color={true}
                        label={"Confirm password"}
                        name={"confirmPassword"}
                        placeholder={"Enter confirmation password"}
                        value={user.confirmPassword}
                        handleChange={handleChange}
                    />

                    <div className={"sign-up-additional-text-below"}>
                        After signing up you will receive confirmation letter on your email.
                    </div>

                    <button className={"sign-up-button-sign-up"} onClick={handleClick}>
                        Sign Up
                    </button>
                </form>
            </div>

            <div className="form-container sign-in-container">
                <form action="#">

                    <div className={"sign-up-logo-text"}>
                        <div className={"sign-up-logo"}>
                            <Logo/>
                        </div>
                        <div className={"sign-up-site-name"}>
                            ChallEnglish
                        </div>
                    </div>
                    <div className={"padding-div"}/>
                    <div className={"padding-div"}/>

                    <div className={"sign-up-slogan"}>
                        Overcome the challenges and learn English with us.
                    </div>
                    <div className={"sign-in-padding"}/>
                    <div className={"sign-up-additional-text"}>
                        Welcome back! Please sign in to your account.
                    </div>
                    <div className={"padding-div"}/>
                    <div className={"padding-div"}/>

                    <CustomSignInUpInput
                        rectangle_color={false}
                        type="text"
                        label={"Email Address"}
                        name={"email"}
                        placeholder={"Enter email"}
                        value={user.email}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <div className={"padding-div"}/>
                    <CustomPasswordInput
                        rectangle_color={true}
                        label={"Password"}
                        name={"password"}
                        placeholder={"Enter password"}
                        value={user.password}
                        handleChange={handleChange}
                    />
                    <div className={"sign-in-padding"}/>
                    <div className={"padding-div"}/>

                    <button className={"sign-up-button-sign-up"} onClick={handleClick}>
                        Sign In
                    </button>
                </form>
            </div>


            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <div className={"overlay-panel"}>

                            <div className={"green-rectangle-left-component"}>
                                <div className={"green-rectangle-left-top-angle"}>
                                    <div className={"green-rectangle-left-top-angle-1"}/>
                                    <div className={"green-rectangle-left-top-angle-2"}/>
                                </div>
                                <div  className={"sign-in-up-photo"}>
                                    <img src={Language} alt="Language Icon" />
                                </div>

                                <div className={"green-rectangle-left-bottom_section"}>
                                    <div className={"green-rectangle-left-sign-in-button"}>
                                        <Arrow className={"green-rectangle-left-arrow"}/>
                                        <button className="green-rectangle-left-sign-in-text" id="signIn">Sign In
                                        </button>
                                    </div>
                                    <div className={"green-rectangle-left-bot-angle"}>
                                        <div className={"green-rectangle-left-bot-angle-1"}/>
                                        <div className={"green-rectangle-left-bot-angle-2"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <div className={"green-rectangle-component overlay-panel overlay-right"}>

                            <div className={"green-rectangle-right-component"}>
                                <div className={"green-rectangle-top-angle"}>
                                    <div className={"green-rectangle-top-angle-1"}/>
                                    <div className={"green-rectangle-top-angle-2"}/>
                                </div>
                                <div className={"sign-in-up-photo"}>
                                    <img src={Language} alt="Language Icon" />
                                </div>

                                <div className={"green-rectangle-bottom_section"}>
                                    <div className={"green-rectangle-bot-angle"}>
                                        <div className={"green-rectangle-bot-angle-1"}/>
                                        <div className={"green-rectangle-bot-angle-2"}/>
                                    </div>

                                    <div className={"green-rectangle-sign-up-button"}>
                                        <button className="green-rectangle-sign-up-text" id="signUp">Sign Up</button>
                                        <Arrow className={"green-rectangle-arrow"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInUp;