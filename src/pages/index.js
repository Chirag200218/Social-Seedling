import styles from '@/styles/Home.module.css'
import NavBar from 'components/feed/navbar'
import MiddleComponent from 'components/feed/middleComponent'
import SideComponent from 'components/feed/sideComponent'

export default function Home() {
  return (
    <div className={styles.cont}>
      <NavBar id={"Home"}/>
      <MiddleComponent/>
      <SideComponent/>
    </div>
  )
}
