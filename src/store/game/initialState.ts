import { Game } from './types'

const initialState: Game = {
  matrice: {
    patterns: []
  },
  loading: false,
  error: '',
  
  playerData: {
    gridNumber: null,
    starNumber: null,
    total: 0
  }
}

export default initialState