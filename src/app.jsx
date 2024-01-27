import { Outlet } from "react-router-dom";
import './styles/App.css'
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";


function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    
    
    
    </>
  )
}


export default App;








