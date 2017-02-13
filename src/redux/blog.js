import { showLoading, hideLoading } from 'react-redux-loading-bar';
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_NAME = 'ADD_NAME';
export const ASYNC_NAME_ADDED = 'ASYNC_NAME_ADDED';

// ------------------------------------
// Actions
// ------------------------------------
function addName (name) {
  return {
    type: ADD_NAME,
    payload: {
      name
    }
  }
}

function asyncNameAdded (name) {
  return {
    type: ASYNC_NAME_ADDED,
    payload: {
      name
    }
  }
}

const asyncAddName = (name) => {
  return (dispatch, getState) => {
    // init operation
    dispatch(addName(''));
    dispatch(showLoading());
    setTimeout(()=>{
      // async operation
      dispatch(asyncNameAdded(`Async ${name}`));
      dispatch(hideLoading());
    }, 5000)
  }
}


export const actions = {
  addName,
  asyncAddName
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_NAME]: (state, action) => (Object.assign({}, state, { name: action.payload.name })),
  [ASYNC_NAME_ADDED]: (state, action) => (Object.assign({}, state, { name: action.payload.name })),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: '',
}
export default function appReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
