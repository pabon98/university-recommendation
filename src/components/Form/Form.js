import React, { useState } from "react";
import Categories from "../Categories/Categories";
import "./Form.css";

const Form = () => {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState([]);
 
  const filterItem = (categItem) => {
    const updatedItems = Categories.filter((curElm) => {
      return curElm.score === categItem;
    });
    setItems(updatedItems);
  };
  const handleClick =()=>{
  const selected = document.getElementById('quality').value
  console.log(selected);
  }
  const submitHandler = (e) => {
    const searchText = e.target.value;
    const matchFlight = Categories.filter((mission) =>
      mission.uni_name
        .toLowerCase()
        .startsWith(searchText.toLowerCase())
    );
    setTerm(matchFlight);
    console.log(matchFlight);
  };

  // const sortByDate = (day) => {
  //   const today = new Date().getTime();
  //   const matchFlight = Categories.filter(
  //     (mission) =>
  //       today - new Date(Date.parse(mission.launch_date_local)).getTime() ===
  //       day
  //   );
  //   setTerm(matchFlight);
  // };

  

  

  
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="me-2" htmlFor="exampleInputNumber">
            Student Id
          </label>
          <input className="w-25" type="text" name="" id="" />
        </div>
        <label className="me-2" htmlFor="">
          Department
        </label>
        <select className="w-25 mx-auto my-2" id="department">
          <option>CSE</option>
          <option>EEE</option>
          <option>ETE</option>
          <option>Civil</option>
          <option>Pharmacy</option>
          <option>English</option>
          <option>BBA</option>
          <option>Mathmatics</option>
        </select>
        <br />
        <label className="me-4" htmlFor="">
          Quality
        </label>
        <select className="w-25 mx-auto my-2" id="quality" onClick={()=> handleClick()}>
          <option>Good</option>
          <option>Average</option>
          <option>Low</option>
        </select>
        <br />
      
      </form>
      <button
        onClick={() => filterItem("Good")}
        type="submit"
        className="btn btn-warning my-2"
      >
        Recommend Good
      </button>
      <button
        onClick={() => filterItem("Recommended")}
        type="submit"
        className="btn btn-success mx-2 my-2"
      >
         Recommend
      </button>
      <button
        onClick={() => filterItem("Not Recommended")}
        type="submit"
        className="btn btn-danger mx-2 my-2"
      >
        Not Recommend
      </button>
      
      <div className="row">
      {items.map((item) => {
        const { id, uni_name, rating, score } = item;
        return (
        <div className="col-md-4 g-3">
              <div
            key={id}
            className="card mx-5"
            style={{ width: "18rem" }}
          >
            <div class="card-body">
              <h5 class="card-title">{uni_name}</h5>
              <p class="card-text">Rating: {rating}</p>
              <p className="card-text">Score: {score}</p>
            </div>
          </div>
        </div>
        );
      })}
      </div>



      
    </div>

    
  );
};


export default Form;
