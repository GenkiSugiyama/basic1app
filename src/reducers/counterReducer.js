const initState = 0;

// Actionによって新しいstateを作成して返すReducerを作成
const counterReducer = (state = initState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    default:
      return state;
  }
}

export default counterReducer;