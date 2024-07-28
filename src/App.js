import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import SignUp from "./pages/signup";

function App() {
    return (
        <div className="w-full max-width-[1300px]">
            {/* <Home/> */}
            <SignUp />
        </div>
    );
}

export default App;
