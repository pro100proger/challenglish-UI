import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes path={"/"}>
                    {/*<Route path={"/"} element={} />*/}
                    {/*<Route path={"main"} element={} />*/}
                    {/*<Route path={"registration"} element={} />*/}
                    {/*<Route path={"login"} element={} />*/}

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
