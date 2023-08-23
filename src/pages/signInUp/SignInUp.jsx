import "./sign-in-up.style.css"
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Logo} from "../../icons/logo.svg";
import CustomSignInUpInput from "../../components/CustomSignInUpInput/CustomSignInUpInput";
import CustomPasswordInput from "../../components/CustomPasswordInput/CustomPasswordInput";
import {ReactComponent as Arrow} from "../../icons/Arrow.svg";
import Language from "../../icons/language.png";
import axios from "axios";


const SignInUp = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userSignIn, setUserSignIn] = useState({
        email: "",
        password: ""
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [errors, setErrors] = useState("");


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
        setUserSignIn({...userSignIn, [name]: value});
        setErrors({...errors, [name]: ''});
    }


    async function loginUser(user) {
        console.log("loginUser");
        const sendUser = {
            email: user.email,
            password: user.password
        };
        try {
            const response = await axios.post("http://localhost:8765/worker/api/v1/registration/authenticate", sendUser)
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate("/main");
        } catch(error) {
            console.log(error.message)
            console.log("error")
        }
    }
    const handleClick1 = event => {
        event.preventDefault()
        if (isValid()) {
            loginUser(user)

        } else {
            console.log(errors);
        }
    }

    function registerUser(user) {
        console.log("registerUser");
        const sendUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        };
        axios.post("http://localhost:8765/worker/api/v1/registration", sendUser)
            .then((response) => {
                login()
            })
            .catch((error) => {
                if (error) {
                    console.log(error.response);
                    console.log("error.response.status: ", error.response.status);
                }
            });
    }

    const handleClick2 = event => {
        event.preventDefault()
        if (isValid()) {
            registerUser(user)

        } else {
            console.log(errors);
        }
    }

    function login() {
        navigate("/login");
    }


    const validateInput = data => {
        let errors = {}
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(data.email)) {
            errors.email = "Please enter valid email"
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(data.password)) {
            errors.password = "Password must contain at least 8 characters (letters and numbers)"
        }
        return {
            errors,
            isValid: JSON.stringify(errors) === '{}'
        }
    }
    const isValid = () => {
        const {errors, isValid} = validateInput(user)
        if (!isValid) {
            setErrors(errors)
        }
        return isValid
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
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

                    <button className={"sign-up-button-sign-up"} onClick={handleClick2}>
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
                        value={userSignIn.email}
                        handleChange={handleChange}
                    />
                    <div className={"padding-div"}/>
                    <div className={"padding-div"}/>
                    <CustomPasswordInput
                        rectangle_color={true}
                        label={"Password"}
                        name={"password"}
                        placeholder={"Enter password"}
                        value={userSignIn.password}
                        handleChange={handleChange}
                    />
                    <div className={"sign-in-padding"}/>
                    <div className={"padding-div"}/>

                    <button className={"sign-up-button-sign-up"} onClick={handleClick1}>
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