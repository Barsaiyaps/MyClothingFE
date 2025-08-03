import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import AllRoute from "./routes/AllRoute";


function App() {
  return (
    <>
     <Navbar />
     <Navbar2/>
    <div className="app">
      <AllRoute />
   </div>
      <Footer />
    </>
  );
}

export default App;