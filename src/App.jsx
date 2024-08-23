import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
//import Home from "./components/Home";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home/>*/}
      {/*<Login/>*/}
      {/*<Register/>*/}
      {/*<Cart/>*/}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
