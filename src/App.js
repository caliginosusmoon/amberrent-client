import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import AboutPage from "./pages/about";
import Stories from "./pages/stories";

function App() {
    return (
        <div className="w-full max-width-[1300px]">
            {/* <Home/> */}
            {/* <SignUp /> */}
            {/* <AboutPage/> */}
            <Stories/>
        </div>
    );
}

export default App;
