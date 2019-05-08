import React from "react";
import Employees from "../employeeComponent/employees";
import PlaceKitten from "../placeKittenComponent/placekitten";
import Product from "../productComponent/productOutlet";
import Jokes from "../jokeComponent/jokeOutlet";
import Todos from "../todosComponent/todosOutlet";

function MainContentComponent() {
  return (
    <main>
      {/* <Employees /> */}
      {/* <PlaceKitten /> */}
      {/* {<Product />} */}
      {/* <Jokes /> */}
      <Todos />
    </main>
  );
}

export default MainContentComponent;
