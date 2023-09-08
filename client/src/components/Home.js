import React from "react";
import Meal from "./Meal";
import Navbar from "./Navbar";
import data from "../data.json";

function Home() {
  return (
    <div>
      <Navbar />
      <Meal data={data} />
    </div>
  );
}

export default Home;
