export class Game {
  matrice: Matrice
  loading: boolean
  error: string

  playerData: PlayerData
}

export class Matrice {
  patterns: Pattern[]
}

export class Pattern {
  cost: {
    currency: string
    value: number
  }
  pattern: number[]
}

export class PlayerData {
  gridNumber: number
  starNumber: number
  total: number
}