import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Header from "./feauters/home/Header";
import Footer from "./feauters/home/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/partners" element={<Partners/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
