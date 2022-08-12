import { CHANGE_SEARCHFIELD } from './constant'

const initialState = {
  searchField: '',
}

export const searchRobot = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      //   return {...state, searchField :action.payload}
      return Object.assign({}, state, { searchField: action.payload })

    default:
      return state
  }
}
