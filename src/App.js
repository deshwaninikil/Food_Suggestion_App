import "./styles.css";
import React, { useState } from "react";

const foodsList = {
  Indian: [
    { foodName: "Pav Bhaji" },
    { foodName: "Pani Puri" },
    { foodName: "Dosa" },
    { foodName: "Chhole Bhature" },
    { foodName: "Samosa" }
  ],
  Chinese: [
    { foodName: "Noodles" },
    { foodName: "Manchurian" },
    { foodName: "Spring Roll" },
    { foodName: "Dim Sums" },
    { foodName: "Szechwan Chilli Chicken" }
  ],
  Italian: [
    { foodName: "Pizza" },
    { foodName: "Polenta" },
    { foodName: "Lasagna" },
    { foodName: "Ravioli" },
    { foodName: "Arancini" }
  ],
  American: [
    { foodName: "Hot Dogs" },
    { foodName: "Philly Cheese Steak" },
    { foodName: "Nachos" },
    { foodName: "Reuben Sandwich" },
    { foodName: "Delmonico's Steak." }
  ]
};

export default function App() {
  const [clickedFoodCategories, setFoodCategories] = useState("Indian");

  function genreHandler(genre) {
    setFoodCategories(genre);
    const el1 = document.querySelector(".food-list");
    el1.style.display = "block";

    const el2 = document.querySelector(".clear-btn");
    el2.style.display = "block";
  }

  function clearHandler() {
    const el1 = document.querySelector(".food-list");
    el1.style.display = "none";

    const el2 = document.querySelector(".clear-btn");
    el2.style.display = "none";
  }

  return (
    <div className="App">
      <h1>Food Suggestion 🍔🍕 </h1>
      <h3> 🍕Click on below food categories to know there types🍕</h3>
      {Object.keys(foodsList).map((categories) => (
        <button
          onClick={() => genreHandler(categories)}
          style={{
            border: "10 px solid #3B82F6",
            cursor: "pointer",
            borderRadius: "0.5rem",
            background: "yellow",
            padding: "0.5rem 1rem",
            margin: "0.5rem",
            color: ""
          }}
        >
          {categories} ⬇️
        </button>
      ))}

      <ul
        className="food-list"
        style={{
          display: "none",
          width: "30%",
          margin: "10px auto"
        }}
      >
        <li
          style={{
            listStyle: "none",
            fontWeight: 800
          }}
        >
          {clickedFoodCategories.toUpperCase()} foods categories are given below
        </li>
        {foodsList[clickedFoodCategories].map((food) => (
          <li
            style={{
              listStyle: "none",
              border: "2px solid #3B82F6"
            }}
          >
            <div>{food.foodName}</div>
          </li>
        ))}
      </ul>

      <button
        onClick={clearHandler}
        className="clear-btn"
        style={{
          color: " solid#000",
          height: "28px",
          textAlign: "center",
          backgroundColor: "#F8F8F8",
          borderRadius: "0.5rem",
          border: "2px solid #000",
          background: "yellow",
          cursor: "pointer",
          padding: "2px",
          width: "100px",
          display: "block",
          margin: "0 auto"
        }}
      >
        Clear
      </button>
    </div>
  );
}
