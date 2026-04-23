import styles from './Container.module.css'

type ContainerProps = {
  children: React.ReactNode
  maxWidth?: number
}

export function Container({ children, maxWidth = 984 }: ContainerProps) {
  return (
    <div className={styles.container} style={{ maxWidth }}>
      {children}
    </div>
  )
}
