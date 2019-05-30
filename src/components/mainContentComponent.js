import React from "react";
import Employees from "../employeeComponent/employees";
import PlaceKitten from "../placeKittenComponent/placekitten";
import Product from "../productComponent/productOutlet";
import Jokes from "../jokeComponent/jokeOutlet";
import Todos from "../todosComponent/todosOutlet";
import Conditional from "../conditionalComponent/conditionalOutlet";
import ButtonLogin from "../button-login/buttonLoginOutlet";
import Forms from "../formComponent/formOutlet";

function MainContentComponent() {
  return (
    <main>
      {/* <Employees /> */}
      {/* <PlaceKitten /> */}
      {/* {<Product />} */}
      {/* <Jokes /> */}
      {/* <Todos /> */}
      {/* {<Conditional />} */}
      {/* {<ButtonLogin />} */}
      <Forms />
    </main>
  );
}

export default MainContentComponent;
