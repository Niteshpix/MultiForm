import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UserForm from "./Pages/UserForm";

 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
