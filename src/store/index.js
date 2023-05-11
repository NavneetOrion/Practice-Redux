import {createStore} from 'redux'

const ReducerFunc = (state={multiply : 1},action) =>{

  if(action.type==='Mul2')
  {
    return {multiply : state.multiply* 2}

  }
  else if(action.type==='Mul5')
  {
    return {multiply : state.multiply*5}
  }
  else{
    return state
  }
  
}


const store = createStore(ReducerFunc);

export default store;