
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import RegisterForm  from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import StoreList from "./components/StoreList";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      < RegisterForm />
      <LoginForm />
      <StoreList />
      <ProductForm />
      <Footer />
    </>
  );
}

export default App;