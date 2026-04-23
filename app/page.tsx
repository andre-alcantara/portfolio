import { Container } from '@/components/ui/Container'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className={styles.title}>Olá! I'm a brazilian designer based in São Paulo, over the past 5 years, 
          I've had the privilege of working with brands like Itáu, Raízen and MRV, bringing clarity to complex 
          problems with intentional decisions and attention to craft.
          <br></br>Currently at Mercado Livre.</h1>
      </Container>
    </main>
  )
}
