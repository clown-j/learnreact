import React, { Component } from 'react';
import store from './store';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleBtnAdd = this.handleBtnAdd.bind(this);
    this.changeState = this.changeState.bind(this);
    store.subscribe(this.changeState);
  }

  render() {
    return (
      <div>
        <div>
          <input
            placeholder="TODO"
            value={this.state.inputValue}
            onChange={this.handleInputValue}
          />
          <button onClick={this.handleBtnAdd}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.clickItemDelete.bind(this, index)}
                >{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  handleInputValue(e){
    const action = {
      type: 'handle_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleBtnAdd(){
    const action = {
      type: 'add_item'
    }
    store.dispatch(action);
  }
  clickItemDelete(index){
    const action = {
      type: 'delete_item',
      value: index
    }
    store.dispatch(action);
  }
  changeState(){
    this.setState(
      store.getState()
    )
  }
}

export default TodoList;

