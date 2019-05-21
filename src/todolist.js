import React, { Component } from 'react';

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input placeholder="TODO"/>
          <button>提交</button>
        </div>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    );
  }

}

export default TodoList;

