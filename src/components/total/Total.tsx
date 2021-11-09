
import { useSelector } from 'react-redux'

import { State } from 'src/store/types'

import useStyles from './styles'

interface ITotal {

}
const Total = (props: ITotal) => {
  const {} = props

  //#region State
  const total: any = useSelector<State>(state => state.game.playerData.total)
  //#endregion State
  
  //#region Hooks
  const styles: any = useStyles({})
  //#endregion Hooks

  return (
    <div className={styles.totalContainer}>
      <span className={styles.totalText}>Mise totale {total} €</span>
    </div>
  )
}

export default Total