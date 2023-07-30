import {connect} from 'react-redux';
import CounterView from './view';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch({type: 'INCREMENT'})
});

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

export default Counter;
