import { BsPersonSquare } from "react-icons/bs";
import logo from "./logo.svg";
import Home from "./pages/home";
import { CgProductHunt } from "react-icons/cg";
import ProductsPage from "./pages/products";
import ListWithUs from "./components/list-with-us";
import SignUp from "./pages/signup";
import AboutPage from "./pages/about";
import Stories from "./pages/stories";
// import Footer from "./components/footer"
import AboutHome from "./components/about-home";


function App() {
    return (
        <div className="w-full max-width-[1300px]">
            <Home/>
            {/* <SignUp /> */}
            {/* <AboutPage/> */}
            {/* <Stories/>
            <AboutHome/>
            <Footer/> */}
            
        </div>
    );
}

export default App;
