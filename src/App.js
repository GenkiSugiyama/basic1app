import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from './actions/counterActions';

class App extends Component {
  render(){
    return (
      <div>
        Clicked: {this.props.count} times.
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

// コンポーネントでReduxのstateを操作するために
// mapStateToProps: propsでstateを取得できるようにする
// mapDispatchToProps：Actionをdispatchする関数をpropsで使えるようにする
// 上記の設定を行う
const mapStateToProps = (state) => {
  return {
    count: state //countというpropsでstateを扱えるように
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // incrementというpropsでdispatch(increment())を扱えるように
    increment: () => dispatch(increment()),
    // decrementというpropsでdispatch(decrement())を扱えるように
    decrement: () => dispatch(decrement())
  }
}

// mapStateToPropsとmapDispatchToPropsを使うためにAppコンポーネントとconnectする
export default connect(mapStateToProps,mapDispatchToProps)(App);
