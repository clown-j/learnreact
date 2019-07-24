import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM, INIT_LIST } from './actionTypes';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const addItemAction = ()=>({
  type: ADD_ITEM
});

export const delItemAction = (value)=>({
  type: DEL_ITEM,
  value
})

export const initListAction = (data) =>({
  type: INIT_LIST,
  data
})