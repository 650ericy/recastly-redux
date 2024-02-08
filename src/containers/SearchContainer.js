
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var stateToProps = (state) => {
  return {
    value: state.value,
  };
};

const DispatchToProps = (dispatch) => {
  return { handleSearchInputChange: (value) => dispatch(handleSearchChange(value)) };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
var SearchContainer = connect(
  stateToProps,
  DispatchToProps
)(Search);

export default SearchContainer;