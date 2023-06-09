import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes -{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// step:1
// state from the ewdux store is mapped to our component props
// it means apart from whatever props CakeContainer was receiving, it will now receive an
//additional prop called numOfCakes which reflects the numOfCakes in the resux store
const mapStateToProps = (state) => ({
  //selector : buyCake
  numOfCakes: state.cake.numOfCakes,
});

// step:2
// mapDispatchToProps  will basically map our dispatch of an action-creator to a prop in our component
// so our component now receives a second additional prop called buyCake which will basically dispatch the buyCake Action
const mapDispatchToProps = (dispatch) => ({
  // in our case we mapped dispatching buyCake() to a prop called  buyCake

  buyCake: () => dispatch(buyCake()),
});

// step:3
//
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

//code flow
//  First is mapStateToProps: when you want to access the redux state in your componentyou define
//  a function called mapStateToProps and this function gets the redux state as a parameter which can then be used to retrieve the appropriate state properties
// in our case state.numOfCakes to a  prop called numOfCakeswhich will then render in the JSX (props.numOfCakes)

// similarly for dispatchong actions we  have a function called mapDispatchToProps
// and this function get the dispatch method  as a parameter and allows us to map action-creators to props in our component
// in our example we mapped dispatching buyCake to a prop called buyCake,i.e., buyCake: () => dispatch(buyCake()),
// this allows us to call buyCake as props.buyCake and all this is posibible bcoz of the connect fn.
