import React, { useState } from "react";
import AddressInfo from "../Components/AddressInfo";
import Educationinfo from "../Components/Educationinfo";
import Information from "../Components/Information";
import '../App.css'


function UserForm() {
  const [page, setPage] = useState(0);
  const [valid, setValid] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    
  });

  const FormTitles = ["Personal Information !!", "Education !!","Address !!", "Preview !!"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Information valid={valid} setValid={setValid} formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Educationinfo formData={formData} setFormData={setFormData} />;
    } else if(page === 2){
      return <AddressInfo formData={formData} setFormData={setFormData} />;
    }
   
  };

  return (
    <div className="App">
     
    <div className="progressbar">
        <div
          style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page ===2 ? '75%': "100%" }}
        ></div>
      </div>


      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
       
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;