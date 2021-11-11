import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from 'src/components/grid'
import Total from 'src/components/total'
import Stars from 'src/components/stars'
import CustomLoader from 'src/components/custom-loader'

import { State } from 'src/store/types'

import { requestMatrice } from 'src/store/game/actions'

import useStyles from './styles'

interface IGame {

}
const Game = (props: IGame) => {
  const {} = props

  //#region State
  const loading = useSelector<State>(state => state.game.loading)
  const error = useSelector<State>(state => state.game.error)
  //#endregion State

  //#region Hooks
  const styles: any = useStyles({})
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(requestMatrice())
  }, [dispatch])
  //#endregion Hooks

  return (
    <div className={styles.gamePage}>

      {loading && <CustomLoader />}
      {error && <span className={styles.error}>Error loading game data :( ... {error}</span>}
      {error && <span className={styles.error}>The Same Origin Policy disallows reading the remote resource at https://www.fdj.fr/apigw/rtg/rest/euromillions</span>}

      {!loading &&
        <div className={styles.gameContainer}>

          <div className={styles.gameHeader}>
            <h2 className={styles.gridTitle}>Grille 1</h2>

            <Total />
          </div>

          <div className={styles.gameContent}>
            <Grid />
            <Stars />
          </div>
        </div>
      }
    </div>
  )
}

export default Game