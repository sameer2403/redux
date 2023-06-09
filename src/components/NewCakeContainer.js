import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes -{props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
      {/* <button onClick={props.buyCake}>Buy Cake</button> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  //selector : buyCake
  numOfCakes: state.cake.numOfCakes,
});

// step:2
// mapDispatchToProps  will basically map our dispatch of an action-creator to a prop in our component
// so our component now receives a second additional prop called buyCake which will basically dispatch the buyCake Action
const mapDispatchToProps = (dispatch) => ({
  // in our case we mapped dispatching buyCake() to a prop called  buyCake

  buyCake: (number) => dispatch(buyCake(number)),
});

// step:3
//
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
