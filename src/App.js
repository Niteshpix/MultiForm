import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddressInfo from "./Components/AddressInfo";
import Home from "./Components/Home";

import Information from "./Components/Information";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/Addressinfo" element={<AddressInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
