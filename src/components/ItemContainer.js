import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      // refers redux state variable for eithe numOfCakes or numOfIceCreams
      <h2>Item -{props.item} </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

// i know that u are mapping state to component props but  here are few ownProps that the componet has, you can use of it  if you want to
// ownProps is the props that are passed to the component from the parent component
const mapStateToProps = (state, ownProps) => {
  // we are passing cake as prop from parent component
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // based on props we can dispatch action for cake and icecream
  // bcoz of mapDispatchToProps the buyItem fn is now available as a prop  in component
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    // we return an object  with a property buyItem whose value is dispatchFunction
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
