const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === 'handle_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'add_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value,1)
    return newState;
  }
  return state;
}