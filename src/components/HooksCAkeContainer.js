import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function HooksCakeContainer() {
  // useSelector receives redux state as its argument
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // useDispatch returns a reference to the dispatch function from the redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes -{numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
