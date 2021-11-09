import Loader from 'react-loader-spinner'

import useStyles from './styles'

interface ICustomLoader {
  height?: number
  width?: number
}

const CustomLoader = (props: ICustomLoader) => {
  const { height = 30, width = 30 } = props

  const styles = useStyles()
  
  return (
    <div className={styles.customLoaderContainer}>
      <Loader
        type='Puff'
        color='#00BFFF'
        height={height}
        width={width}
        timeout={Infinity}
      />
    </div>
  )
}

export default CustomLoader

