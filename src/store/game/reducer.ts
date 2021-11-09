import { 
  SET_MATRICE,
  SET_LOADING,
  SET_ERROR,

  SELECT_GRID_NUMBER,
  SELECT_STAR_NUMBER,
} from './actionTypes'
import initialState from './initialState'

import { Game } from './types'

const setMatrice = (state: Game, action) => {
  return {
    ...state,
    matrice: { 
      ...state.matrice?.patterns ?? [],
      patterns: action.payload,
    }
  } 
}

const setLoading = (state: Game, action) => {
  return {
    ...state,
    loading: action.payload
  } 
}


const setError = (state: Game, action) => {
  return {
    ...state,
    error: action.payload
  } 
}

const selectGridNumber = (state: Game, action) => {
  return calculateTotal({
    ...state,
    playerData: {
      ...state.playerData,
      gridNumber: action.payload
    }
  })
}

const selectStarNumber = (state: Game, action) => {
  return calculateTotal({
    ...state,
    playerData: {
      ...state.playerData,
      starNumber: action.payload
    }
  })
}

//#region Computation functions
const calculateTotal = (state: Game) => {
  const match = state.matrice?.patterns.find(potential => 
    potential.pattern[0].toString() === state.playerData.gridNumber?.toString() 
    && potential.pattern[1].toString() === state.playerData.starNumber?.toString() 
  )

  const newTotal: number = match?.cost.value ?? 0

  return {
    ...state,
    playerData: {
      ...state.playerData,
      total: newTotal
    }
  }
}
//#endregion Computation functions

const actionHandler = {
  [SET_MATRICE]: setMatrice,
  [SET_LOADING]: setLoading,
  [SET_ERROR]: setError,

  [SELECT_GRID_NUMBER]: selectGridNumber,
  [SELECT_STAR_NUMBER]: selectStarNumber,
}

const reducer = (state: Game = initialState, action: any) => {
  const handler: any = actionHandler[action.type]

  return handler ? handler(state, action) : state
}

export default reducer