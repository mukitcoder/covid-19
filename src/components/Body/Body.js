import React from "react";
import "./Body.css"
import coronaImage from "../../images/Group 15404.png";

const Body = () => {
  return (
    <div>
      <div className="row px-5">
        <div className="col-md-6 col-sm-6">
          <img className="img-fluid w-75" src={coronaImage} alt="" />
        </div>
        <div className=" header-text col-md-6 col-sm-6 my-auto text-style">
          <h4 className="fw-bolder text-danger">What Is Covid-19</h4>
          <h1 className="fw-bold my-4 text-success">
          Coronavirus
          </h1>
          <p className="fw-bold my-4 text-secondary">
          Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response
          </p>
          <button className="btn btn-danger">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
