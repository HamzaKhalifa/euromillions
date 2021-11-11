import useStyles from './styles'

interface ICustomLoader {
  height?: number
  width?: number
}

const CustomLoader = (props: ICustomLoader) => {
  const {} = props

  const styles = useStyles()
  
  return (
    <div className={styles.customLoaderContainer}>
      Loading..
    </div>
  )
}

export default CustomLoader

