import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInUp from "./pages/signInUp/SignInUp";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes path={"/"}>
                    {/*<Route path={"/"} element={} />*/}
                    {/*<Route path={"main"} element={} />*/}
                    <Route path={"login"} element={<SignInUp/>} />
                    <Route path={"registration"} element={<SignInUp/>} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
