# redux 使用方法

## 初步使用

#### 使用步骤
1. 新建store文件夹，并在文件文件夹中新建index.js文件,并编写以下代码

```
    import { createStore } from 'redux';
    const store = createStore();
    export default store;
```

2. 新建reducer.js 文件，并输入以下内容。

```
const defaultState = {
  inputValue: '测试',
  list: []
}

export default (state = defaultState, action) => {
  return state;
}

```

3. 在index文件中引入reducer，并把其传给createStore;
```
import reducer from './reducer'
const store = createStore(reducer);
```

4. 在组件中引入store以供使用。
```
import store from './store';
// 把值赋值给this.state
this.state = store.getState();
// 即可取出store里面的值
```

5. 在对应的事件中调用dispatch发送action
```
handleInputValue(e){
    const action = {
      type: 'handle_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
```
6. reducer.js中处理action
```
if(action.type === 'handle_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
```
7. 组件中使用subscribe订阅函数，改版state
```$xslt
store.subscribe(this.changeState);

 changeState(){
    this.setState(
      store.getState()
    )
  }
```