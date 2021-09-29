import React from "react";
import coronaImage from "../../images/Group 15404.png";

const Body = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid w-75" src={coronaImage} alt="" />
        </div>
        <div className=" header-text col-md-6 my-auto">
          <h4 className="fw-bolder text-danger">COVID-19 Alert</h4>
          <h1 className="fw-bold my-4 text-success">
            Stay at Home quarantine To stop Corona virus
          </h1>
          <p className="fw-bold my-4 text-secondary">
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </p>
          <button className="btn btn-danger">Let us help</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
